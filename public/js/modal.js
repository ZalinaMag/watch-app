const modalBtn = document.querySelector('.modalBtn');
const form = document.querySelector('.orderForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const orderForm = document.querySelector('.orderForm');
  const formData = new FormData(orderForm);
  const inputs = Object.fromEntries(formData);

  const res = await fetch('/order/submit', {
    method: 'POST',
    body: formData,
  });
});

// const orderButton = document.querySelector(".order");

// const orderHeader = document.querySelector(".orderPage h2");

// orderButton.addEventListener("click", () => {
//   if (orderHeader) {
//     orderHeader.scrollIntoView({ behavior: "smooth" });
//   }
// });


