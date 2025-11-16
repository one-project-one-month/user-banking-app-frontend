import MobileHeader from "@/components/core/MobileHeader";
import ScanWithCamera from "../components/scan/ScanWithCamera";

function ScanToRecievePage() {
  return (
    <div className="w-full h-full relative flex flex-col justify-center items-center">
      <MobileHeader
        title="Scan to Recieve"
        className="absolute top-5 left-1/2 -translate-x-1/2 text-white z-20 w-4/5"
      />
      <div className="md:block hidden mb-4">
        <h1 className="text-3xl mb-2 text-center font-semibold text-black-pearl-700">
          Show Your QR Code to the Camera
        </h1>
        <p className="text-center text-sm text-black-pearl-400 max-w-[700px] mx-auto">
          Hold your phone’s QR code in front of the camera to receive payment.
          Make sure the QR is clearly visible and well-lit for accurate
          detection.
        </p>
      </div>
      <ScanWithCamera isScanToRecieve />
    </div>
  );
}

export default ScanToRecievePage;
