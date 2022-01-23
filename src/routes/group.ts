import { Router } from 'express';
import controllers from '../controllers/group';
// const { temp } = require('./controllers/temp');

const route = Router();

route.post('/members', controllers.group);

// route.post('/members', temp);

export default route;
