import Expenses from '../../models/expenses';

const expenses: Controller = async (req, res, next) => {
  try {
    console.log(typeof req.body);

    const newExpense = new Expenses({
      // payer: req.body.payer,
      amount: req.body.amount,
      comment: req.body.comment,
      status: req.body.status,
      contributors: req.body.contributors,
    });
    await newExpense.save();

    res.status(200).send('Expense added');
    console.log('Expense added');
  } catch (err) {
    next(err);
  }
};

export default expenses;
