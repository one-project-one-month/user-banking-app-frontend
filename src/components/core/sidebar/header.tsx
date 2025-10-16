import CustomBreadCrumb from "@/components/common/CustomBreadCrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const currentPathName = useLocation().pathname;

  const segments = currentPathName.split("/").filter(Boolean);
  const displaySegments = segments[0] === "bank" ? segments.slice(1) : segments;

  const crumbs = displaySegments.map((segment, index) => {
    return {
      name: segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      path: displaySegments.filter((_, i) => i <= index).join("/"),
    };
  });

  return (
    <header className="px-4 py-4 hidden md:block bg-transparent text-white">
      <div className="md:flex hidden items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="hover:bg-transparent hover:text-white/80" />
          <CustomBreadCrumb
            currentPageTitle={crumbs[crumbs.length - 1]?.name}
            links={crumbs.filter((_, i) => i !== crumbs.length - 1)}
          />
        </div>

        <div className="flex items-center gap-1">
          <p>Jon Doe</p>
          <Avatar className="w-9 h-9 rounded-full">
            <AvatarImage src={"https://github.com/shadcn.png"} alt="@avatar" />
            <AvatarFallback className="rounded-lg text-primary">
              CN
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
export default Header;
