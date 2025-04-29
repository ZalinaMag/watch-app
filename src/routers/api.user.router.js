const userRouter = require("express").Router();
const { User } = require("../../db/models");

/**
 * @openapi
 * /api/user:
 *   get:
 *     summary: Получить всех пользователей (только для администратора)
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Массив пользователей
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   login:
 *                     type: string
 *                   email:
 *                     type: string
 */

userRouter.get("/", async (req, res) => {
  if (req.session.login === "admin") {
    try {
      const allUsers = await User.findAll({ raw: true });
      res.json(allUsers)
    } catch (error) {
      console.log(error);
    }
  } else {
    res.redirect("/");
  }
});

module.exports = userRouter;
