import { createBrowserRouter } from "react-router-dom";
import { MainLayout, Service } from "../constants/lazyload";
import authRouter from "./authRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "service",
        element: <Service />,
      },
    ],
  },

  ...authRouter,
]);

export default router;
