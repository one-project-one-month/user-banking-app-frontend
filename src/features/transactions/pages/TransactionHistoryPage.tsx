import { useState } from "react"
import TransactionList from "../components/TransactionList"
import MobileHeader from "@/components/core/MobileHeader"
import TransactionFilter from "../components/TransactionFilter"
import { useGetTransactions } from "@/queries/transactionHistory.query"


const TransactionHistoryPage = () => {
  // will replace with react query later
  const { data: transactions } = useGetTransactions();
  
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