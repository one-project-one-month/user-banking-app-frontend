import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type AmountDisplaySectionProps = {
  isMobile?: boolean;
  amount?: number;
  accountNumber?: string;
};

function AmountDisplaySection({
  isMobile,
  amount,
  accountNumber,
}: AmountDisplaySectionProps) {
  const [isShowAmount, setIsShowAmount] = useState(false);

  const toggleShowAmount = () => setIsShowAmount((prev) => !prev);

  return (
    <section
      style={{
        background: !isMobile
          ? "linear-gradient(242.25deg, #0A3D62 3.74%, #227DBE 81.75%)"
          : "",
        position: "relative",
        overflow: "hidden",
      }}
      className="w-full h-full md:text-white md:shadow-md bg-white md:bg-custom-secondary-500 flex flex-col justify-center items-center md:justify-start rounded-lg md:rounded-2xl p-5"
    >
      {/* Decorative texture overlay (only for web) */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(rgba(255, 165, 39, 0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10 w-full">
        <h1 className="text-center md:text-start text-xl md:text-sm font-semibold md:font-medium mb-3">
          E-Wallet Balance (MMK)
        </h1>

        <p className="flex space-x-2 w-full h-12 justify-center md:justify-start items-center">
          <span className="cursor-default text-xl md:text-4xl select-none font-semibold">
            {isShowAmount ? `${amount} MMK` : "***********"}
          </span>
          <span onClick={toggleShowAmount} className="cursor-pointer">
            {isShowAmount ? <Eye /> : <EyeClosed />}
          </span>
        </p>
      </div>
      <p className="hidden md:flex absolute left-5 bottom-5 z-20 text-sm tracking-widest text-white/70">
        Account No:{" "}
        <span className="ml-2 text-white font-medium">{accountNumber}</span>
      </p>
    </section>
  );
}

export default AmountDisplaySection;
