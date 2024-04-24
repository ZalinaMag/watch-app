const React = require('react');

function Card({ watch, login }) {
  return (
    <div className='watchCard'>
      <img src={watch.img} />
      <p>{watch.title}</p>
      <p>{watch.description}</p>
      {login === 'admin' && (
        <>
          <button id={watch.id} className='delBtn' type='button'>Удалить</button>
          <a href={`/change/${watch.id}`}>
            <button id={watch.id} className='changeBtn' type='button'>Отредактировать</button>
          </a>
        </>
      )}
      {/* <script defer src='/watchCard.js' /> */}
    </div>
  );
}

module.exports = Card;
