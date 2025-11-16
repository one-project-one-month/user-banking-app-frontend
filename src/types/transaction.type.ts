import type { BaseResponse } from "./Common";

export interface Transaction {
  id: number;
  user: {
    id: number;
    name: string;
  };
  account: {
    id: number;
    accountNumber: string;
    balance: number;
  };
}

export interface TransactionParams {
  fromDate?: string;
  toDate?: string;
}

export type RecentTransactionOption = {
  user: {
    id: number;
    name: string;
  };
  account: {
    id: number;
    accountNumber: string;
    balance: number;
  };
};

export type TransactionHistory = {
  recentTransferListOptions: RecentTransactionOption[];
};

export type TransactionHistoryResponse = BaseResponse<TransactionHistory>;

export type RecentTransactionResponse = BaseResponse<TransactionHistory>;
