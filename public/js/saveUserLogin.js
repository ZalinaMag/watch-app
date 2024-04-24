if (document.querySelector(".btnSave")) {
  const saveButton = document.querySelector(".btnSave");
  saveButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const login = document.querySelector("#exampleInputLogin1").value;
    const password = document.querySelector("#exampleInputPassword1").value;

    if (login && password) {
      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login, password }),
        });

        const data = await response.json();

        if (data?.err) {
          alert(data.err);
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      alert("Both login and password are required.");
    }
  });
}

const order = document.querySelector(".order");
{
  order.addEventListener("click", () => {
    window.location.href = "/order";
  });
}


