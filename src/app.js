require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const session = require("express-session");
const FileStore = require("session-file-store")(session);
const { secureRoute, checkUser } = require("./middlewares/common");

const app = express();

const { PORT } = process.env;

const sessionConfig = {
  name: "cookieName",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(session(sessionConfig));

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, function () {
  console.log(`Server listening at localhost:${this.address().port}`);
});
