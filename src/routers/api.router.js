const apiRouter = require("express").Router();

const mailRouter = require("./api.mail.router");
const userRouter = require("./api.user.router");
const watchRouter = require("./api.watch.router");

apiRouter.use("/user", userRouter);
apiRouter.use("/watch", watchRouter);
apiRouter.use("/mail", mailRouter)

module.exports = apiRouter;
