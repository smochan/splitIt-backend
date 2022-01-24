import { Router } from 'express';
import controller from "../controllers/group"

const route = Router();

route.get("/find/:id", controller.friends);

export default route;