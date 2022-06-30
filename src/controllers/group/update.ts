import Group from "../../models/group";
import { getGroupById } from '../../services/groupRepository';

const updateGroup: Controller = async (req, res, next) => {
  try {
    const id = req.params.id;
    const members = req.body.members;
    const group = await getGroupById(id);
    for (let i in members){
      group.members.includes(members[i]) ? console.log('member already exists') : group.members.push(members[i]);
    }
    group.gName = req.body.gname;
    await group.save();
    res.status(200).send("group updated");
  } catch (err) {
    next(err);
    return;
  }
}

export default updateGroup;
