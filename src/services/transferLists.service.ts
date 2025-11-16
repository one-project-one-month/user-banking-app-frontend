import type { RecentTransferListOption } from "@/types/Transfer";

export const dummyTransfers: RecentTransferListOption[] = [
  {
    user: { id : 1,name: "Alice" },
    account: { id:1,accountNumber: "123456", balance: 500 },
  },
  {
    user: { id : 2,name: "Bob" },
    account: { id : 2,accountNumber: "654321", balance: 1200 },
  },
  {
    user: { id : 3,name: "Charlie" },
    account: { id : 3,accountNumber: "112233", balance: 300 },
  },
  {
    user: { id : 4,name: "John Snow" },
    account: { id : 4,accountNumber: "112233", balance: 300 },
  },
  {
    user: { id : 5,name: "Eleven" },
    account: { id : 5,accountNumber: "112233", balance: 300 },
  },
];
