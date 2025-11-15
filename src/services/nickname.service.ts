import type { AccountTransfer } from "@/types/Transfer";

export const dummyTransfers: AccountTransfer[] = [
  {

    toAccountDetails: {
      id: 101,
      accountNumber: "1234567890",
    },
    userDetails: {
      id: 201,
      fullname: "Alice Johnson",
    },
  },
  {
    toAccountDetails: {
      id: 102,
      accountNumber: "9876543210",
    },
    userDetails: {
      id: 202,
      fullname: "Bob Smith",
    },
  },
  {
    toAccountDetails: {
      id: 103,
      accountNumber: "4567891230",
    },
    userDetails: {
      id: 203,
      fullname: "Charlie Brown",
    },
  },
  {
    toAccountDetails: {
      id: 104,
      accountNumber: "7891234560",
    },
    userDetails: {
      id: 204,
      fullname: "Diana Prince",
    },
  },
];