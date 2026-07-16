import { Card, CardContent } from "@/components/ui/card"
import type { CarouselApi } from "@/components/ui/carousel"
import { useState, useEffect } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const Promotions = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      {/* Title */}
      <div className="flex flex-col items-center py-6">
        <p className="font-bold text-3xl">Khuyến mãi nổi bật</p>
      </div>

      {/* Carousel */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-5xl">
          <Carousel
            setApi={setApi}
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent className="p-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="py-0 overflow-hidden">
                    <CardContent className="relative p-0">
                      {/* Logo overlay */}
                      <img
                        src="/logo.svg"
                        className="absolute top-2 left-2 w-10 h-10 object-contain z-10"
                        alt="Logo"
                      />

                      {/* Banner */}
                      <div className="w-full h-40">
                        <img
                          src="/uudai2.png"
                          className="w-full h-full object-cover"
                          alt="Promotion"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots control */}
          <div className="mt-4 flex justify-center gap-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`
                  h-2 rounded-full transition-all focus:outline-none
                  ${current === index
                    ? "w-9 bg-blue-900 focus:outline-none"
                    : "w-2 bg-muted-foreground/40 "}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Promotions
