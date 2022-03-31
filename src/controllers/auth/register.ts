import User from '../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const saltRounds = 10;

const register: Controller = async (req, res, next) => {
  try {
    User.findOne(
      {
        email: req.body.email,
      },
      function (err, foundUser) {
        if (err) console.log(err);
        else {
          if (foundUser) res.status(400).send('User already exist');
          else {
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
              const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                mobile: req.body.mobile,
              });
              newUser.save(function (err) {
                if (err) console.log(err);
                // else {
                //   var token = jwt.sign(
                //     { token: req.body.email },
                //     process.env.SECRET_KEY
                //   );
                //   console.log(token);
                // res.cookie(token, token, { expire: 360000 + Date.now() });
                // Cookies.set('token', token, { expires: 1 });
                else res.send('user registered');
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
