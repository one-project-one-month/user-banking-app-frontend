import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type FavouriteCardContainerProps = {
  className?: string;
  children: ReactNode;
};

function FavouriteCardContainer({
  children,
  className,
}: FavouriteCardContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-1 items-center justify-between w-full p-2.5 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer bg-black-pearl-400 border border-black-pearl-300 rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export default FavouriteCardContainer;
