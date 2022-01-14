export interface Expenses {
  groupID: string;
  payer: string;
  contributors: Array<string>;
  date: Date;
  status: Boolean;
}