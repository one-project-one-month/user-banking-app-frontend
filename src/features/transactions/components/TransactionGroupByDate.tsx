import type { Transaction } from "@/types/transaction.type"
import { Link } from "react-router-dom"

const TransactionGroupByDate = ({date, transactions}: Transaction) => {
  return (
    <div>
      <time dateTime="2023-09-24T06:48:34" className="text-sm leading-5 tracking-normal font-semibold bg-black-pearl-700 h-[32px] flex items-center px-[32px] text-caption">{date}</time>
      <ul className="flex flex-col">
        {
          transactions.map(transaction => <li key={transaction.id} className="border-b border-body py-5 px-[32px]">
            <Link to={transaction.id}>
              <time dateTime="" className="text-xs leading-4 tracking-normal text-right block text-body">{transaction.time}</time>
              <div className="flex justify-between gap-4">
                <div className="flex flex-col">
                  <p className="text-base leading-6 tracking-normal mb-[5px] text-title">{transaction.name}</p>
                  <p className="text-xs leading-4 tracking-normal text-subtitle">E-Wallet Number: <span>{transaction.walletId}</span></p>
                </div>
                <div className="flex flex-col">
                  <span className="leading-6 tracking-normal text-right text-title">Amount</span>
                  <span className={`leading-5 tracking-normal text-sm font-semibold ${transaction.amount<0?"text-red-500":"text-black-pearl-700"}`}>
                    {transaction.amount>0?"+":""}{transaction.amount} MMK
                  </span>
                </div>
              </div>
            </Link>
          </li>)
        }
      </ul>
    </div>
  )
}

export default TransactionGroupByDate