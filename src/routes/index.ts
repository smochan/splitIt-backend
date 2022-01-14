import Router from 'express';
import userRouter from './user';
import groupRouter from './group';

const routes = Router();

routes.use("/user", userRouter);
routes.use('./group', groupRouter);

export default routes;