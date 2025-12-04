import Cookies from "js-cookie";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AuthLayout() {
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const tokenFromCookie = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken || tokenFromCookie) {
      navigate("/");
      return;
    }
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
