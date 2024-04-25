const userRouter = require("express").Router();
const { User } = require("../../db/models");

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
