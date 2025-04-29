const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Аутентификация пользователя
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - password
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешный логин (пустой JSON)
 *       401:
 *         description: Неверный логин или пароль
 */
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
        // res.redirect("/");
        res.json({});
      } else {
        res.json({ err: "Неверный пароль" });
      }
    }
  } catch (error) {
    console.log(`loginRouter => ${error}`);
  }
});

module.exports = loginRouter;
