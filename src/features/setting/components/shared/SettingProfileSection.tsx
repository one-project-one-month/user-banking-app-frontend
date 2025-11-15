import { ChevronRight, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileAccountSwitchBox from "./ProfileAccountSwitchBox";
import ProfileAvatar from "./ProfileAvatar";
import { cn } from "@/lib/utils";

type SettingProfileSection = {
  isEdit?: boolean;
  name?: string;
  accountNumber?: string;
  balance?: number;
  className?: string;
};

function SettingProfileSection({
  isEdit,
  name,
  accountNumber,
  balance,
  className,
}: SettingProfileSection) {
  const [isShowAmount, setIsShowAmount] = useState(false);

  const toggleShowAmount = () => {
    setIsShowAmount((prev) => !prev);
  };

  return (
    <section
      className={cn(
        "flex justify-start w-full relative md:justify-start gap-5 items-center md:items-start px-1",
        className
      )}
    >
      <ProfileAvatar />
      <div>
        <h1 className="text-xl font-semibold text-black-pearl-700">{name}</h1>
        <p className="text-sm text-black-pearl-500 mb-2">
          Account No: {accountNumber}
        </p>
        <p className=" hidden md:flex space-x-2 w-full text-black-pearl-700 justify-center md:justify-start items-center">
          <span className="cursor-default text-lg  select-none font-semibold">
            {isShowAmount ? balance + " MMK" : "***********"}
          </span>
          <span onClick={toggleShowAmount} className="cursor-pointer">
            {isShowAmount ? <Eye /> : <EyeClosed />}
          </span>
        </p>
      </div>
      {isEdit ? (
        <ProfileAccountSwitchBox
          accountNumber={accountNumber}
          className="absolute top-2 right-2"
        />
      ) : (
        <Link
          to="profile"
          className="top-1/2 -translate-y-1/2 right-4 absolute"
        >
          <ChevronRight size={30} />
        </Link>
      )}
    </section>
  );
}

export default SettingProfileSection;
