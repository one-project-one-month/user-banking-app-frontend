import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <div className="text-2xl text-blue-600">
        hello world
        <Link to="/transfer/sender"><Button>Transfer</Button></Link>
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
