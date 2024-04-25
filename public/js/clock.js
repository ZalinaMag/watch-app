const hour = document.querySelector('#hour');
const minute = document.querySelector('#hour');
const second = document.querySelector('#hour');
setInterval(() => {
  const d = new Date(); // object of date()
  const hr = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();
  const hrRotation = 30 * hr + min / 2; // converting current time
  const minRotation = 6 * min;
  const secRotation = 6 * sec;

  hour.style.transform = `rotate(${hrRotation}deg)`;
  minute.style.transform = `rotate(${minRotation}deg)`;
  second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
