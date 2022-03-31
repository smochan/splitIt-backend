import jwt from 'jsonwebtoken';

const createToken = (id: string, next) => {
  try {
    // const exp = "30d";
    // const token = jwt.sign({ userId: id }, process.env.SECRET_KEY, {
    //   expiresIn: exp,
    // });

    // const accessToken = { token, exp };

    // const hash = bcrypt.hash(id, process.env.SALT_ROUNDS);

    const token = jwt.sign({ userId: id }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
    return { token };
    // return { accessToken };
  } catch (err) {
    next(err);
  }
};

export default createToken;
