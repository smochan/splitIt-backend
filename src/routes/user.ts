import { Router } from 'express';
import controllers from "../controllers/auth";
import Group from '../models/group';
import profile from '../controllers/profile/profile';
// const { temp } = require('../controllers/temp');

const route = Router();

route.post("/register", controllers.register);
route.get("/profile", profile);

// app.get('/', function (req, res) {
// res.send('Hello World');
// });

// route.get('/login', temp);
// route.get('/register', temp);

export default route;
