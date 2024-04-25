const React = require('react');
const Layout = require('../views/Layout');

module.exports = function NewCard({login}) {
  return (
  <Layout login={login}>
      <link rel="stylesheet" href="./css/style.css" />
      <div className='addNewCard'>
        <form className='addWatchForm' encType="multipart/form-data">
          <input type="file" name="image" required />
          <input type="text" name="title" placeholder="название" required />
          <input type="text" name="description" placeholder="описание" required />
          <input type="file" name="gender" placeholder="мужские/женские" required />
          <input type="file" name="color" placeholder="цвет" required />
          <button type='submit'>Добавить новую модель</button>
        </form>
      </div>
      <script defer src='/watchCard.js' />
    </Layout>
  );
}