import User from '../../models/user';

const findUser = async (id, next) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    next(err);
    return;
  }
};

export default findUser;