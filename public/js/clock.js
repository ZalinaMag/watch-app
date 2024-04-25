document.addEventListener('DOMContentLoaded', () => {
  const hour = document.querySelector('#hour');
  const minute = document.querySelector('#minute');
  const second = document.querySelector('#second');

  setInterval(() => {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const hrRotation = 30 * hr + min / 2;
    const minRotation = 6 * min;
    const secRotation = 6 * sec;

    if (hour && minute && second) {
      hour.style.transform = `rotate(${hrRotation}deg)`;
      minute.style.transform = `rotate(${minRotation}deg)`;
      second.style.transform = `rotate(${secRotation}deg)`;
    }
  }, 1000);
});
