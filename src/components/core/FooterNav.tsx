import { Link, useLocation } from "react-router-dom";
import { HandHelping, History, Home, ScanLine, Settings } from "lucide-react";

const NO_NAV_PAGES = [
  "/login",
  "/register",
  "/scan/qr-to-pay",
  "/scan/scan-to-pay",
  "/scan/qr-to-recieve",
];

function FooterNav() {
  const pathname = useLocation().pathname;

  const isShowNav = !NO_NAV_PAGES.includes(pathname);
  return (
    <>
      {isShowNav && (
        <div className="relative md:hidden pt-16">
          <footer className="block md:hidden fixed bottom-0 left-0 w-full text-black-pearl-700 bg-white z-50">
            <div className="w-full max-w-[85%] mx-auto  py-2 flex justify-between items-center">
              <Link
                to="/"
                className="flex flex-col gap-y-2 text-primary-custom justify-center items-center"
              >
                <Home className="w-5 h-5" />
                <span className="text-center text-xs">Home</span>
              </Link>
              <Link
                to="/transactions"
                className="flex flex-col gap-y-2 text-primary-custom justify-center items-center"
              >
                <History className="w-5 h-5" />
                <span className="text-center text-xs">History</span>
              </Link>
              <div className="relative w-[55px] h-[55px]">
                <Link
                  to="/scan/scan-to-pay"
                  className="w-[55px] h-[55px] rounded-full bg-primary flex justify-center items-center absolute -top-8 text-white left-0"
                >
                  <ScanLine className="w-5 h-5" />
                </Link>
                <div className="text-center text-xs w-full absolute bottom-1">
                  Scan
                </div>
              </div>
              <Link
                to="/"
                className="flex flex-col gap-y-2 text-primary-custom justify-center items-center"
              >
                <HandHelping className="w-5 h-5" />
                <span className="text-center text-xs">Transfer</span>
              </Link>
              <Link
                to="/"
                className="flex flex-col gap-y-2 text-primary-custom justify-center items-center"
              >
                <Settings className="w-5 h-5" />
                <span className="text-center text-xs">Setting</span>
              </Link>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default FooterNav;
