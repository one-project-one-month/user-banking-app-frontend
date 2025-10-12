export interface Transaction {
  id: string;
  name: string;
  amount: number;
  note: string;
  walletId: string;
  transactionReference: string;
}