import User from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// const Cookies = require('js-cookie');
const saltRounds = 10;

const register: Controller = async (req, res, next) => {
  try {
    User.findOne(
      {
        email: req.body.username,
      },
      function (err, foundUser) {
        if (err) console.log(err);
        else {
          if (foundUser) res.send("User already exist");
          else {
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
              const newUser = new User({
                email: req.body.username,
                password: hash,
              });
              newUser.save(function (err) {
                if (err) console.log(err);
                // else {
                //   var token = jwt.sign(
                //     { token: req.body.username },
                //     process.env.SECRET_KEY
                //   );
                // console.log(token);
                // res.cookie(token, token, { expire: 360000 + Date.now() });
                // Cookies.set('token', token, { expires: 1 });
                else res.send("user registered");
                // }
              });
            });
          }
        }
      }
    );
    return;
  } catch (err) {
    next(err);
    return;
  }
};

export default register;
