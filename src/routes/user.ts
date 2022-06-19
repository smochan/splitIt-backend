import { Router } from 'express';
import controllers from '../controllers/auth';
import Group from '../models/group';
import profile from '../controllers/profile/profile';
import createToken from '../middleware/createToken';


// const { temp } = require('../controllers/temp');

const route = Router();

route.get("/profile", profile);
route.post('/register', controllers.register);
route.post('/login', controllers.login);

// app.get('/', function (req, res) {
// res.send('Hello World');
// });

// route.get('/login', temp);
// route.get('/register', temp);

export default route;
