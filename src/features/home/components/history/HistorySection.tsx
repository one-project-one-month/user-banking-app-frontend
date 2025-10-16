import HistoryItemCard from "./HistoryItemCard";

function HistorySection() {
  const transactionList = Array(5).fill({
    type: "income",
    senderName: "Bo Bo",
    walletNumber: "223469",
    amount: 50000,
  });

  return (
    <section>
      <div className="flex flex-col gap-2">
        {transactionList.map((tx, idx) => (
          <HistoryItemCard key={idx} {...tx} />
        ))}
      </div>
    </section>
  );
}

export default HistorySection;
