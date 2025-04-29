const regRouter = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

/**
 * @openapi
 * /reg:
 *   post:
 *     summary: Регистрация нового пользователя
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
 *               - email
 *               - password
 *             properties:
 *               login:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешная регистрация (пустой JSON)
 *       400:
 *         description: Пользователь с таким логином или email уже существует
 */
regRouter.post("/", async (req, res) => {
  try {
    const { login, email, password } = req.body;
    const userEmail = await User.findOne({ where: { email } });
    const userLogin = await User.findOne({ where: { login } });
    if (userEmail || userLogin) {
      console.log(`User with login ${email} already exists`);
      res.json({ err: "Такой пользователь уже существует" });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, email, password: hash });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.json({});
      });
    }
  } catch (error) {
    res.send(`regRouter => ${error}`);
  }
});

module.exports = regRouter;
