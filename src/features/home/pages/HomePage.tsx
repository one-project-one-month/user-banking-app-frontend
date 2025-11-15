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
import useGetUserData from "@/hooks/useGetUserData";
import PageLoading from "@/components/core/PageLoading";

function HomePage() {
  const isMobile = useIsMobile();
  const { info, isUserDataLoading } = useGetUserData();

  if (isUserDataLoading) return <PageLoading />;

  return (
    <div
      style={{
        background: isMobile
          ? "linear-gradient(180.32deg, #0A3D62 6.69%, #1888D9 99.72%)"
          : "",
      }}
      className="text-black-pearl-700 w-full md:bg-gray-100 pt-5 md:pt-6"
    >
      {/* ---------- MOBILE HEADER ---------- */}
      <div className="flex md:hidden gap-x-3 px-2 items-center">
        <Avatar className="w-10 h-10 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="@avatar" />
          <AvatarFallback className="rounded-lg text-primary">
            CN
          </AvatarFallback>
        </Avatar>

        <div className="text-white">
          <p className="text-sm text-slate-200">Good Morning</p>
          <p>{info?.fullname}</p>
        </div>
      </div>

      {/* ---------- DESKTOP LAYOUT ---------- */}
      {!isMobile && (
        <div className="hidden md:flex justify-center px-6 pb-6">
          <div className="w-full grid grid-cols-3 gap-6">
            {/* LEFT PANEL */}
            <div className="flex flex-col gap-5">
              <AmountDisplaySection
                amount={info?.currentBalance}
                accountNumber={info?.selectedAccountDetails.accountNumber}
                isMobile={isMobile}
              />
              <ShortCutSection />
              <div>
                <HistoryHeader />
                <HistorySection />
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex flex-col gap-5 col-span-2">
              <AmountIncomeAndSpentChart />

              <div className="flex flex-col gap-5">
                <MainBanner
                  isShowArrow={false}
                  isShowProgress={false}
                  banners={[
                    exampleBanner,
                    exampleBanner,
                    exampleBanner,
                    exampleBanner,
                  ]}
                />
                <FavouriteList />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- MOBILE LAYOUT (unchanged) ---------- */}
      {isMobile && (
        <>
          <div className="p-5">
            <AmountDisplaySection
              amount={info?.currentBalance}
              accountNumber={info?.selectedAccountDetails.accountNumber}
              isMobile={isMobile}
            />
          </div>
          <div className="bg-white rounded-t-3xl mt-6">
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
        </>
      )}
    </div>
  );
}

export default HomePage;
