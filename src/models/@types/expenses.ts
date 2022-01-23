export interface Expenses {
  groupID: string;
  payer: string;
  comment: string;
  contributors: Array<string>;
  amount: Number;
  date: Date;
  status: Boolean;
}