if (document.querySelector(".watchContainer")) {
  const watchContainer = document.querySelector(".watchContainer");

  watchContainer.addEventListener("click", async (event) => {
    if (event.target.classList.contains("delBtn")) {
      const watchId = event.target.id;
      try {
        const response = await fetch(`/api/watch/${watchId}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (result.success) {
          const deletedWatchItem = event.target.parentNode.parentNode;
          deletedWatchItem.remove();
        } else {
          console.log("Ошибка при удалении");
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (event.target.classList.contains("changeBtn")) {
      const changeBtn = document.querySelector(".changeBtn");

      const watchId = event.target.id;

      if (!document.querySelector(".editWatchForm")) {

        const createForm = document.createElement("div");
        createForm.className = "form-edit";
        createForm.innerHTML = `
        <form class='editWatchForm' id=${watchId}>
            <input type="text" name="title" defaultValue={watch.name} required placeholder="title"/>
            <input type="text" name="description" defaultValue={watch.description} required placeholder="description"/>
            <input type="text" name="gender" defaultValue={watch.gender} required placeholder="gender"/>
            <input type="text" name="color" defaultValue={watch.color} required placeholder="color"/>
            <button type='submit'>Отредактировать</button>
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
