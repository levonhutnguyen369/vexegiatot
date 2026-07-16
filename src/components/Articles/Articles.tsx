import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const Articles = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center py-3">
        <p className="font-bold text-3xl">Tin tức mới</p>
        <p className="py-2">
          Đón nhận tin tức mới nhất từ nhà xe
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
                        <img src="/tintuc1.jpg" className="w-full h-full" />
                      </div>
                      <CardContent className="grid px-4">
                        <div className='py-2'>
                          <p className='line-clamp-2 font-medium my-3'>
                            CÔNG TY PHƯƠNG TRANG CHÍNH THỨC KHAI TRƯƠNG 06 TUYẾN XE BUÝT MỚI TẠI BẠC LIÊU (CÀ MAU)
                          </p>
                          <div className='flex justify-between text-sm'>
                            <p className='text-gray-500 '>29/01/2026</p>
                            <a className='text-blue-600'>Chi tiết</a>
                          </div>



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

export default Articles