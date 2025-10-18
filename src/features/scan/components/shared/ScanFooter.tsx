import { ScanLine, ScanQrCode } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function ScanFooter() {
  const path = useLocation()
    .pathname.split("/")
    .filter((_, i) => i <= 2)
    .join("/");
  // const childPath = path + "/" + useLocation().pathname.split("/")[2];

  return (
    <div className="relative md:hidden">
      <footer className="block md:hidden fixed bottom-0 left-0 w-full text-neutral-400  bg-white z-50">
        <div className="w-full max-w-[85%] mx-auto  py-3 flex justify-between items-center">
          <Link
            to="/scan/scan-to-pay"
            className={`flex flex-col gap-y-2 text-primary-custom justify-center items-center ${
              path === "/scan/scan-to-pay" && "text-black-pearl-700"
            }`}
          >
            <ScanQrCode className="w-5 h-5" />
            <span className="text-center text-xs">Scan To Pay</span>
          </Link>
          <Link
            to="/scan/qr-to-pay"
            className={`flex flex-col gap-y-2 text-primary-custom justify-center items-center ${
              path === "/scan/qr-to-pay" && "text-black-pearl-700"
            }`}
          >
            <ScanLine className="w-5 h-5" />
            <span className="text-center text-xs">QR to Pay</span>
          </Link>
          <Link
            to="/scan/qr-to-recieve"
            className={`flex flex-col gap-y-2 text-primary-custom justify-center items-center ${
              path === "/scan/qr-to-recieve" && "text-black-pearl-700"
            }`}
          >
            <ScanLine className="w-5 h-5" />
            <span className="text-center text-xs">QR to Recieve</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default ScanFooter;
