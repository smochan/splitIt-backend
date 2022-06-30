export interface IExpenses {
  groupID: string;
  payer: string;
  comment: string;
  contributors: [{userID: string, percent: number, status: Boolean}];
  amount: number;
  date: Date;
  status: Boolean;
}
