const Amount = require("../models/amount")

const amount = (req, res) => {
    console.log(typeof req.body);

    const newAmount = new Amount({
        amount: req.body.amount,
        comment: req.body.comment,
        status: req.body.status,
    });
    newAmount.save(function (err) {
        if(err) console.log(err);
        else console.log("amount added");
    });
}

module.exports = {
    amount,
};