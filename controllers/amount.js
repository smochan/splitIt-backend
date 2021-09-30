const Amount = require("../models/amount");

const amount = async (req, res) => {
  try {
    console.log(typeof req.body);

    const newAmount = new Amount({
      // payer: req.body.payer,
      amount: req.body.amount,
      comment: req.body.comment,
      status: req.body.status,
      contributors: req.body.contributors,
    });
    await newAmount.save();

    res.status(200).send("amount added");
    console.log("amount added");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  amount,
};
