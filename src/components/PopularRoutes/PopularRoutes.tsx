import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, MapPin } from "lucide-react";

// Shadcn UI Imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const routes = [
  {
    from: "Hà Nội",
    to: "Sài Gòn",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600&auto=format&fit=crop",
    duration: "30h",
    price: "450.000đ",
    rating: 4.8,
    type: "Giường nằm",
  },
  {
    from: "Hà Nội",
    to: "Đà Nẵng",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600&auto=format&fit=crop",
    duration: "15h",
    price: "280.000đ",
    rating: 4.9,
    type: "Limousine",
  },
  {
    from: "Sài Gòn",
    to: "Nha Trang",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600&auto=format&fit=crop",
    duration: "9h",
    price: "200.000đ",
    rating: 4.7,
    type: "Giường nằm",
  },
  {
    from: "Sài Gòn",
    to: "Đà Lạt",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600&auto=format&fit=crop",
    duration: "7h",
    price: "180.000đ",
    rating: 4.9,
    type: "Limousine",
  },
    {
    from: "Đà Nẵng",
    to: "Huế",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600&auto=format&fit=crop",
    duration: "3h",
    price: "100.000đ",
    rating: 4.8,
    type: "Ghế ngồi",
  },
];


const PopularRoutes = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* ... Phần Header giữ nguyên ... */}
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4"
        >
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Tuyến đường <span className="text-primary">phổ biến</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Top các chuyến đi được yêu thích nhất
            </p>
          </div >
          {/* Nút xem tất cả (Optional) */}
           <Button variant="link" className="hidden md:flex text-primary">
              Xem tất cả <ArrowRight className="w-4 h-4 ml-1" />
           </Button>
        </motion.div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {routes.map((route, index) => (
              <CarouselItem 
                key={index} 
                // THAY ĐỔI Ở ĐÂY:
                // basis-full: Mobile hiện 1 thẻ
                // md:basis-1/2: Tablet hiện 2 thẻ
                // lg:basis-1/4: Desktop hiện đúng 4 thẻ (25% mỗi thẻ)
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <div className="h-full">
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300 border-border/60">
                    {/* ... Phần nội dung Card giữ nguyên ... */}
                    
                     {/* Image Section */}
                    <div className="relative h-36 w-full overflow-hidden">
                       <img
                        src={route.image}
                        alt={`Xe đi ${route.to}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                         <Badge variant="secondary" className="backdrop-blur-md bg-background/80 flex gap-1 items-center px-1.5 py-0.5 text-xs font-bold shadow-sm">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            {route.rating}
                         </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-bold text-sm truncate">{route.from}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        <span className="font-bold text-sm truncate">{route.to}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-md">
                           <Clock className="w-3 h-3" />
                           {route.duration}
                        </div>
                        <div className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-md">
                           <MapPin className="w-3 h-3" />
                           {route.type}
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-3 border-t border-dashed">
                        <div>
                           <p className="text-[10px] text-muted-foreground font-medium uppercase">Giá vé</p>
                           <p className="font-bold text-lg text-primary">{route.price}</p>
                        </div>
                        <Button size="sm" className="h-8 text-xs px-3 rounded-full">
                           Đặt ngay
                        </Button>
                      </div>
                    </CardContent>

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-end gap-2 mt-4 md:absolute md:-top-16 md:right-0">
             <CarouselPrevious className="static md:static translate-y-0 translate-x-0" />
             <CarouselNext className="static md:static translate-y-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default PopularRoutes;