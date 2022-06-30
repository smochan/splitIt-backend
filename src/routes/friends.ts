import { Router } from 'express';
import controller from "../controllers/friends"
import verifyToken from '../middleware/verifyToken';

const route = Router();

route.get("/find", controller.friends);
route.get("/find/:friendId", verifyToken, controller.transactions);

export default route;
