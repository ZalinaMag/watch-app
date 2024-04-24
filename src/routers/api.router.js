const apiRouter = require("express").Router();

const userRouter = require("./api.user.router");
const watchRouter = require("./api.watch.router");

apiRouter.use("/user", userRouter);
apiRouter.use("/watch", watchRouter);

module.exports = apiRouter;
