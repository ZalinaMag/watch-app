const loginInput = document.querySelector("#exampleInputLogin");
const emailInput = document.querySelector("#exampleInputEmail");
const passwordInput = document.querySelector("#exampleInputPassword");
const saveButton = document.querySelector(".btnSaveReg");

if (saveButton) {
  saveButton.addEventListener("click", async () => {
    const login = loginInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    if (login && email && password) {
      try {
        const response = await fetch("/reg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login, email, password }),
        });

        const data = await response.json();

        if (data.err) {
          alert(data.err);
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration");
      }
    } else {
      alert("All fields are required.");
    }
  });
}


