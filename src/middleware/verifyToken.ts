import jwt from 'jsonwebtoken';
import User from '../models/user';
import { getUserDetailsById } from '../services/userRepository';

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const id = jwt.verify(token, process.env.SECRET_KEY);
    const user = await getUserDetailsById(id.userId);
    // User.findById(id.userId);
    req.user = user;
    return next();
    // return token;
  } catch (err) {
    next(err);
  }
};

export default verifyToken;
