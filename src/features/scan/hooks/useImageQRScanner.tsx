import { errorToast } from "@/lib/helper/customToasts";
import jsQR from "jsqr";
import { type Crop } from "react-image-crop";

type useImageQRScannerProps = {
  completedCrop: Crop;
  imgRef: any;
};

function useImageQRScanner({ completedCrop, imgRef }: useImageQRScannerProps) {
  if (!completedCrop || !imgRef.current) return;

  const image = imgRef.current;

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const cropX = completedCrop.x * scaleX;
  const cropY = completedCrop.y * scaleY;
  const cropWidth = completedCrop.width * scaleX;
  const cropHeight = completedCrop.height * scaleY;

  const intWidth = Math.floor(cropWidth);
  const intHeight = Math.floor(cropHeight);

  if (intWidth <= 0 || intHeight <= 0) {
    alert("Invalid crop area. Please select a larger QR region.");
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = intWidth;
  canvas.height = intHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    alert("Canvas not supported.");
    return;
  }

  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    intWidth,
    intHeight
  );

  try {
    const imageData = ctx.getImageData(0, 0, intWidth, intHeight);
    const qrCode = jsQR(imageData.data, intWidth, intHeight);

    if (qrCode) {
      return qrCode;
    } else {
      errorToast("Not Found", "QR not found");
      return;
    }
  } catch (err) {
    errorToast("Error Scan", "Failed to scan QR");
    return;
  }
}

export default useImageQRScanner;
