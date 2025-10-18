import ScanFooter from "@/features/scan/components/shared/ScanFooter";
import { Outlet } from "react-router-dom";

function ScanLayout() {
  return (
    <div className="w-full h-full pb-9">
      <Outlet />
      <ScanFooter />
    </div>
  );
}

export default ScanLayout;
