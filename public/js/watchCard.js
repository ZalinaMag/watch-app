const watchContainer = document.querySelector(".watchContainer");

watchContainer?.addEventListener("click", async (event) => {
  if (event.target.classList.contains("delBtn")) {
    const watchId = event.target.id;
    try {
      const response = await fetch(`/${watchId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        const deletedWatchItem = event.target.parentNode;
        deletedWatchItem.remove();
      } else {
        console.log("Ошибка при удалении");
      }
    } catch (error) {
      console.error(error);
    }
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
