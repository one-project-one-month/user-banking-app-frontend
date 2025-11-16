import { useCallback, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import QRToRecieveActions from "./QRToRecieveActions";
import QRToRecieveQRDisplay from "./QRToRecieveQRDisplay";
import QRToRecieveAmountSetupForm from "./QRToRecieveAmountSetupForm";
import { errorToast } from "@/lib/helper/customToasts";
import MobileHeader from "@/components/core/MobileHeader";
import { useGenerateRecieveQR } from "@/queries/scan.query";
import useDownloadQRCode from "../../hooks/useDownloadQRCode";

function QRToRecieveSection() {
  const [isQRGenerated, setIsQRGenerated] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);
  const [qr, setQr] = useState<string | null>(null);

  //qr download handler
  const { qrRef, handleDownloadQR } = useDownloadQRCode();

  //query qr generate funtion
  const { mutateAsync: generateQR, isPending } = useGenerateRecieveQR();

  //generate qr function
  const handleDialogOnGenerate = useCallback(
    async (value: { amount: number; note?: string }) => {
      const res = await generateQR({ amount: value.amount, note: value.note });

      if (!res?.data) return;

      setQr(res.data.token);
      setIsDialogOpen(false);
      setIsQRGenerated(true);
    },
    [qr]
  );

  return (
    <div className="max-w-xl h-full w-full text-black-pearl-700 flex flex-col justify-between items-center gap-8 pb-10 p-6 mx-auto border-gray-100">
      <MobileHeader backTo="/" title="QR to Recieve" />
      <QRToRecieveQRDisplay qr={qr} qrRef={qrRef} />
      <QRToRecieveActions handleDownload={handleDownloadQR} />

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          //*dialog can't be close until qr generate
          if (!isQRGenerated) {
            errorToast("Sorry :(", "You need to fill the form first!!");
            return;
          }
          setIsDialogOpen(open);
        }}
      >
        <DialogContent className="md:max-w-lg max-w-[350px]">
          <QRToRecieveAmountSetupForm
            handleDialogOnGenerate={handleDialogOnGenerate}
            loading={isPending}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default QRToRecieveSection;
