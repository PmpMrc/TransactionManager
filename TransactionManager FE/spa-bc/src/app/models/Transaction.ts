import { User } from './User';

export interface Transaction {
  id: number;
  user: User;
  transactionDate: Date;
  value: number;
}
