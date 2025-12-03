import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import SetInitialPinPage from "@/features/auth/pages/SetInitialPinPage";
import TopPage from "@/features/auth/pages/TopPage"; // your create/login button screen
import WaitingApprovalPage from "@/features/auth/pages/WaitingApprovePage";

const authRouter = [
  {
    path: "auth",
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
      {
        path: "set-init-pin",
        element: <SetInitialPinPage />,
      },
    ],
  },
];

export default authRouter;
