import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout } from "../constants/lazyload";
import authRouter from "./authRouter";
import transferRouter from "./transferRouter";
import transactionsRouter from "./transactionRouter";
import scanRouter from "./scanRouter";
import settingRouter from "./settingRouter";
import ProtectedRoute from "@/components/common/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...transactionsRouter,
      ...scanRouter,
      ...transferRouter,
      ...settingRouter,
    ],
  },
  ...authRouter,
]);

export default router;
