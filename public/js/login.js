const regBtn = document.querySelector(".reg-form");
const loginBtn = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const loginText = document.querySelector(".login-text");
const formLogin = document.querySelector("form");
const errorsField = document.querySelector(".login-errors");
const buttonReg = formLogin.querySelector("button");

// переключение из режима логина в режим регистрации
regBtn.addEventListener("click", () => {
  loginBtn.removeAttribute("disabled");
  regBtn.setAttribute("disabled", "true");
  emailInput.removeAttribute("disabled");
  emailInput.style.display = "block";
  loginText.innerText = "Зарегистрируйтесь";
  buttonReg.innerText = "Регистрация";
});

// переключение из режима регистрации в режим логина
loginBtn.addEventListener("click", () => {
  loginBtn.setAttribute("disabled", "true");
  regBtn.removeAttribute("disabled");
  emailInput.setAttribute("disabled", "true");
  emailInput.style.display = "none";
  loginText.innerText = "Введите данные своей учетной записи";
  buttonReg.innerText = "Войти";
});

// слушатель для формы
formLogin.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const dataForm = new FormData(formLogin);
    const inputsForm = Object.fromEntries(dataForm);
    if (loginBtn.hasAttribute("disabled")) {
      if (!inputsForm.login || !inputsForm.password) {
        errorsField.innerText = "Заполните все поля!";
      } else {
        errorsField.innerText = "";
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputsForm),
        });
        const errors = await response.json();
        if (errors.msg) {
          errorsField.innerText = `${errors.msg}`;
          window.location.href = "/";
        }
      }
    } else if (regBtn.hasAttribute("disabled")) {
      if (!inputsForm.login || !inputsForm.password || !inputsForm.email) {
        errorsField.innerText = "Заполните все поля!";
      } else {
        errorsField.innerText = "";
        const response = await fetch("/api/reg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputsForm),
        });
        const errors = await response.json();
        if (errors.msg) {
          errorsField.innerText = `${errors.msg}`;
          window.location.href = "/";
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});
