import { useState } from "react"
import FilterDropdown from "../components/FilterDropdown"
import TransactionList from "../components/TransactionList"
import type { Transaction } from "@/types/transaction.type"
import { months } from "@/app/constants"

const DUMMY_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    name: "Grocery Shopping",
    amount: 150.75,
    note: "Bought groceries at the local market",
    walletId: "wallet1",
    transactionReference: "REF123456"
  },
  {
    id: "2",
    name: "Electricity Bill",
    amount: 75.50,
    note: "Monthly electricity bill payment",
    walletId: "wallet1",
    transactionReference: "REF654321"
  },
  {
    id: "3",
    name: "Restaurant Dinner",
    amount: 60.00,
    note: "Dinner with friends at a restaurant",
    walletId: "wallet1",
    transactionReference: "REF789012"
  }
]

const TransactionHistoryDetailPage = () => {
  // will replace with react query later
  const [transactions, setTransactions] = useState<Transaction[]>(DUMMY_TRANSACTIONS)
  // will replace with react query later
  const [currentFilter, setCurrentFilter] = useState<string>(`${months[new Date().getMonth()]} ${new Date().getFullYear()}`)

  return (
    <main className="px-5">
      <FilterDropdown onChange={setCurrentFilter} currentFilter={currentFilter}/>
      <TransactionList transactions={transactions}/>
    </main>
  )
}

export default TransactionHistoryDetailPage