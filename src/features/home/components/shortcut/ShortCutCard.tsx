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
    <Link to={card.link} className="w-full h-full group">
      <div className="md:h-4/5 h-12 md:group-hover:-translate-y-1 duration-300 transition-all gap-3 w-full flex flex-col justify-center items-center md:bg-white bg-primary rounded-md my-2">
        <card.icon
          size={40}
          className="w-6 md:w-12 md:h-12 group-hover:text-black-pearl-900  h-6 text-white md:text-black-pearl-700"
        />
        {/* <p className="md:block hidden text-white text-lg">{card.title}</p> */}
      </div>
      <p className="text-center text-black-pearl-700 md:text-white md:text-xl ">
        {card.title}
      </p>
    </Link>
  );
}

export default ShortCutCard;
