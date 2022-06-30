import Expenses from '../../models/expenses';
import { getExpensesByGroupById } from '../../services/expensesRepository';

export const findExpenses = async (groupID: string, next) => {
  try {
    const expenses = await getExpensesByGroupById(groupID);
    return expenses;
  }
  catch (err) {
    next(err);
    return;
  }
}

export const getOweAmount = async (friendID: string, userID: string, next) => {
  try {
    const expenses = await Expenses.find({payer: friendID, contributors: {$elemMatch :{userID: userID}}});
    const oweAmount = [];
    for (let i in expenses) {
      let expense = {};
      expense = {
        oweamount: (expenses[i].contributors[userID].percent * expenses[i].amount)/100,
        comment: expenses[i].comment,
        status: expenses[i].contributors[userID].status,
      }
      oweAmount.push(expense);
    }
    return oweAmount;
  }
  catch (err) {
    next(err);
    return;
  }
}

export const getOwedAmount = async (friendID: string, userID: string, next) => {
  try {
    const expenses = await Expenses.find({payer: userID, contributors: {$elemMatch :{userID: friendID}}});
    const owedAmount = [];
    for (let i in expenses) {
      let expense = {};
      expense = {
        owedamount: (expenses[i].contributors[friendID].percent * expenses[i].amount)/100,
        comment: expenses[i].comment,
        status: expenses[i].contributors[friendID].status,
      }
      owedAmount.push(expense);
    }
    return owedAmount;
  }
  catch (err) {
    next(err);
    return;
  }
}