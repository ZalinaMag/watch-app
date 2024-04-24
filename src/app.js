require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { secureRoute, checkUser } = require('./middlewares/common');

const orderRouter = require('./routes/order.router');

const app = express();

const { PORT } = process.env;

const sessionConfig = {
  name: 'cookieName',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.static(__dirname));
app.use(session(sessionConfig));

app.use('/order', orderRouter);

app.listen(PORT, function () {
  console.log(`Server listening at localhost:${this.address().port}`);
});
