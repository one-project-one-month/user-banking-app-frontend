import useGetUserData from "@/hooks/useGetUserData";
import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

function InitailCheckedRoute({ children }: { children: ReactNode }) {
  const { hasInitailPin } = useGetUserData();

  if (hasInitailPin || localStorage.getItem("InitialPin")) {
    return <>{children}</>;
  }

  return <Navigate to={"/set-init-pin"} />;
}

export default InitailCheckedRoute;
