import Router from 'express';
import userRouter from './user';
import groupRouter from './group';
import friendRouter from './friends';

const routes = Router();

routes.use("/user", userRouter);
routes.use('/group', groupRouter);
routes.use("/friends", friendRouter)

export default routes;