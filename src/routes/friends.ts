import { Router } from 'express';
import controller from "../controllers/group"

const route = Router();

route.get("/friends", controller.group);

export default route;