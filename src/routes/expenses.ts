import { Router } from 'express';
import controller from "../controllers/expenses"

const route = Router();
route.get("/find/:id", controller.find);
route.post("/addNew", controller.addNew);

export default route;
