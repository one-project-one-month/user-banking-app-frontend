import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainBanner from "@/components/common/banners/MainBanner";
import AmountDisplaySection from "../components/amount/AmountDisplaySection";
import { AmountIncomeAndSpentChart } from "../components/amount/AmountIncomeAndSpentChart";
import ShortCutSection from "../components/shortcut/ShortCutSection";
import { useIsMobile } from "@/hooks/use-mobile";
import exampleBanner from "@/assets/images/example-banner.png";
import HistorySection from "../components/history/HistorySection";
import HistoryHeader from "../components/history/HistoryHeader";
import FavouriteList from "../components/favourite/FavouriteList";

function HomePage() {
  const isMobile = useIsMobile();

  return (
    <div className="text-black-pearl-700 pt-5 md:pt-0 md:grid grid-cols-3">
      <div className="col-span-2 md:grid grid-cols-2 ">
        <div className="flex md:hidden gap-x-3 px-2 items-center">
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@avatar" />
            <AvatarFallback className="rounded-lg text-primary">
              CN
            </AvatarFallback>
          </Avatar>

          <div className="text-white">
            <p className="text-sm text-slate-200">Good Morning</p>
            <p>WAI YAN LINN</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:p-3 p-5 px-10 md:min-h-[300px]">
          <div className="flex-1">
            <AmountDisplaySection />
          </div>

          {!isMobile && (
            <div className="flex-1 hidden md:block">
              <ShortCutSection />
            </div>
          )}
        </div>

        {isMobile ? (
          <div className="bg-white rounded-t-3xl md:hidden">
            <div className="p-5">
              <div className="w-[65%] mx-auto mb-5">
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
            <HistoryHeader />
            <div className="p-5">
              <HistorySection />
            </div>
          </div>
        ) : (
          <>
            <div className="col-span-1 p-3 md:grid grid-cols-3 hidden">
              <FavouriteList />
            </div>
            <div className="hidden col-span-2 md:block md:p-3 p-5 px-10">
              <AmountIncomeAndSpentChart />
            </div>
          </>
        )}
      </div>
      {!isMobile && (
        <div className="col-span-1">
          <div className="col-span-1 hidden md:block md:p-3 p-5px-10">
            {/* web banner  */}
            <MainBanner
              isShowArrow={false}
              banners={[
                exampleBanner,
                exampleBanner,
                exampleBanner,
                exampleBanner,
              ]}
            />

            {/* web recent history */}
            <div className="border-t border-t-white/20">
              <HistoryHeader />
              <HistorySection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
