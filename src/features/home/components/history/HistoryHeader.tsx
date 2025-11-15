import { Link } from "react-router-dom";

function HistoryHeader() {
  return (
    <div className=" px-5 py-2 md:px-0 md:bg-transparent bg-primary/80 text-sm mb-2 flex justify-between items-center">
      <h1>Recent Transactions</h1>
      <Link
        to="/transactions"
        className="text-xs text-white/60  cursor-pointer"
      >
        See All
      </Link>
    </div>
  );
}

export default HistoryHeader;
