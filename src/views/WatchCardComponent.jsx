const React = require("react");

function WatchComponentCard({ watch, login }) {
  return (
    <div className="watchCard">
      <img src={watch.img} />
      <p>{watch.title}</p>
      <p>{watch.description}</p>
      {login === 'admin' && (
        <div className='admin-buttons'>
          <button id={watch.id} className='delBtn' type='button'>Удалить</button>
          <button id={watch.id} className='changeBtn' type='button'>Отредактировать</button>
        </div>
      )}
    </div>
  );
}

module.exports = WatchComponentCard;
