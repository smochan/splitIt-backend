const Group = require("../models/group");
const User = require("../models/user");

const group = (req, res) => {
    const newGroup = new Group;
    console.log(User.find({}));
    // newGroup.member.push()
}

module.exports = {
    group,
};