import Group from '../../models/group';
import findGroups from '../../helpers/groupHelpers/findGroups';

const find: Controller = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await findGroups(id, next);
    const groups = [];
    for (let i in response) {
      let group = {};
      group = {
        gName: response[i].gName,
        groupId: response[i]._id,
      };
      groups.push(group);
    }
    res.status(200).send(groups);
    return;
  } catch (err) {
    next(err);
    return;
  }
};

export default find;
