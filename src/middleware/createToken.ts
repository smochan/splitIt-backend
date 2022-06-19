import jwt from 'jsonwebtoken';

const createToken = (id: string, next) => {
  try {
    const token = jwt.sign({ userId: id }, process.env.SECRET_KEY);
    return { token };
    // return { accessToken };
  } catch (err) {
    next(err);
  }
};

export default createToken;
