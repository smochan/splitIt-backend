import User from '../../models/user';
import bcrypt from 'bcrypt';
import createToken from '../../utils/tokens/createToken';
// import jwt from "jsonwebtoken";
// import Cookies from "js-cookie";

const login: Controller = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // to verify the token in different pages
    // var token = Cookies.get();
    // console.log(token);
    // var decoded = jwt.verify(token, process.env.SECRET_KEY);

    // User.findOne({ email: username}, function (err, foundUser) {
    // if (err) console.log(err);
    // else {

    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).json({
        message: 'User not found',
      });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(400).json({
          message: 'Invalid password',
        });
      } else {
        const token = createToken(user._id, next);
        res.status(200).json({
          message: 'User logged in',
          data: {
            token: token,
          },
        });
      }
    }
    return;

    // function (err, foundUser) {
    //   if (err) console.log(err);
    //   else {
    //     if (foundUser) {
    //       bcrypt.compare(password, foundUser.password, function (err, result) {
    //         if (result === true) {
    //           // var token = jwt.sign(
    //           //   { token: username },
    //           //   process.env.SECRET_KEY
    //           // );
    //           // console.log(token);
    //           // res.cookie("token", token, { expire: 360000 + Date.now() });
    //           // Cookies.set("token", token, { expires: 1 });
    //           const token = createToken(foundUser._id, next);
    //           res.status(200).json({
    //             success: true,
    //             message: 'Login Successful',
    //             data: {
    //               token: token,
    //             },
    //           });
    //           // res.send('user found');
    //         } else res.send('incorrect password');
    //       });
    //     } else res.send('user not registered');
    //   }
    // }
    // }
    // });
  } catch (err) {
    next(err);
    return;
  }
};
export default login;
