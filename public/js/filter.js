const watchContainer = document.querySelector('.watchContainer');
const btnGenderMan = document.querySelector('.btnGenderMan');
const btnGenderWom = document.querySelector('.btnGenderWom');
const btnColorGold = document.querySelector('.btnColorGold');
const btnColorSilver = document.querySelector('.btnColorSilver');

const fetchWatches = async (query) => {
  const response = await fetch(`/api/watch?${new URLSearchParams(query)}`);
  const watches = await response.json();
  watchContainer.innerHTML = '';
  watches.forEach((watch) => {
    const watchCard = document.createElement('div');
    watchCard.className = 'watchCard';
    watchCard.innerHTML = `
    <img class="img" src=${watch.img} />
    <p>${watch.title}</p>
    <p>${watch.description}</p>
      <div class="admin-buttons">
      </div>
    `;
    watchContainer.appendChild(watchCard);
  });
};

btnGenderMan.addEventListener('click', () => {
  console.log('clicked');
  fetchWatches({ gender: 'мужские' });
});
btnGenderWom.addEventListener('click', () => fetchWatches({ gender: 'женские' }));
btnColorGold.addEventListener('click', () => fetchWatches({ color: 'золотистый' }));
btnColorSilver.addEventListener('click', () => fetchWatches({ color: 'серебристый' }));
