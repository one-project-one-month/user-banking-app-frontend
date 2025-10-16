import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ShortCutCardProps = {
  card: {
    title: string;
    icon: LucideIcon;
    link: string;
  };
};

function ShortCutCard({ card }: ShortCutCardProps) {
  return (
    <Link
      to={card.link}
      className="w-full flex flex-col h-full group transition-all duration-300   hover:-translate-y-1 md:bg-white rounded-2xl"
    >
      <div className="flex-2 min-h-12 w-full flex flex-col justify-center items-center md:bg-white bg-primary rounded-md md:rounded-2xl my-2">
        <card.icon
          size={40}
          className="w-6 md:w-12 md:h-12 group-hover:animate-pulse group-hover:text-black-pearl-900  h-6 text-white md:text-black-pearl-700"
        />
        {/* <p className="md:block hidden text-white text-lg">{card.title}</p> */}
      </div>
      <p className="text-center flex-1 text-sm text-black-pearl-700  ">
        {card.title}
      </p>
    </Link>
  );
}

export default ShortCutCard;
