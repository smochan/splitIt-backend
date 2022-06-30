import Group from '../../models/group';
// import User from '../../models/user';
import findGroups from '../../helpers/groupHelpers/findGroups';

const friends: Controller = async (req, res, next) => {
  try {
    const id = req.user.id;
    const response = await findGroups(id, next);
    let friends = [];
    for (let i = 0; i < response.length; i++) {
      for (let j = 0; j < response[i].members.length; j++) {
        const friend = response[i].members[j].toString();
        if (!(friends.includes(friend)) && !(friend == id)) friends.push(response[i].members[j].toString());
      }
    }
    res.status(200).json(
      {
        message: "Friends fetched sucessfully",
        data: {friends}

      }
    );
    return;
  } catch (err) {
    next(err);
    return;
  }
};

export default friends;
