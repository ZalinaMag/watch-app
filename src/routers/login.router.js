const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

loginRouter.post("/", async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (!user) {
      console.log("Пользователь не найден");
      res.json({ err: "Неверный логин" });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.save(() => {
          res.redirect("/");
        });
      } else {
        res.json({ err: "Неверный пароль" });
      }
    }
  } catch (error) {
    console.log(`loginRouter => ${error}`);
  }
});

module.exports = loginRouter;
