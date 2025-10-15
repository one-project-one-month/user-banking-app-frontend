import type { Transaction } from "@/types/transaction.type"
import TransactionGroupByDate from "./TransactionGroupByDate";

interface TransactionListProps{
  transactions: Transaction[]
}

const TransactionList = ({transactions}: TransactionListProps) => {
  return (
    <div>
      {
        transactions.map(transaction=><TransactionGroupByDate 
          key={transaction.date} 
          date={transaction.date} 
          transactions={transaction.transactions} 
        />)
      }
    </div>
  )
}

export default TransactionList