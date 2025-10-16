import ScanFooter from "@/features/scan/components/shared/ScanFooter";
import { Outlet } from "react-router-dom";

function ScanLayout() {
  return (
    <div className="w-full h-full">
      <Outlet />
      <ScanFooter />
    </div>
  );
}

export default ScanLayout;
