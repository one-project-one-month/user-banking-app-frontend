import { Scanner } from "@yudiel/react-qr-scanner";

function ScanWithCamera() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full h-full  overflow-hidden">
        <Scanner
          constraints={{ facingMode: { ideal: "environment" } }}
          onScan={() => alert("Work")}
          onError={console.error}
        />
      </div>
    </div>
  );
}

export default ScanWithCamera;
