import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileHeaderProps {
  title: string;
  backTo?: string;
  iconSize?: number;
  className?: string;
  titleClassName?: string;
  isShowBackIcon?: boolean;
}

export default function MobileHeader({
  title,
  backTo = "/",
  iconSize = 30,
  className = "",
  titleClassName,
  isShowBackIcon = true,
}: MobileHeaderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full mb-2 md:hidden py-[10px]",
        className
      )}
    >
      {isShowBackIcon && (
        <Link
          to={backTo}
          className="absolute left-0 pl-2 flex items-center h-fit"
        >
          <ChevronLeft size={iconSize} />
        </Link>
      )}

      <h1 className={cn("text-2xl font-semibold text-center", titleClassName)}>
        {title}
      </h1>
    </div>
  );
}
