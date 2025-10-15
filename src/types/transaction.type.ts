export interface TransactionItem {
  id: string;
  name: string;
  amount: number;
  walletId: string;
  time: string
}

export interface Transaction{
  date: string;
  transactions: TransactionItem[]
}