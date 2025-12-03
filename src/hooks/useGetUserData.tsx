import { useGetCurrentUser } from "@/queries/users.query";
import Cookies from "js-cookie";

function useGetUserData() {
  const { data: user, isLoading: isUserDataLoading } = useGetCurrentUser();

  const info = user?.data;

  const accountDetail = user?.data.selectedAccountDetails;

  const hasInitailPin = user?.data.hasInitialPin;

  Cookies.set("UserInfo", info as any);
  Cookies.set("HasInitPin", hasInitailPin as any);

  return {
    info,
    accountDetail,
    isUserDataLoading,
    hasInitailPin,
  };
}

export default useGetUserData;
