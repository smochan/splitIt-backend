import Group from "../models/group";

export const getGroupById = async (id: string) => {
  try {
    const group = await Group.findById(id);
    return group;
  }
  catch (err) {
    console.log(err);
  }
}

export const getGroupsByUserId = async (userId: string) => {
  try {
    const groups = await Group.find({members: userId});
    return groups;
  }
  catch (err) {
    console.log(err);
  }
}