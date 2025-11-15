import MobileHeader from "@/components/core/MobileHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import SettingProfileSection from "../components/shared/SettingProfileSection";
import ProfileEditForm from "../components/profile/ProfileEditForm";
import useGetUserData from "@/hooks/useGetUserData";
import PageLoading from "@/components/core/PageLoading";

function ProfileEditPage() {
  const isMobile = useIsMobile();

  const { info, accountDetail, isUserDataLoading } = useGetUserData();

  if (isUserDataLoading) {
    return <PageLoading />;
  }

  return (
    <main className="h-full md:h-auto text-black-pearl-700 flex flex-col justify-start md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      {isMobile ? (
        <MobileHeader
          title="Profile"
          backTo="/settings"
          titleClassName="text-start ps-10"
        />
      ) : (
        <SettingWedHeader
          title="Profile"
          description="Manage your photo and personal information."
        />
      )}  
      <SettingProfileSection
        isEdit
        name={info?.username}
        accountNumber={accountDetail?.accountNumber}
        balance={info?.currentBalance}
        className="mb-5"
      />
      <ProfileEditForm userInfo={info} />
    </main>
  );
}

export default ProfileEditPage;
