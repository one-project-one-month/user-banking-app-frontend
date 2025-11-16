import type {
  RecentTransactionOption,
  Transaction,
} from "@/types/transaction.type";
import { Link } from "react-router-dom";

interface TransactionListProps {
  transactions: RecentTransactionOption[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div>
      <ul className="flex flex-col md:grid md:grid-cols-2 md:gap-[16px] md:px-[32px]">
        {transactions.map((transaction) => (
          <li className="border-b md:border md:rounded md:shadow border-body md:border-gray-300 py-5 px-[32px]">
            <Link to="">
              <div className="flex justify-between gap-4">
                <div className="flex flex-col">
                  <p className="text-base leading-6 tracking-normal mb-[5px] text-title">
                    {transaction.user.name}
                  </p>
                  <p className="text-xs leading-4 tracking-normal text-subtitle">
                    E-Wallet Number:{" "}
                    <span>{transaction.account.accountNumber}</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="leading-6 tracking-normal text-right text-title">
                    Amount
                  </span>
                  <span
                    className={`leading-5 tracking-normal text-sm font-semibold ${
                      transaction.account.balance < 0
                        ? "text-red-500"
                        : "text-black-pearl-700"
                    }`}
                  >
                    {transaction.account.balance > 0 ? "+" : ""}
                    {transaction.account.balance} MMK
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
