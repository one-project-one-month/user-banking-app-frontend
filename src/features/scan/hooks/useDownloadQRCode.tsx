import { useRef } from "react";

function useDownloadQRCode() {
  const qrRef = useRef<SVGSVGElement | null>(null);

  const handleDownloadQR = () => {
    const svg = qrRef.current;
    if (!svg) return;

    const svgString = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#ffffff"; // JPG has no transparency; fill white background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, 0, 0);

      const jpgUrl = canvas.toDataURL("image/jpeg", 1.0);

      const a = document.createElement("a");
      a.href = jpgUrl;
      a.download = "qrcode.jpg";
      a.click();

      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return { qrRef, handleDownloadQR };
}

export default useDownloadQRCode;
