import * as React from "react";
import exampleImage from "@/assets/images/example-banner.png";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BannerProps = {
  banners: string[]; // array of image URLs
  isShowArrow?: boolean;
  isShowProgress?: boolean;
};

function MainBanner({
  banners,
  isShowArrow = true,
  isShowProgress = true,
}: BannerProps) {
  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  const handlePrev = () => {
    if (!api) return;
    api.scrollTo(current === 0 ? banners.length - 1 : current - 1);
  };

  const handleNext = () => {
    if (!api) return;
    api.scrollTo(current === banners.length - 1 ? 0 : current + 1);
  };

  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    api.on("select", update);
    update();
    return () => {
      if (api) {
        api.off("select", update);
      }
    };
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="relative w-full overflow-hidden mx-0 px-0"
      >
        {/* Arrows */}
        {isShowArrow && (
          <>
            <div
              onClick={handlePrev}
              className="absolute md:w-20 md:h-20 w-8 h-8 flex justify-center items-center top-1/2 left-3 md:left-1/7 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/30 rounded-full p-1 cursor-pointer"
            >
              <ChevronLeft size={50} className=" text-white" />
            </div>
            <div
              onClick={handleNext}
              className="absolute md:w-20 md:h-20 w-8 h-8 flex justify-center items-center top-1/2 right-3 md:right-1/7 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/30 rounded-full p-1 cursor-pointer"
            >
              <ChevronRight size={50} className=" text-white" />
            </div>
          </>
        )}
        <CarouselContent>
          {banners.map((url, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative w-full aspect-[341/95] overflow-hidden">
                <img
                  src={url || exampleImage}
                  alt={`banner-${index}`}
                  className="object-cover w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {isShowProgress && (
        <div className="flex justify-center my-3">
          <div className="flex gap-2 md:hidden">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-neutral-800" : "bg-neutral-400"
                }`}
              />
            ))}
          </div>
          <div className="hidden md:flex gap-2 w-1/3">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                  current === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainBanner;
