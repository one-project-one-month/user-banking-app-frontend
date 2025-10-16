import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

function AmountDisplaySection() {
  const [isShowAmount, setIsShowAmount] = useState(false);

  const toggleShowAmount = () => {
    setIsShowAmount((prev) => !prev);
  };

  return (
    <section className="w-full h-full max-h-60 bg-white flex flex-col justify-center items-center rounded-lg md:rounded-2xl p-5">
      <h1 className="text-center md:text-start w-full text-xl md:text-2xl  font-semibold mb-3">
        E-Wallet Balance (MMK)
      </h1>
      <p className="flex space-x-2 w-full h-12 justify-center md:justify-start items-center">
        <span className="cursor-default text-xl  select-none font-semibold">
          {isShowAmount ? "1,000,000 MMK" : "***********"}
        </span>
        <span onClick={toggleShowAmount} className="cursor-pointer">
          {isShowAmount ? <Eye /> : <EyeClosed />}
        </span>
      </p>
    </section>
  );
}

export default AmountDisplaySection;
