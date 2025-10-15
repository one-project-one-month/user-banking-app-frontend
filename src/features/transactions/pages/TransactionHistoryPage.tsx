import { useState } from "react"
import TransactionList from "../components/TransactionList"
import type { Transaction } from "@/types/transaction.type"
import MobileHeader from "@/components/core/MobileHeader"
import TransactionFilter from "../components/TransactionFilter"

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

const TransactionHistoryPage = () => {
  // will replace with react query later
  const [transactions, setTransactions] = useState<Transaction[]>(DUMMY_TRANSACTIONS)
  // will replace with react query later
  const [currentFilter, setCurrentFilter] = useState<string>(``)

  return (
    <>
      <MobileHeader backTo="/" title="Transaction History" />
      <main className="bg-white pb-[70px] md:pb-0">
        <TransactionFilter onChange={setCurrentFilter} currentFilter={currentFilter}/>
        <TransactionList transactions={transactions}/>
      </main>
    </>
  )
}

export default TransactionHistoryPage