import { TransactionDetailPage, TransactionPage } from "../constants/lazyload";

const transactionsRouter = [
  {
    path: "/transactions",
    children: [
      {
        index: true,
        element: <TransactionPage />,
      },
      {
        path: ":type",
        element: <TransactionDetailPage />,
      },
    ],
  },
];

export default transactionsRouter;
