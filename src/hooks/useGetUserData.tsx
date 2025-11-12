import { useGetCurrentUser } from "@/queries/users.query";

function useGetUserData() {
  const { data: user, isLoading: isUserDataLoading } = useGetCurrentUser();

  const info = user?.data;
  const accountDetail = user?.data.selectedAccountDetails;

  return {
    info,
    accountDetail,
    isUserDataLoading,
  };
}

export default useGetUserData;
