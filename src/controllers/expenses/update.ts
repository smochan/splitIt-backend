import expenses from "../../models/expenses";
import { getExpensesByGroupById } from "../../services/expensesRepository";

const updateExpense = async (req, res, next) => {
  try {
    const expense = await expenses.findById(req.params.id);
    expense.payer = req.body.payer;
    expense.amount = req.body.amount;
    expense.comment = req.body.comment;
    expense.status = req.body.status;
    expense.contributors = req.body.contributors;
    expense.groupID = req.body.groupID;
    await expense.save();
    res.status(200).send("Expense updated");
  } catch (err) {
    next(err);
  }
}

export default updateExpense;
