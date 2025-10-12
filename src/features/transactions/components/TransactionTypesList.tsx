import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type TransactionType = {
  id: number,
  label: string,
  path: string
}

const transactionTypes: TransactionType[] = [
  { id: 1, label: 'Scan', path: 'scan' },
  { id: 2, label: 'Cardless', path: 'cardless' },
  { id: 3, label: 'Transfer', path: 'transfer' },
  { id: 4, label: 'Top Up', path: 'top-up' },
  { id: 5, label: 'Cash In', path: 'cash-in' },
  { id: 6, label: 'Cash Out', path: 'cash-out' },
]

const TransactionTypesList = () => {
  return (
    <ul className="flex flex-col px-5">
      {
        transactionTypes.map(type => <li key={type.id}>
          <Link to={`${type.path}`} className="flex justify-between items-center border-b py-5 text-xl font-semibold">
            {type.label}
            <ChevronRight aria-hidden/>
          </Link>
        </li>)
      }
    </ul>
  )
}

export default TransactionTypesList