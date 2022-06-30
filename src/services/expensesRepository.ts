import Expenses from "../models/expenses";

export const getExpensesByGroupById = async (id: string) => {
  try {
    const expenses = await Expenses.findById(id);
    return expenses;
  }
  catch (err) {
    console.log(err);
  }
}
