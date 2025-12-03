import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { LogOut } from "lucide-react";
import SettingProfileSection from "../shared/SettingProfileSection";
import SettingWedHeader from "../shared/SettingWedHeader";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import type { UserInfo } from "@/types/User";
import { useAutoSaveReceipt } from "@/queries/users.query";
import { Link } from "react-router-dom";

type SettingWebProps = {
  handleLogout: () => void;
  info: UserInfo | null;
};

function SettingWeb({ handleLogout, info }: SettingWebProps) {
  //switch action
  const { mutate: switchAutoReceipt, isPending: isSwitchPending } =
    useAutoSaveReceipt();

  const handleSwitch = (value: boolean) => {
    switchAutoReceipt(value);
  };

  return (
    <div className="p-2 max-w-4xl bg-white">
      <SettingWedHeader
        title="Info"
        description="setting display description"
      />
      <SettingProfileSection
        name={info?.fullname}
        accountNumber={info?.selectedAccountDetails?.accountNumber}
        balance={info?.currentBalance}
      />

      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-gray-600">Auto Save Receipt</span>
          <Switch
            checked={info?.isAutoSaveReceipt ?? false}
            onCheckedChange={handleSwitch}
            disabled={isSwitchPending}
          />
        </div>

        <Link
          to="/settings/change-password"
          className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition"
        >
          <span className="text-sm text-gray-600">Password</span>
          <p className="font-medium text-black-pearl-700">••••••••••••••••</p>
        </Link>

        <Link
          to="/settings/change-pin"
          className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition"
        >
          <span className="text-sm text-gray-600">Transaction PIN</span>
          <p className="font-medium text-black-pearl-700">••••••••••••••••</p>
        </Link>

        <Link
          to="/settings/nicknames"
          className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition"
        >
          <span className="text-sm text-gray-600">Nicknames</span>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </Link>

        {/* Current Account */}
        <div className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-gray-600">Current Account</span>
          <p className="font-medium text-black-pearl-700">
            {info?.selectedAccountDetails?.accountNumber}
          </p>
        </div>
        <ConfirmDialog
          title="Are you sure?"
          description="This action cannot be undone."
          actionLabel="Logout"
          onConfirm={handleLogout}
          trigger={
            <div className="border rounded-xl cursor-pointer p-4 flex gap-3 justify-start items-center bg-white shadow-sm hover:shadow-md transition">
              <span className="text-sm text-red-600">
                <LogOut />
              </span>
              <p className="font-medium text-black-pearl-700">Log Out</p>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default SettingWeb;
