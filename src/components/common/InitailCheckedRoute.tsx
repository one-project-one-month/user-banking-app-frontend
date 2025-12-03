import Cookies from "js-cookie";
import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

function InitailCheckedRoute({ children }: { children: ReactNode }) {
  const hasInitailPin = Cookies.get("HasInitPin");

  if (hasInitailPin) {
    return <>{children}</>;
  }

  return <Navigate to={"/auth/set-init-pin"} />;
}

export default InitailCheckedRoute;
