const React = require('react');
const Layout = require('./Layout');

module.exports = function editCard({ watch, login }) {
  return (
    <Layout login={login}>
      <div className='editWatchContainer'>
      <form className='editWatchForm' id={watch.id} encType="multipart/form-data">
      <input type="file" name="image" defaultValue={watch.img} required />
      <input type="text" name="name" defaultValue={watch.name} required />
      <input type="text" name="description" defaultValue={watch.description} required />
      <input type="file" name="gender" defaultValue={watch.gender} required />
      <input type="file" name="color" defaultValue={watch.color} required />
      <button type='submit'>Отредактировать</button>
        </form>
        </div>
        <script defer src='/watchCard.js' />
    </Layout>
  );
}
