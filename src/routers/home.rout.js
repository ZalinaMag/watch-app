const express = require("express");
const route = express.Router();

const renderTemplate = require("../utils/renderTemplate");
const Home = require("../views/Home");

route.get("/", (req, res) => {
  const { login } = req.session;

  renderTemplate(Home, { login }, res);
});

module.exports = route;
