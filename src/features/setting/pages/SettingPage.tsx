import { useIsMobile } from "@/hooks/use-mobile";
import SettingMobile from "../components/setting/SettingMobile";
import SettingWeb from "../components/setting/SettingWeb";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { logout } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import useGetUserData from "@/hooks/useGetUserData";

function SettingPage() {
  const isMobile = useIsMobile();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fetch user detail
  const { info } = useGetUserData();

  //logout handler
  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/auth/login");
  }, []);

  return (
    <>
      {isMobile ? (
        <SettingMobile info={info ?? null} handleLogout={handleLogout} />
      ) : (
        <SettingWeb info={info ?? null} handleLogout={handleLogout} />
      )}
    </>
  );
}

export default SettingPage;
