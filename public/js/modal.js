const modalBtn = document.querySelector(".modalBtn");

modalBtn.addEventListener("click", async () => {
  const orderForm = document.querySelector(".orderForm");
  const formData = new FormData(orderForm);
  const inputs = Object.fromEntries(formData);

  const res = await fetch("/order/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputs),
  });
  

  console.log(inputs);
  console.log(formData);
});
