const Contributors = require("../models/contributors");

const contributors = (req, res) => {
  console.log(req.body);
  const newContributor = new Contributors({
    amount: req.body.amount,
    status: req.body.status,
  });
  newContributor.save(function (err) {
    if (err) console.log(err);
    else console.log("Contributor added");
  });
};
module.exports = { contributors };
