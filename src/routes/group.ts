import { Router } from 'express';
import controllers from '../controllers/group';
import verifyToken from '../middleware/verifyToken';
// const { temp } = require('./controllers/temp');

const route = Router();

route.post('/add', verifyToken, controllers.group);
route.get('/find/:id', verifyToken, controllers.find);
route.post('/update/:id', verifyToken, controllers.updateGroup);
route.get('/friends/:id', verifyToken, controllers.friends);
// route.post('/members', temp);

export default route;
