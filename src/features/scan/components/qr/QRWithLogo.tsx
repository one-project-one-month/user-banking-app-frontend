import { QRCodeSVG } from "qrcode.react";

interface QRWithLogoProps {
  value: string;
  size?: number;
  logoUrl?: string;
  logoSize?: number;
  errorLevel?: "L" | "M" | "Q" | "H";
  className?: string;
}

export default function QRWithLogo({
  value,
  size = 230,
  logoUrl,
  logoSize = 50,
  errorLevel = "H",
  className = "",
}: QRWithLogoProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <QRCodeSVG value={value} size={size} level={errorLevel} />
      {logoUrl && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logoUrl}
            alt="QR logo"
            style={{
              width: logoSize,
              height: logoSize,
              padding: "4px",
            }}
          />
        </div>
      )}
    </div>
  );
}
