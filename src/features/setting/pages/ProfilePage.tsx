import MobileHeader from "@/components/core/MobileHeader";
import SettingProfileSection from "../components/shared/SettingProfileSection";
import { useIsMobile } from "@/hooks/use-mobile";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import ProfileInfoSection from "../components/profile/ProfileInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLoading from "@/components/core/PageLoading";
import useGetUserData from "@/hooks/useGetUserData";

function ProfilePage() {
  const isMobile = useIsMobile();

  //fetch user info
  const { info, accountDetail, isUserDataLoading } = useGetUserData();

  if (isUserDataLoading) {
    return <PageLoading />;
  }

  return (
    <main className="h-full md:h-auto text-black-pearl-700 flex flex-col justify-between md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      <div>
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
          name={info?.fullname}
          accountNumber={accountDetail?.accountNumber}
          balance={info?.currentBalance}
          className="mb-5"
        />
        <ProfileInfoSection user={info ?? null} />
      </div>
      <Button className="w-full py-5 my-3 md:max-w-40 md:float-end" asChild>
        <Link to="/settings/profile/edit">Edit</Link>
      </Button>
    </main>
  );
}

export default ProfilePage;
