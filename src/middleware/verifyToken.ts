import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
  try {
    // const hash = bcrypt.hash(id, process.env.SALT_ROUNDS);
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (err) {
    next(err);
  }
};

export default verifyToken;
