import { useGetTransactions } from "@/queries/transactionHistory.query";
import HistoryItemCard from "./HistoryItemCard";
import HistoryItemCardSkeleton from "./HistoryItemCardSkeleton";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { FileJson2 } from "lucide-react";

function HistorySection() {
  const { data: history, isLoading } = useGetTransactions();

  if (isLoading)
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <HistoryItemCardSkeleton key={i} />
        ))}
      </div>
    );

  return (
    <section className="min-h-120">
      <div className="flex flex-col gap-2">
        {history?.data &&
        history?.data.recentTransferListOptions?.length > 0 ? (
          history?.data.recentTransferListOptions.map((tx, idx) => {
            return (
              <HistoryItemCard
                key={idx}
                senderName={tx.user.name}
                amount={tx.account.balance}
                walletNumber={tx.account?.accountNumber}
                type={tx.isIncome ? "income" : "expense"}
              />
            );
          })
        ) : (
          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <FileJson2 />
              </EmptyMedia>
              <EmptyTitle>No Recent Yet</EmptyTitle>
              <EmptyDescription>
                You haven&apos;t tranfered yet.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </div>
    </section>
  );
}

export default HistorySection;
