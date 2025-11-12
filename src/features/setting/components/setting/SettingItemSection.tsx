import ConfirmDialog from "@/components/common/ConfirmDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

type SettingItemSectionProps = {
  handleLogout: () => void;
};

function SettingItemSection({ handleLogout }: SettingItemSectionProps) {
  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full border rounded-lg p-3">
        <span>Auto Save Receipt</span>
        <Switch />
      </div>

      <Link
        to="/settings/change-password"
        className="w-full border rounded-lg p-3"
      >
        Change Password
      </Link>
      <Select>
        <SelectTrigger className="w-full text-base placeholder:text-black-pearl-700 py-6.5">
          <SelectValue
            className="placeholder:text-lg placeholder:text-black-pearl-400"
            placeholder="Select Account"
          />
        </SelectTrigger>
        <SelectContent className="text-black-pearl-700">
          <SelectItem value="account1">Account 1</SelectItem>
          <SelectItem value="account2">Account 2</SelectItem>
          <SelectItem value="account3">Account 3</SelectItem>
        </SelectContent>
      </Select>

      <Link to="/settings" className="w-full border rounded-lg p-3">
        Change Transaction Pin
      </Link>
      <Link to="/settings/nicknames" className="w-full border rounded-lg p-3">
        Nickname
      </Link>
      <ConfirmDialog
        title="Are you sure?"
        description="This action cannot be undone."
        actionLabel="Logout"
        onConfirm={handleLogout}
        trigger={
          <div className="w-full flex items-center gap-2 border rounded-lg p-3 ">
            <LogOut className="text-red-700" /> <span>Log Out</span>
          </div>
        }
      />
    </section>
  );
}

export default SettingItemSection;
