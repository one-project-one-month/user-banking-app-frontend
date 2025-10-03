import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../constants/lazyload";
import authRouter from "./authRouter";
import TransactionHistoryPage from "@/features/transactions/pages/TransactionHistoryPage";
import TransactionHistoryDetailPage from "@/features/transactions/pages/TransactionHistoryDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/transactions",
        element: <TransactionHistoryPage />,
      },
      {
        path: "/transactions/:type",
        element: <TransactionHistoryDetailPage />
      }
    ],
  },
  ...authRouter,
]);

export default router;
