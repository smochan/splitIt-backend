import Expenses from '../../models/expenses';
import { getOweAmount, getOwedAmount } from '../../helpers/expenseHelpers/findExpenses';

const transactions: Controller = async (req, res, next) => { 
  try {
    const id = req.user.id;
    const friendId = req.params.friendId;
    const oweAmount = await getOweAmount(friendId, id, next);
    const owedAmount = await getOwedAmount(friendId, id, next);
    res.status(200).json({
      message: "Transactions fetched sucessfully",
      data: {oweAmount, owedAmount}
    })
    return;
  }
  catch (err) {
    next(err);
    return;
  }
}

export default transactions;
