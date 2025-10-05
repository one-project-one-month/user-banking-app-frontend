import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 bg-background px-4 border-b">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        {/* <h1 className="font-semibold text-lg">Dashboard</h1> */}
      </div>

      <div className="flex items-center gap-1">
        <p>Jon Doe</p>
        <Button variant="ghost" size="icon" className="bg-gray-300 rounded-2xl">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};
export default Header;
