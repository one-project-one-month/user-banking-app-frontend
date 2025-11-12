import type { UserInfo } from "@/types/User";
import { useMemo } from "react";

type ProfileInfoSectionProps = {
  user: UserInfo;
};

function ProfileInfoSection({ user }: ProfileInfoSectionProps) {
  const profileInfo = useMemo(
    () => [
      { label: "Full Name", value: user.fullname },
      { label: "Username", value: user.username },
      { label: "Email", value: user.email },
      { label: "Date of Birth", value: user.dateOfBirth },
      { label: "Gender", value: user.gender?.name },
      { label: "Nationality", value: user.nationality?.name },
      { label: "Phone Number", value: user?.phoneNumber },
      { label: "Relationship", value: user.relationship?.name },
      { label: "Address", value: user.address },
    ],
    [user]
  );

  return (
    <section className="p-4 text-black-pearl-700 rounded-xl border border-gray-200 bg-white shadow-sm">
      {profileInfo.map((info, index) => (
        <div
          key={info.label}
          className={`flex justify-between items-top py-2 ${
            index !== profileInfo.length - 1
              ? "border-b border-gray-100 mb-3"
              : ""
          }`}
        >
          <span className="font-medium text-gray-600">{info.label}</span>
          <span className="text-gray-900 max-w-40 md:max-w-3xl text-wrap break-words text-end">
            {info.value || "-"}
          </span>
        </div>
      ))}
    </section>
  );
}

export default ProfileInfoSection;
