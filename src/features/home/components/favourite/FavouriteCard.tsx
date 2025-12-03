import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import FavouriteCardContainer from "./FavouriteCardContainer";
import { cn } from "@/lib/utils";

interface FavouriteCardProps {
  name: string;
  accountNumber: string;
  avatarUrl?: string;
  avatarFallback?: string;
  onTransfer?: () => void;
  className?: string;
}

function FavouriteCard({
  name,
  accountNumber,
  avatarUrl,
  avatarFallback,
  onTransfer,
  className,
}: FavouriteCardProps) {
  return (
    <FavouriteCardContainer
      className={cn(
        `
        bg-primary 
        hover:bg-primary/95
        md:bg-gradient-to-br md:from-[#0A3D62] md:to-[#227DBE]
        rounded-xl
        flex justify-between items-center
        transition-all duration-300
        shadow-sm md:hover:shadow-md
        hover:-translate-y-[1px]
        px-3 py-2
        group
      `,
        className
      )}
    >
      {/* Left Section: Avatar + Info */}
      <div className="flex items-center gap-2.5">
        <Avatar className="w-10 h-10 transition-transform duration-200 group-hover:scale-105 border border-white/20">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-white/20 text-white font-semibold text-xs">
            {avatarFallback ?? name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col leading-tight">
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-[11px] text-white/70">Acc No: {accountNumber}</p>
        </div>
      </div>

      {/* Transfer Button */}
      <Button
        size="icon"
        onClick={onTransfer}
        className="
          w-8 h-8 rounded-full 
          bg-white/15 hover:bg-white/25 
          text-white
          transition-colors duration-200
          flex items-center justify-center
        "
      >
        <ArrowLeftRight size={16} />
      </Button>
    </FavouriteCardContainer>
  );
}

export default FavouriteCard;
