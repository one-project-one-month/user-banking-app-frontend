import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";
import type { Transaction, TransactionParams } from "@/types/transaction.type";

export const DUMMY_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    user: {
      id: 101,
      name: "Alice Johnson",
    },
    account: {
      id: 201,
      accountNumber: "ACC-001-TH",
      balance: 12500.75,
    },
  },
  {
    id: 2,
    user: {
      id: 102,
      name: "Bob Smith",
    },
    account: {
      id: 202,
      accountNumber: "ACC-002-TH",
      balance: -8920.5,
    },
  },
  {
    id: 3,
    user: {
      id: 103,
      name: "Charlie Kim",
    },
    account: {
      id: 203,
      accountNumber: "ACC-003-TH",
      balance: 450.0,
    },
  },
  {
    id: 4,
    user: {
      id: 104,
      name: "Diana Lopez",
    },
    account: {
      id: 204,
      accountNumber: "ACC-004-TH",
      balance: 37800.2,
    },
  },
  {
    id: 5,
    user: {
      id: 105,
      name: "Ethan Nguyen",
    },
    account: {
      id: 205,
      accountNumber: "ACC-005-TH",
      balance: 1200.0,
    },
  },
];

export const getTransactions = async (params?: TransactionParams) => {
  try {
    const res = await API.get("personal-banking/users/transaction-history", {
      params,
    });
    return res.data;
  } catch (error) {
    throwError(error);
  }
};

export const getTransactionDetail = async (
  id: string
): Promise<Transaction> => {
  try {
    const res = await API.get(`/transactions/${id}`);
    return res.data;
  } catch (error) {
    console.error("API request failed, using dummy data:", error);
    return DUMMY_TRANSACTIONS[0];
  }
};

export const getRecentTransactions = async () => {
  try {
    const response = await API.get(
      `personal-banking/users/recent-transfer-list`
    );
    return response.data;
  } catch (error) {
    throwError(error);
  }
};
