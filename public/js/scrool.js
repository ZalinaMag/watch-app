function smoothScroll(targetY, duration = 700) {
  const start = window.scrollY;
  const distance = targetY - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const currentScroll = start + distance * progress;
    window.scrollTo(0, currentScroll);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

const orderBtn = document.querySelector(".details");
const orderHead = document.querySelector(".img");

orderBtn.addEventListener("click", () => {
  if (orderHead) {
    const headPosition = orderHead.getBoundingClientRect().top + window.scrollY;
    smoothScroll(headPosition);
  }
});

function smoothScrollTo(targetY, duration = 500) {
  const start = window.scrollY;
  const distance = targetY - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const currentScroll = start + distance * progress;
    window.scrollTo(0, currentScroll);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

const orderButton = document.querySelector(".order");
const orderHeader = document.querySelector(".orderPage h2");

orderButton.addEventListener("click", () => {
  if (orderHeader) {
    const headerPosition =
      orderHeader.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(headerPosition);
  }
});
