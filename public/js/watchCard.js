if (document.querySelector('.watchContainer')) {
  const watchContainer = document.querySelector('.watchContainer');

  watchContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delBtn')) {
      const watchId = event.target.id;
      try {
        const response = await fetch(`/api/watch/${watchId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.success) {
          const deletedWatchItem = event.target.parentNode.parentNode;
          deletedWatchItem.remove();
        } else {
          console.log('Ошибка при удалении');
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
}

// add

const watchContainer = document.querySelector('.watchContainer');
const addWatchForm = document.querySelector('.addWatchForm');
addWatchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(addWatchForm);
  console.log(formData);
  try {
    const response = await fetch('/api/watch', {
      method: 'POST',
      body: formData,
    });

    // await response.json();
    window.location.href = '/';

    // if (result) {
    //   const watchCard = document.createElement('div');
    //   watchCard.className = 'watchCard';

    //   const adminControls = login === 'admin' ? `
    //     <button id=${result.id} class='delBtn' type='button'>Удалить</button>
    //     <button id=${result.id} class='changeBtn' type='button'>Отредактировать</button>
    //   ` : '';

    //   watchCard.innerHTML = ` 
    //   <img src=${result.img} />
    //   <p>${result.title}</p>
    //   <p>${result.description}</p>
    //   <div class="admin">${adminControls}</div>
    //   `;
    //   watchContainer.append(watchCard);
    // }

    // addWatchForm.querySelectorAll('input').forEach((input) => {
    //   input.value = '';
    // });
  } catch (error) {
    console.log(error);
  }
});

// change
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.editWatchForm');
//   const watchId = form.getAttribute('id');

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const formData = new FormData(form);

//     try {
//       const response = await fetch(`/change/${watchId}`, {
//         method: 'PATCH',
//         body: formData,
//       });

//       const result = await response.json();
//       if (result.success) {
//         window.location.href = '/';
//       } else {
//         console.log('Ошибка при обновлении');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   });
// });
