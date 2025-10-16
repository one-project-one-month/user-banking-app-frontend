import { Download, Upload } from "lucide-react";

function QRToRecieveActions() {
  return (
    <div className="flex w-full gap-4">
      <div className="w-1/2 flex flex-col p-4 rounded-xl gap-y-2 shadow-md justify-center items-center hover:bg-gray-50 transition">
        <Upload />
        <span>Share</span>
      </div>
      <div className="w-1/2 flex flex-col p-4 rounded-xl gap-y-2 shadow-md justify-center items-center hover:bg-gray-50 transition">
        <Download />
        <span>Save</span>
      </div>
    </div>
  );
}

export default QRToRecieveActions;
