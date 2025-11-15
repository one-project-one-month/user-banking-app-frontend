import { useState } from "react";
import TransactionList from "../components/TransactionList";
import MobileHeader from "@/components/core/MobileHeader";
import TransactionFilter from "../components/TransactionFilter";
import { useGetTransactions } from "@/queries/transactionHistory.query";

const TransactionHistoryPage = () => {
  // will replace with react query later
  const { data: transactions, isLoading, error } = useGetTransactions();

  // will replace with react query later
  const [currentFilter, setCurrentFilter] = useState<string>(``);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Failed to load transactions</p>;

  return (
    <>
      <MobileHeader
        backTo="/"
        title="Transaction History"
        className="bg-primary"
      />
      <main className="bg-white pb-[70px] md:pb-0">
        <TransactionFilter
          onChange={setCurrentFilter}
          currentFilter={currentFilter}
        />
        <TransactionList
          transactions={transactions?.recentTransferListOptions ?? []}
        />
      </main>
    </>
  );
};

export default TransactionHistoryPage;
