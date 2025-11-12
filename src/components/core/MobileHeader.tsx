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
        "flex justify-start items-center w-full mb-2 md:hidden py-[10px]",
        className
      )}
    >
      {isShowBackIcon && (
        <Link to={backTo} className=" h-fit">
          <ChevronLeft size={iconSize} />
        </Link>
      )}
      <h1 className={cn("text-center text-2xl font-semibold", titleClassName)}>
        {title}
      </h1>
    </div>
  );
}
