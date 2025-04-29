require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Swagger setup
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const session = require("express-session");
const FileStore = require("session-file-store")(session);
const { secureRoute, checkUser } = require("./middlewares/common");
const removeHeader = require('./middlewares/removeHeader')

const orderRouter = require("./routers/order.router");
const home = require("./routers/home.rout");
const loginRouter = require("./routers/login.router");
const regRouter = require("./routers/reg.router");
const apiRouter = require("./routers/api.router");
const logoutRouter = require("./routers/logout.rout");

const app = express();

const { PORT } = process.env;

//Session confoguration
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

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Watch Project API',
      version: '1.0.0',
      description: 'Документация API Watch Project',
    },
    servers: [
      { url: `http://localhost:${PORT}` },
    ],
  },
  apis: ['./src/routers/*.js'],
};
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.static(__dirname));
app.use(session(sessionConfig));
app.use(removeHeader);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Root status endpoint
app.get('/status', (req, res) => {
  res.json({ status: 'OK', message: 'Watch Project API is running' });
});

//Application routes
app.use("/logout", logoutRouter);
app.use("/login", loginRouter);
app.use("/reg", regRouter);
app.use("/api", apiRouter);
app.use("/order", orderRouter);
app.use("/", home);

// 404 for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

//Start server
app.listen(PORT, function () {
  console.log(`Server listening at localhost:${this.address().port}`);
});
