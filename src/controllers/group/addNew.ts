import { IGroup } from '../../models/@types/group';
import Group from '../../models/group';
import User from '../../models/user';

const group: Controller = async (req, res, next) => {
  try {
    console.log("user", req.user);
    const newGroup = new Group({
      gName: req.body.gname,
      members: req.body.members,
    });
    await newGroup.save();
    res.status(200).send('group added');
    console.log('group added', newGroup);
  } catch (err) {
    next(err);
    return;
  }
};

export default group;
