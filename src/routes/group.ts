import { Router } from 'express';
import controllers from '../controllers/group';
// const { temp } = require('./controllers/temp');

const route = Router();

route.post('/add', controllers.group);
route.get('/find/:id', controllers.find);
// route.post('/members', temp);

export default route;
