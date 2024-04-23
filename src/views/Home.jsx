const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      {login ? (
        <h1>Hello {login}</h1>
      ) : (
        <h1>Hello User, reg pls</h1>
      )
    }
    </Layout>
  );
};
