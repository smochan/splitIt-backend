import { Router } from 'express';
import controllers from "../controllers/auth";
// const { temp } = require('../controllers/temp');

const route = Router();

route.post("/register", controllers.register);

// app.get('/', function (req, res) {
// res.send('Hello World');
// });

// route.get('/login', temp);
// route.get('/register', temp);

export default route;
