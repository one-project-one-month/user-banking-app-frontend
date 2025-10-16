import { useIsMobile } from "@/hooks/use-mobile";
import ScanWithCamera from "../components/scan/ScanWithCamera";
import ScanWithUploadQR from "../components/scan/ScanWithUploadQR";

function ScanToPayPage() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-full md:p-5 flex justify-center items-center bg-white">
      {isMobile ? <ScanWithCamera /> : <ScanWithUploadQR />}
    </div>
  );
}

export default ScanToPayPage;
