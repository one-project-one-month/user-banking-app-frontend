import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileHeaderProps {
  title: string;
  backTo?: string;
  iconSize?: number;
  className?: string;
}

export default function MobileHeader({
  title,
  backTo = "/",
  iconSize = 30,
  className = "",
}: MobileHeaderProps) {
  return (
    <div className={`relative w-full mb-2 md:hidden ${className}`}>
      <h1 className="text-center text-2xl font-semibold">{title}</h1>
      <Link to={backTo} className="absolute left-0 top-0">
        <ChevronLeft size={iconSize} />
      </Link>
    </div>
  );
}
