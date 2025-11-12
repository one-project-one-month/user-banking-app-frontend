import MobileHeader from "@/components/core/MobileHeader";
import SettingItemSection from "./SettingItemSection";
import SettingProfileSection from "../shared/SettingProfileSection";
import type { UserInfo } from "@/types/User";

type SettingMobileProps = {
  handleLogout: () => void;
  info: UserInfo | null;
};

function SettingMobile({ handleLogout, info }: SettingMobileProps) {
  return (
    <main className="h-full text-black-pearl-700 flex flex-col gap-5 bg-white">
      <MobileHeader title="Setting" titleClassName="text-start ps-10" />
      <SettingProfileSection
        name={info?.fullname}
        accountNumber={info?.selectedAccountDetails.accountNumber}
      />
      <SettingItemSection handleLogout={handleLogout} />
    </main>
  );
}

export default SettingMobile;
