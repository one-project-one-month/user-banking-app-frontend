import { ArrowLeftRight, History, ScanLine } from "lucide-react";
import ShortCutCard from "./ShortCutCard";

function ShortCutSection() {
  return (
    <section className="flex justify-center items-center gap-5 h-full">
      <ShortCutCard
        card={{ title: "Transfer", icon: ArrowLeftRight, link: "/transfer" }}
      />
      <ShortCutCard
        card={{ title: "Scan", icon: ScanLine, link: "/scan/scan-to-pay" }}
      />
      {/* <ShortCutCard
        card={{ title: "History", icon: History, link: "/transactions" }}
      /> */}
    </section>
  );
}

export default ShortCutSection;
