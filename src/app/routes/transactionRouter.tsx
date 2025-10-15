import { TransactionPage } from "../constants/lazyload";

const transactionsRouter = [
  {
    path: "/transactions",
    children: [
      {
        index: true,
        element: <TransactionPage />,
      }
    ],
  },
];

export default transactionsRouter;
