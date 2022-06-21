import Group from "../../models/group";
import { getGroupsByUserId } from "../../services/groupRepository";

const findGroups = async (userId, next) => {
  try {
    const groups = getGroupsByUserId(userId);
    return groups;
  }
  catch (err) {
    next(err);
    return;
  }
}

export default findGroups;