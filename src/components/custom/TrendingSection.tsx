import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export const TrendingSection = () => {
  return (
    <>
    {/* Trending Now Section */}
    <section className="py-16 pt-4 bg-black max-w-[1219px] px-4 mx-auto">
          <h2 className="text-2xl font-medium text-white mb-4">
            Trending Now
          </h2>
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {[
                {
                  rank: "1",
                  title: "DETECTIVE CONAN",
                  image: "/trending/trend1.webp",
                },
                { rank: "2", title: "WEDNESDAY", image: "/trending/trend2.webp" },
                {
                  rank: "3",
                  title: "KPOP DEMON HUNTERS",
                  image: "/trending/trend3.webp",
                },
                {
                  rank: "4",
                  title: "KPOP DEMON HUNTERS: RISING",
                  image: "/trending/trend4.webp",
                },
                {
                  rank: "5",
                  title: "IT'S OKAY TO NOT BE OKAY",
                  image: "/trending/trend5.webp",
                },
              ].map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-auto">
                  <div className="relative group cursor-pointer px-[16px]">
                    <Card className="w-[180px] h-[252px] bg-transparent border-none shadow-none p-0 overflow-x-visible">
                      <CardContent 
                        className="relative w-full h-full p-0 rounded-lg overflow-x-visible"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="absolute bottom-0 -left-7 z-[5]">
                          <div className="flex items-end gap-2">
                            <span
                              aria-hidden="true"
                              data-content={item.rank}
                              className="text-[100px] netflix-rank-number"
                            >
                              {item.rank}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
      </section>
    </>
  );
};