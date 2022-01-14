const Router = require('express');
const userRouter = require('./user');
const groupRouter = require('./group');

const routes = Router();

routes.use("/user", userRouter);
routes.use('./group', groupRouter);

export default routes;