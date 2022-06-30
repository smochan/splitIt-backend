import Router from 'express';
import userRouter from './user';
import groupRouter from './group';
import friendRouter from './friends';
import expenseRouter from './expenses';

const routes = Router();

routes.use("/user", userRouter);
routes.use('/group', groupRouter);
routes.use("/friends", friendRouter)
routes.use("/expenses", expenseRouter)
// routes.use("/verify", verifyTokenRouter)

export default routes;
