import TransactionDetailPage from "@/features/transactions/pages/TransactionDetailPage";
import { TransactionPage } from "../constants/lazyload";

const transactionsRouter = [
  {
    path: "/transactions",
    children: [
      {
        index: true,
        element: <TransactionPage />,
      },
      {
        path: ":id",
        element: <TransactionDetailPage/>
      }
    ],
  },
];

export default transactionsRouter;
