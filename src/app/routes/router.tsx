import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout, Service } from "../constants/lazyload";
import authRouter from "./authRouter";
import transferRouter from "./transferRouter";
import transactionsRouter from "./transactionRouter";
import scanRouter from "./scanRouter";
import settingRouter from "./settingRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
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
