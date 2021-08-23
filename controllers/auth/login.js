require('dotenv').config();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Cookies = require('js-cookie');

const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    var token = Cookies.get();
    console.log(token);
    var decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    User.findOne({email: decoded,}, function(err, foundUser){
      if(err) console.log(err);
      else{
        if(foundUser) res.send("User token is present");
        else{
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
                      if (result === true) res.send("user found");
                      else res.send("incorrect password");
                    }
                  );
                }else res.send("user not registered");
              }
            }
          );
        }
      }
    })
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = {
    login,
};
