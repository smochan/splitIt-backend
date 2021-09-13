const Group = require("../models/group");
const User = require("../models/user");
const mongoose = require("mongoose");

const group = (req, res) => {
  console.log(req.body);
  const newGroup = new Group({
    member: req.body.member,
    amount: req.body.amount,
  });
  newGroup.save(function (err) {
    if (err) console.log(err);
    else {
      res.status(200).send("group added");
      console.log("group added");
    }
  });
};

module.exports = {
  group,
};
