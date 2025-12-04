import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout } from "../constants/lazyload";
import authRouter from "./authRouter";
import transferRouter from "./transferRouter";
import transactionsRouter from "./transactionRouter";
import scanRouter from "./scanRouter";
import settingRouter from "./settingRouter";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import InitailCheckedRoute from "@/components/common/InitailCheckedRoute";
import SetInitialPinPage from "@/features/auth/pages/SetInitialPinPage";

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
  {
    path: "/set-init-pin",
    element: <SetInitialPinPage />,
  },
  ...authRouter,
]);

export default router;
