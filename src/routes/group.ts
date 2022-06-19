import { Router } from 'express';
import controllers from '../controllers/group';
import verifyToken from '../middleware/verifyToken';
// const { temp } = require('./controllers/temp');

const route = Router();

route.post('/add', verifyToken, controllers.group);
route.get('/find/:id', controllers.find);
// route.post('/members', temp);

export default route;
