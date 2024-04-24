const express = require("express");
const route = express.Router();
const { Watch, User } = require("../../db/models");

const renderTemplate = require("../utils/renderTemplate");
const Home = require("../views/Home");

route.get("/", async (req, res) => {
  const { login } = req.session;
  const allWatch = await Watch.findAll({ raw: true });
  console.log(allWatch);

  renderTemplate(Home, { login, allWatch }, res);
});

module.exports = route;
