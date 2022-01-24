import Group from "../../models/group";

const findGroups = async (userId, next) => {
  try {
    const groups = await Group.find({ "members": userId });
    return groups;
  }
  catch (err) {
    next(err);
    return;
  }
}

export default findGroups;