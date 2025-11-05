import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const tokenFromCookie = Cookies.get("accessToken");

  if (accessToken || tokenFromCookie) {
    return <>{children}</>;
  }

  return <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
