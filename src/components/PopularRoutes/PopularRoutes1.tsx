import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const PopularRoutes1 = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center py-3">
        <p className="font-bold text-3xl">Tuyến đường <span className="text-blue-600">phổ biến</span></p>
        <p className="py-2">
          Những tuyến đường được khách hàng lựa chọn nhiều nhất với giá tốt nhất
        </p>
      </div>
      <div className="flex items-center justify-center w-full">

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl"
        >
          <CarouselContent className="p-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card className="py-0 overflow-hidden">
                    <div>
                      <img
                        src="/logo.svg"
                        className="w-1/10 h-1/10 object-contain absolute top-2"
                        alt="Logo"
                      />
                      <div className="w-full h-40">
                        <img src="/nhatrang-city.jpg" className="w-full h-full" />
                      </div>
                      <CardContent className="grid px-4">
                        <div className="p-2 flex justify-between font-bold text-lg text-foreground">
                          <div className="flex justify-between items-center gap-2">
                            Hà Nội
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                            Sài Gòn
                          </div>
                          <div className="flex items-center gap-1 text-red-600">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-semibold text-sm">4.8</span>
                          </div>
                        </div>
                        <div className="p-2 flex gap-3 text-sm text-muted-foreground">
                          <p>~ 30 giờ</p>
                          <span>•</span>
                          <p>50 chuyến/ngày</p>
                        </div>
                        <hr></hr>
                        <div className="py-4 flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Giá vé</p>
                            <p className="font-bold text-xl text-blue-600">từ 850.000đ</p>
                          </div>
                          <Button className="bg-sky-600">Đặt vé</Button>
                        </div>
                      </CardContent>
                    </div>

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </>
  )
}

export default PopularRoutes1
