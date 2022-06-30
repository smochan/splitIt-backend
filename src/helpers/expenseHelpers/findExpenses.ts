import Expenses from '../../models/expenses';
import { getExpensesByGroupById } from '../../services/expensesRepository';

const findExpenses = async (groupID: string, next) => {
  try {
    const expenses = await getExpensesByGroupById(groupID);
    return expenses;
  }
  catch (err) {
    next(err);
    return;
  }
}

export default findExpenses;