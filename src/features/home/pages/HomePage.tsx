import { Button } from "@/components/ui/button";
import AmountDisplaySection from "../components/amount/AmountDisplaySection";
import { AmountIncomeAndSpentChart } from "../components/amount/AmountIncomeAndSpentChart";
import HistoryTable from "../components/history/HistoryTable";
import ShortCutSection from "../components/shortcut/ShortCutSection";
import MainBanner from "@/components/common/banners/MainBanner";
import exampleBanner from "@/assets/images/example-banner.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function HomePage() {
  const isMobile = useIsMobile();

  return (
    <div className=" md:grid grid-cols-2 gap-3 text-black-pearl-700">
      <div className="flex md:hidden gap-x-3 px-2 items-center">
        <Avatar className="w-10 h-10 rounded-full">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="@avatar" />
          <AvatarFallback className="rounded-lg text-primary">
            CN
          </AvatarFallback>
        </Avatar>
        <div className="text-white">
          <p className="text-sm text-slate-200">Good Morning</p>
          <p>WAI YAN LINN</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:p-5 p-5 px-10 justify-between items-stretch">
        <div className="h-1/2">
          <AmountDisplaySection />
        </div>
        {!isMobile && (
          <div className="h-1/2 hidden md:block">
            <ShortCutSection />
          </div>
        )}
      </div>
      {isMobile ? (
        <div className="bg-white rounded-t-2xl md:hidden p-5 min-h-[70vh]">
          <div className=" w-[65%] mx-auto mb-5">
            <ShortCutSection />
          </div>
          <MainBanner
            isShowArrow={false}
            banners={[
              exampleBanner,
              exampleBanner,
              exampleBanner,
              exampleBanner,
            ]}
          />
        </div>
      ) : (
        <>
          <div className="hidden col-span-1 md:block md:p-5 p-5 px-10">
            <AmountIncomeAndSpentChart />
          </div>
          <div className="col-span-2 hidden md:block md:p-5 p-5 px-10">
            <div className="bg-white rounded-lg p-5">
              <div className="flex justify-between items-center">
                <h1 className="text-black-pearl-700 font-bold text-3xl">
                  Recent Transactions
                </h1>
                <Button>View All</Button>
              </div>
              <HistoryTable />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
