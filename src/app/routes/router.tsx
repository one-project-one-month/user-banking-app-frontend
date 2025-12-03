import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout } from "../constants/lazyload";
import authRouter from "./authRouter";
import transferRouter from "./transferRouter";
import transactionsRouter from "./transactionRouter";
import scanRouter from "./scanRouter";
import settingRouter from "./settingRouter";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import InitailCheckedRoute from "@/components/common/InitailCheckedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <InitailCheckedRoute>
          <MainLayout />
        </InitailCheckedRoute>
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
