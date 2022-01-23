import Group from '../../models/group';
import User from '../../models/user';

const friends = async (req, res, next) => {
  try {
    const data = await User.findOne({ _id: req.body.userId });
  } catch (err) {
    next(err);
    return;
  }
};

export default friends;
