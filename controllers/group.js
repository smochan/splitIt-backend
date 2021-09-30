const Group = require("../models/group");

const group = (req, res) => {
  console.log(req.body);
  const newGroup = new Group({
    members: req.body.members,
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
