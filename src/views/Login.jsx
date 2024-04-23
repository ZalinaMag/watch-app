const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <div className='login-flex'>
        <div className='login-block'>
          <p className='login-text'>Введите данные своей учетной записи</p>
          <p className='login-errors'></p>
          <div> <button disabled className='login-form'>Login</button><button className='reg-form'>Registration</button></div>
          <form action="/api" method="post" className='login-form' style={{display: 'flex', flexDirection: 'column', maxWidth: '300px'}}>
            <input id='login' type="text" name='login' placeholder='login' />
            <input id='email' type="text" disabled name='email' style={{display: 'none'}} placeholder='email'/>
            <input id='password' type="password" name='password' placeholder='password' />
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
        <script defer src="/js/login.js"></script>
    </Layout>
  );
};
