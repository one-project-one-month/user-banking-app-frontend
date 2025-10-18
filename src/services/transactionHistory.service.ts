import API from "@/app/api/axios";
import type { Transaction } from "@/types/transaction.type";
import axios from "axios";

interface transactionParam{
  date?: string,
  type?: "inflow" | "outflow" | "both"
}

const DUMMY_TRANSACTIONS: Transaction[] = [
  {
    "date": "25/09/2025 ",
    "transactions": [
      {
        id: "1",
        name: "Transfer From Aung Phyoe",
        amount: 50000,
        walletId: "123456789",
        time: "20:22:21"
      },
      {
        id: "2",
        name: "Transfer From Swam",
        amount: 50000,
        walletId: "123456789",
        time: "21:22:21"
      },
      {
        id: "3",
        name: "Transfer From Swam",
        amount: 50000,
        walletId: "123456789",
        time: "21:22:21"
      }
    ]
  },
  {
    "date": "25/09/2025 ",
    "transactions": [
      {
        id: "1",
        name: "Quick Pay",
        amount: -50000,
        walletId: "123456789",
        time: "20:22:21"
      },
      {
        id: "2",
        name: "Transfer From Swam",
        amount: -50000,
        walletId: "123456789",
        time: "21:22:21"
      },
      {
        id: "3",
        name: "Transfer From Swam",
        amount: -50000,
        walletId: "123456789",
        time: "21:22:21"
      }
    ]
  }
]


export const getTransactions = async (params: transactionParam) => {
  try {
    const res = await API.get("/transactions/", {params});
    return res.data;
  } catch (error) {

    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }

    return DUMMY_TRANSACTIONS;
  }
};