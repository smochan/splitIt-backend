import User from "../models/user";

export const getUserDetailsById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) {
    return;
  }
  return {name: user.name, email: user.email, mobile: user.mobile};
}

export const getUserDetailsByName = async (name: string) => {
  const user = await User.findOne({ name: name });
  if (!user) {
    return;
  }
  return user;
}