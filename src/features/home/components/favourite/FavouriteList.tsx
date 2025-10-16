import { ChevronRight } from "lucide-react";
import FavouriteCard from "./FavouriteCard";
import FavouriteCardContainer from "./FavouriteCardContainer";

function FavouriteList() {
  return (
    <div className="w-full col-span-2 col-start-2  flex flex-col justify-center items-center ">
      <h1 className="text-sm text-start w-full  text-white mb-4">Favourites</h1>
      <div className="flex flex-col w-full h-full items-center gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <FavouriteCard key={i} />
        ))}
        <FavouriteCardContainer className="bg-black-pearl-400  hover:bg-black-pearl-900/10 justify-center gap-2.5">
          <p className="text-sm font-medium text-white group-hover:text-white transition-colors">
            View More
          </p>
          <ChevronRight
            size={14}
            className="text-white group-hover:text-white transition-colors"
          />
        </FavouriteCardContainer>
      </div>
    </div>
  );
}

export default FavouriteList;
