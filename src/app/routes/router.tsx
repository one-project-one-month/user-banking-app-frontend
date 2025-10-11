import { createBrowserRouter } from "react-router-dom";
import { MainLayout, Service } from "../constants/lazyload";
import authRouter from "./authRouter";
import transactionsRouter from "./transactionRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "service",
        element: <Service />,
      },
      ...transactionsRouter,
    ],
  },

  ...authRouter,
]);

export default router;
