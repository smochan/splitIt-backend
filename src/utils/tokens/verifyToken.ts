import jwt from 'jsonwebtoken';

const verifyToken = (token: string, id: string, next) => {
  try {
    // const hash = bcrypt.hash(id, process.env.SALT_ROUNDS);

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (err) {
    next(err);
  }
};

export default verifyToken;
