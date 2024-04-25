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
    if (event.target.classList.contains("changeBtn")) {
      const changeBtn = document.querySelector(".changeBtn");
      
      changeBtn.style.display = 'none';
      const watchId = event.target.id;

      if (!document.querySelector(".editWatchForm")) {
        const response = await fetch(`/api/watch/${watchId}`)
        const getWatch = await response.json();

        const createForm = document.createElement("div");
        createForm.className = "form-edit";
        createForm.innerHTML = `
        <form class='editWatchForm' id=${watchId}>
            <input type="text" name="title" value=${getWatch.title} required placeholder="title"/>
            <input type="text" name="description" value=${getWatch.description} required placeholder="description"/>
            <input type="text" name="gender" value=${getWatch.gender} required placeholder="gender"/>
            <input type="text" name="color" value=${getWatch.color} required placeholder="color"/>
            <button type='submit'>Подтвердить</button>
              </form>
        `;
        event.target.parentNode.parentNode.append(createForm);
        const form = document.querySelector(".editWatchForm");
  
        // changeBtn.addEventListener("click", (change)=> {
        //   change.preventDefault();
        //   console.log(form);
        //   form.remove();
        //   return;
        // } )
        console.log(form);
        
        form.addEventListener("submit", async (eventSub) => {
          eventSub.preventDefault();
          const formData = new FormData(form);
          const inputs = Object.fromEntries(formData);
          console.log(inputs);
          console.log(watchId);
          try {
            const response = await fetch(`/api/watch/change/${watchId}`, {
              method: "PATCH",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(inputs),
            });
  
            const result = await response.json();
            if (result.success) {
              window.location.href = "/";
            } else {
              console.log("Ошибка при обновлении");
            }
          } catch (error) {
            console.error(error);
          }
        });
      }
    }
  });
}

// add

// const watchContainer = document.querySelector('.watchContainer');
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
