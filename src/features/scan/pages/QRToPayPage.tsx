import MobileHeader from "@/components/core/MobileHeader";
import QRWithLogo from "../components/qr/QRWithLogo";
import logo from "@/assets/images/app_logo.svg";
import AppLogo from "@/assets/icons/AppLogo";
import Barcode from "react-barcode";
import useRefreshGenerate from "../hooks/useRefreshGenerate";
import Spinner from "@/components/common/Spinner";
import { Skeleton } from "@/components/ui/skeleton";
import useEventSource from "@/hooks/useEventSource";

function QRToPayPage() {
  const { timeleft, isPending, qrToken } = useRefreshGenerate(500);
  const isLoading = !qrToken || isPending;

  const { data } = useEventSource(
    qrToken
      ? `personal-banking/scan/qr-to-pay/subscribe?token=${qrToken}`
      : null
  );

  return (
    <div className="h-full relative flex justify-center items-center bg-white">
      <div className="max-w-4xl w-full h-full text-black-pearl-700 flex flex-col justify-between items-center gap-5 md:pb-0 pb-10 p-6 mx-auto border-gray-100">
        <MobileHeader className="self-start" backTo="/" title="QR to Pay" />

        <div className="flex flex-col gap-5 justify-center items-center flex-1">
          {/* {isLoading ? (
            <Skeleton className="bg-black-pearl-200 w-[80%] h-12 rounded-md" />
          ) : (
            <Barcode className="w-[80%]" value={qrToken} displayValue={false} />
          )} */}

          {isLoading ? (
            <Skeleton className="bg-black-pearl-200 w-[200px] h-[200px] rounded-xl" />
          ) : (
            <QRWithLogo
              size={260}
              logoSize={60}
              value={qrToken}
              logoUrl={logo}
            />
          )}

          {isLoading ? (
            <span className="flex gap-3 text-xs justify-center items-center">
              please wait <Spinner />
            </span>
          ) : (
            <p className="text-sm">Update after {timeleft}s.</p>
          )}

          {isLoading ? (
            <Skeleton className="bg-black-pearl-200 w-20 h-20 rounded-full" />
          ) : (
            <AppLogo />
          )}
        </div>
      </div>
    </div>
  );
}

export default QRToPayPage;
