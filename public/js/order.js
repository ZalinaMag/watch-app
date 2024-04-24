// const form = document.querySelector("#regForm");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const data = new FormData(form);
//   const res = Object.fromEntries(data);
//   if (!res.login || !res.email || !res.password) {
//     alert("Please provide your data");
//   } else {
//     console.log(res);
//     try {
//       const response = await fetch("/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(res),
//       });
//       const result = await response.json();
//       console.log(result);
//       if (result.regDone) {
//         setTimeout(() => {
//           window.location.href = "/items";
//         }, 200);
//       }
//       if (result.err) {
//         const errMsg = document.querySelector(".regErrMsg");
//         errMsg.innerText = result.err;
//         errMsg.style.color = "purple";
//       }
//     } catch (error) {
//       console.log("ошибочка реги", error);
//       alert("ошибочка реги");
//     }
//   }
// });
