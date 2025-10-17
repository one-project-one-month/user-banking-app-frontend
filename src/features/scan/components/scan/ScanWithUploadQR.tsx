import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { useDropzone } from "react-dropzone";
import { CloudUpload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { successToast } from "@/lib/helper/customToasts";
import useImageQRScanner from "../../hooks/useImageQRScanner";
import useCrop from "../../hooks/useCrop";

function ScanWithUploadQR() {
  //*crop state
  const {
    //* Crop value for react crop
    crop,
    setCrop,
    //* completed crop value after croping finished
    completedCrop,
    setCompletedCrop,
    //* refrence for crop image
    imgRef,
    //* open dialog handler
    isOpenCrop,
    setIsOpenCrop,
    //* src link for image that come from upload file
    cropSrc,
    setCropSrc,
    //* to correct up
    onCropImageLoad,
  } = useCrop();

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (dropped) => {
      const file = dropped[0];

      if (!file) return;

      //* once img loaded set the crop value from uploaded  image
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setCropSrc(img.src);
        setIsOpenCrop(true);
      };
    },
  });

  const handleScan = () => {
    const qrCode = useImageQRScanner({ completedCrop, imgRef });

    if (qrCode) {
      successToast("Success", qrCode.data);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center gap-y-3 items-center h-full bg-white px-5">
      <div>
        <h1 className="text-3xl mb-2 text-center font-semibold text-black-pearl-700">
          Upload Your QR Code
        </h1>
        <p className="text-center text-sm text-black-pearl-400 max-w-[500px] mx-auto">
          Select or drag & drop a QR code image. Make sure it’s clear and not
          blurred for accurate scanning.
        </p>
      </div>
      <Dialog open={isOpenCrop} onOpenChange={setIsOpenCrop}>
        <DialogContent className="max-w-3xl">
          {cropSrc && (
            <div className="flex flex-col items-center gap-4">
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={50 / 50}
              >
                <img
                  ref={imgRef}
                  src={cropSrc}
                  alt="Crop source"
                  style={{ maxHeight: "70vh" }}
                  onLoad={onCropImageLoad}
                />
              </ReactCrop>
              <Button
                onClick={handleScan}
                className="bg-primary cursor-pointer text-white  w-full"
              >
                Scan
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <div
        {...getRootProps()}
        className={cn(
          "relative border-dashed border-2 cursor-pointer text-center w-full max-w-2xl rounded-lg",
          isDragActive && "border-primary "
        )}
      >
        <Input
          {...getInputProps()}
          multiple
          className={cn(
            "border-black-pearl-700 rounded-lg transition-all pr-10"
          )}
        />

        {isDragActive ? (
          <div className="text-black-pearl-700 h-40 flex justify-center items-center">
            <p>Drop the files here</p>
          </div>
        ) : (
          <div className="flex flex-col h-40 text-black-pearl-700 justify-center items-center">
            <CloudUpload size={50} className="mb-2" />
            <p className="mb-2 text-black-pearl-700">
              Select files or drag and drop
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScanWithUploadQR;
