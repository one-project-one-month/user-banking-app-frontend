import React from "react";

interface HistoryItemCardProps {
  senderName: string;
  walletNumber: string;
  amount: number;
  type?: "income" | "expense";
}

const HistoryItemCard: React.FC<HistoryItemCardProps> = ({
  senderName,
  walletNumber,
  amount,
  type = "income",
}) => {
  const isIncome = type === "income";
  return (
    <div
      className=" py-3 border-b md:border-none md:hover:shadow-md
  transition-all duration-300 bg-white md:rounded-xl md:px-5 ease-in-out cursor-pointer hover:-translate-y-[2px]"
    >
      <p className="w-full text-right text-xs">20:22:12</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium md:text-sm text-black-pearl-700">
            Transfer From {senderName}
          </p>
          <p className="text-xs text-gray-500">
            E-Wallet Number: {walletNumber}
          </p>
        </div>

        <div className="text-right">
          <p className="text-black-pearl-700 md:text-sm">Amount</p>
          <p
            className={`font-semibold md:text-sm ${
              isIncome ? "text-green-600" : "text-red-600"
            }`}
          >
            {isIncome ? "+" : "-"} {amount.toLocaleString()} MMK
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItemCard;
