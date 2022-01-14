import User from "../../models/user";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import Cookies from "js-cookie";

const login: Controller = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    // to verify the token in different pages
    // var token = Cookies.get();
    // console.log(token);
    // var decoded = jwt.verify(token, process.env.SECRET_KEY);

    // User.findOne({ email: username}, function (err, foundUser) {
    // if (err) console.log(err);
    // else {

    User.findOne(
      {
        email: username,
      },
      function (err, foundUser) {
        if (err) console.log(err);
        else {
          if (foundUser) {
            bcrypt.compare(
              password,
              foundUser.password,
              function (err, result) {
                if (result === true) {
                  // var token = jwt.sign(
                  //   { token: username },
                  //   process.env.SECRET_KEY
                  // );
                  // console.log(token);
                  // res.cookie("token", token, { expire: 360000 + Date.now() });
                  // Cookies.set("token", token, { expires: 1 });

                  res.send("user found");
                } else res.send("incorrect password");
              }
            );
          } else res.send("user not registered");
        }
      }
    );
    // }
    // });
    return;
  } catch (err) {
    next(err);
    return;
  }
};
export default login;
