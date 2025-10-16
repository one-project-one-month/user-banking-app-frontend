import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import FavouriteCardContainer from "./FavouriteCardContainer";

function FavouriteCard() {
  return (
    <FavouriteCardContainer className="bg-black-pearl-400">
      {/* Left Section: Avatar + Info */}
      <div className="flex items-center gap-2.5">
        <Avatar className="w-10 h-10 transition-transform duration-200 group-hover:scale-105">
          <AvatarImage src="https://github.com/shadcn.png" alt={`Avatar`} />
          <AvatarFallback className="bg-gray-100 text-primary font-semibold text-xs">
            CN
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="text-sm font-medium text-white leading-tight">Aung</p>
          <p className="text-[11px] text-white/60 leading-tight">
            Acc No: 09234567
          </p>
        </div>
      </div>

      <Button className="text-xs font-medium text-white hover:bg-white/10 cursor-pointer bg-transparent transition-colors">
        <ArrowLeftRight />
      </Button>
    </FavouriteCardContainer>
  );
}

export default FavouriteCard;
