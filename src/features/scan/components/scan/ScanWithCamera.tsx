import { errorToast } from "@/lib/helper/customToasts";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useScanQRToPay, useScanQRToRecieve } from "@/queries/scan.query";
import { usePrepare } from "@/queries/transfer.query";
import Spinner from "@/components/common/Spinner";

type ScanWithCameraProps = {
  isScanToRecieve?: boolean;
};

function ScanWithCamera({ isScanToRecieve }: ScanWithCameraProps) {
  const { mutateAsync: scan, isPending: isScanPending } = useScanQRToRecieve();
  const { mutate: scanToRecieve, isPending: isScanToRecievePending } =
    useScanQRToPay();
  const { mutate: prepare, isPending: isPreparePending } = usePrepare();

  const handleScan = async (result: any) => {
    const token = result?.[0]?.rawValue;
    if (!token) return;

    const res = await scan({ token });
    const data = res?.data;

    prepare({
      toAccountNumber: data?.toAccountDetails?.accountNumber ?? "",
      amount: data?.amount,
    });
  };

  const handleScanToRecieve = (result: any) => {
    const token = result?.[0]?.rawValue;
    if (!token) return;

    scanToRecieve({ token });
  };

  const handleError = (error: any) => {
    errorToast("Scan Error", error?.message ?? "Camera failed");
  };

  return (
    <div className="relative flex justify-center items-center w-full h-full md:h-auto">
      {(isPreparePending || isScanPending) && (
        <div className="absolute inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="flex gap-3 items-center">
            <span className="text-white text-xl">
              {isScanPending
                ? "scanning..."
                : isPreparePending
                ? "preparing..."
                : "loading..."}
            </span>
            <Spinner className="text-white" size="w-6 h-6" />
          </div>
        </div>
      )}

      <div className="w-full h-full md:max-w-md md:rounded-md overflow-hidden">
        <Scanner
          constraints={{ facingMode: { ideal: "environment" } }}
          allowMultiple
          scanDelay={3000}
          onScan={isScanToRecieve ? handleScanToRecieve : handleScan}
          onError={handleError}
        />
      </div>
    </div>
  );
}

export default ScanWithCamera;
