import Expense from '../../models/expenses';
import findExpenses from '../../helpers/expenseHelpers/findExpenses';

const find: Controller = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await findExpenses(id, next);
    const expenses = [];
    for (let i in response) {
      let expense = {};
      expense = {
        gName: response[i].gName,
        groupId: response[i]._id,
      };
      expenses.push(expense);
    }
    res.status(200).send(expenses);
    return;
  } catch (err) {
    next(err);
    return;
  }
};

export default find;