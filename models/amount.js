const mongoose = require("mongoose");

const amountSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    amount: Number,
    comment: String,
    status: Boolean
});

module.exports = mongoose.model("Amount", amountSchema)
// module.exports = {
//     amountSchema
// }