import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout, Service } from "../constants/lazyload";
import authRouter from "./authRouter";
import transactionsRouter from "./transactionRouter";
import scanRouter from "./scanRouter";

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
    ],
  },
  ...authRouter,
]);

export default router;
