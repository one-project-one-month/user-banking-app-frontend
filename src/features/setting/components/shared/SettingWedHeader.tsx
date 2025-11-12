import { cn } from "@/lib/utils";

type SettingWedHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

function SettingWedHeader({
  title,
  description,
  className,
}: SettingWedHeaderProps) {
  return (
    <div className={cn("pb-3 hidden md:block border-b mb-3", className)}>
      <h1 className="font-semibold mb-2 text-2xl text-black-pearl-700">
        {title}
      </h1>
      <p className="text-sm text-black-pearl-500">{description}</p>
    </div>
  );
}

export default SettingWedHeader;
