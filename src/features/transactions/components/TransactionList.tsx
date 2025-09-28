import type { Transaction } from "@/types/transaction.type"

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({transactions}: TransactionListProps) => {
  return (
    <ul className="flex flex-col">
      {
        transactions.map(transaction => <li key={transaction.id} className="border-b py-5">
          <div>
            <p className="font-semibold capitalize mb-2">{transaction.name}</p>              
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col gap-1 ">
                <span className="text-xs text-gray-500">e-wallet number : *******</span>
                <span className="text-xs text-gray-500">Transaction reference: *******</span>
              </div>
              <p className="font-semibold">Amount: <span className="font-semibold">{transaction.amount}</span></p>
            </div>
            <span className="text-xs text-gray-500 font-semibold">{transaction.note}</span>
          </div>
        </li>)
      }
    </ul>
  )
}

export default TransactionList