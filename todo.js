//index.router.js

// const indexRouter = require('express').Router();
// const { Router } = require('express');
// const indexRouter = new Router();

// const renderTemplate = require('../utils/renderTemplate');
// const Home = require('../views/Home');

// indexRouter.get('/', (req, res) => {
//   // const { login } = req.app.locals.user;
//   const { login } = req.session;
//   // console.log(login);
//   renderTemplate(Home, { login }, res);
// });

// indexRouter.get('/logout', (req, res) => {
//   req.session.destroy(() => {
//     res.clearCookie('cookieName');
//     res.redirect('/');
//   });
//   // res.app.locals.user.login = '';
// });

// module.exports = indexRouter;
----------------------------------------------------------
//reg.router

//const regRouter = require('express').Router();
// const renderTemplate = require('../utils/renderTemplate');
// //! bcrypt .hash(pass, 10) Для хэширования
// const bcrypt = require('bcrypt');
// const Register = require('../views/Register');
// const { User } = require('../../db/models');

// regRouter.get('/', (req, res) => {
//   renderTemplate(Register, null, res);
// });

// regRouter.post('/', async (req, res) => {
//   try {
//     const { login, password } = req.body;
//     const user = await User.findOne({ where: { login } });
//     if (user) {
//       console.log(`User with login ${login} already exists`);
//       res.json({ err: `User with login ${login} already exists` });
//     } else {
//       const hash = await bcrypt.hash(password, 10);
//       const newUser = await User.create({ login, password: hash });
//       // res.app.locals.user.login = login;
//       req.session.login = newUser.login;
//       // console.log(req.session);
//       req.session.save(() => {
//         //! json для fetch
//         res.json({ regDone: `Registraion success ${login}` });
//         // res.redirect('/');
//       });
//     }
//   } catch (error) {
//     res.send(`regRouter => ${error}`);
//   }
// });

// module.exports = regRouter;
-----------------------------------------------------
//home.jsx

// const React = require('react');
// const Layout = require('./Layout');

// module.exports = function Home({ login }) {
//   return (
//     <Layout login={login}>
//       {login ? (
//         <h1>Hello {login}</h1>
//       ) : (
//         <h1>Hello User, reg pls</h1>
//       )
//     }
//     </Layout>
//   );
// };

-----------------------------------------------------
