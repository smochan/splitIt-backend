import Contributors from "../../models/contributors";

const contributors: Controller = async (req, res, next) => {
  try {
    console.log(req.body);
    const newContributor = new Contributors({
      amount: req.body.amount,
      status: req.body.status,
    });
    newContributor.save(function (err) {
      if (err) console.log(err);
      else console.log("Contributor added");
    });
    return;
  } catch (err) {
    next(err);
    return;
  }
};

export default contributors;