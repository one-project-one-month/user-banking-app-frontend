import MobileHeader from "@/components/core/MobileHeader";
import QRWithLogo from "../components/qr/QRWithLogo";
import logo from "@/assets/images/app_logo.svg";
import AppLogo from "@/assets/icons/AppLogo";
import { Separator } from "@/components/ui/separator";
import NoteInput from "../components/shared/NoteInput";
import Barcode from "react-barcode";

function QRToPayPage() {
  return (
    <div className="h-full relative flex justify-center items-center bg-white">
      <div className="max-w-4xl w-full text-black-pearl-700 flex flex-col justify-between items-center gap-5 md:pb-0 pb-10 p-6  mx-auto  border-gray-100">
        <MobileHeader className="self-start" backTo="/" title="QR to Pay" />
        <Barcode className="w-[80%]" value="Hello world" displayValue={false} />
        <QRWithLogo
          size={160}
          logoSize={60}
          value="Hello World"
          logoUrl={logo}
        />
        <p className="text-sm">Update after 34s.</p>
        <AppLogo />
        <Separator />
        <NoteInput />
      </div>
    </div>
  );
}

export default QRToPayPage;
