import Group from "../../models/group";
import { getGroupsByUserId } from "../../services/groupRepository";

const findGroups = async (userId, next) => {
  try {
    const groups = await getGroupsByUserId(userId);
    console.log(groups);
    return groups;
  }
  catch (err) {
    next(err);
    return;
  }
}

export default findGroups;