const express = require("express");
const route = express.Router();

const render = require("../utils/renderTemplate");
const Home = require("../views/Home");

route.get("/", (req, res) => {
  const { login } = req.session;

  render(Home, { login }, res);
});

module.exports = route;
