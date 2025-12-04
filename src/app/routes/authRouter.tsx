import AuthLayout from "@/components/core/layouts/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import TopPage from "@/features/auth/pages/TopPage"; // your create/login button screen
import WaitingApprovalPage from "@/features/auth/pages/WaitingApprovePage";

const authRouter = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "", // This is "/auth"
        element: <TopPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "waiting",
        element: <WaitingApprovalPage />,
      },
    ],
  },
];

export default authRouter;
