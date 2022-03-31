import User from '../../models/user';

const profile : Controller = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.id);
    if (!user) {
      res.status(200).json({
        success: true,
        message: 'User found',
        data: {
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          // avatar: user.avatar,
      }});
    }
  } catch (err) {
    next(err);
    return;
  }
};

export default profile;
