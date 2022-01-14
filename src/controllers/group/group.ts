import Group from "../../models/group";

const group: Controller = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
    return;
  }
};

export default group;