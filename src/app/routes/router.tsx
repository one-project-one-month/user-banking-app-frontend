import { createBrowserRouter } from "react-router-dom";
import { MainLayout, Service } from "../constants/lazyload";
import authRouter from "./authRouter";
import TransactionHistoryPage from "@/features/transactions/pages/TransactionHistoryPage";
import TransactionHistoryDetailPage from "@/features/transactions/pages/TransactionHistoryDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "service",
        element: <Service />,
      },
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
