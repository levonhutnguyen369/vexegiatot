import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Đảm bảo bạn đã cài component Tabs của shadcn
import { Star, X } from "lucide-react";
import { Link } from "react-router";

export function ResultCard() {
  // 1. Tạo state để kiểm soát việc hiển thị chi tiết
  const [isExpanded, setIsExpanded] = useState(false);

  // Dữ liệu mẫu mô phỏng hình ảnh số 2
  const pickUpPoints = [
    { time: "12:00", location: "BX CHÂU ĐỐC" },
    { time: "12:25", location: "VỊNH TRE - AN GIANG" },
    { time: "12:35", location: "CÁI DẦU" },
    { time: "12:50", location: "Bến Xe Châu Thành" },
    { time: "13:15", location: "MỸ THỚI" },
  ];

  const dropOffPoints = [
    { time: "12:00", location: "BV BÌNH DÂN" },
    { time: "18:10", location: "BX Miền Tây" },
    { time: "19:10", location: "108 THÀNH THÁI" },
  ];

  return (
    <Card className="w-full transition-all duration-300">
      <div className="flex gap-3 justify-between flex-cols-3 p-4">
        {/* Phần Hình ảnh bên trái */}
        <div className="w-1/5 flex-1">
          <img
            src="/bus1.png"
            alt="Bus"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Phần Thông tin chính bên phải */}
        <div className="flex-2 w-full">
          <div className="">
            <div className="flex justify-between">
              <div>
                <CardTitle className="flex items-center gap-3">
                  <span>Phương Trang</span>
                  <div className="flex gap-1 items-center bg-blue-500 text-white text-xs px-2 py-0.5 rounded-sm">
                    <Star className="w-3 h-3 text-white fill-current" />
                    <span>4.8</span>
                    <span className="text-[10px] font-normal opacity-80">(255)</span>
                  </div>
                </CardTitle>
                <CardDescription className="py-2">
                  Limousine giường nằm 34 chỗ
                </CardDescription>
              </div>
              <div className="font-bold text-blue-700 text-lg">210.000đ</div>
            </div>

            <div className="flex justify-between items-center my-4">
              <div className="flex gap-4 items-center">
                {/* Timeline đơn giản hóa */}
                <div className="flex flex-col justify-center items-center gap-1">
                  <img src="/dropoff_new_24dp.svg" className="w-4 h-4" alt="start" />
                  <div className="h-8 w-[1px] bg-gray-300 border-dashed border-l"></div>
                  <img src="/pickup_vex_blue_24dp.svg" className="w-4 h-4" alt="end" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 items-center">
                    <span className="font-bold text-lg">14:00</span>
                    <span className="text-gray-500 text-sm">• Bến xe Tân Châu</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="font-bold text-lg">18:00</span>
                    <span className="text-gray-500 text-sm">• Bến xe Miền Tây</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <p className="text-sm text-gray-500">Còn 16 chỗ trống</p>
                <div className="flex items-end gap-4">
                  {/* 2. Sự kiện onClick để toggle state */}
                  <p
                    className="text-sky-700 text-sm font-bold cursor-pointer hover:underline select-none"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Ẩn chi tiết" : "Thông tin chi tiết"}
                  </p>
                  <Link to="/booking"> 
          <Button className="bg-[#fcba03] text-gray-800 hover:bg-[#fed45f] font-semibold">
            Chọn chuyến
          </Button>
        </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Phần hiển thị chi tiết (Conditional Rendering) */}
      {isExpanded && (
        <div className="border-t animate-in fade-in zoom-in-95 duration-200">
          <div className="relative">
            {/* Nút đóng nhanh nếu muốn */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <Tabs defaultValue="pickup" className="w-full">
              <div className="px-4 pt-2 border-b bg-gray-50/50">
                <TabsList className="bg-transparent h-auto p-0 gap-6">
                  <TabsTrigger value="sale" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 rounded-none pb-2 bg-transparent">Giảm giá</TabsTrigger>
                  <TabsTrigger value="pickup" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 rounded-none pb-2 bg-transparent">Đón/trả</TabsTrigger>
                  <TabsTrigger value="rating" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 rounded-none pb-2 bg-transparent">Đánh giá</TabsTrigger>
                  <TabsTrigger value="policy" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 rounded-none pb-2 bg-transparent">Chính sách</TabsTrigger>
                </TabsList>
              </div>

              <CardContent className="p-6 bg-white">
                <TabsContent value="pickup" className="mt-0">
                  <div className="mb-4">
                    <p className="font-bold text-red-600 mb-1">*Lưu ý</p>
                    <p className="text-sm text-gray-600">
                      Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.
                      Lịch này có thể thay đổi tùy tình hình thực tế.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-10">
                    {/* Cột Điểm đón */}
                    <div>
                      <h4 className="font-bold text-gray-700 mb-4">Điểm đón</h4>
                      <div className="space-y-4 relative">
                        {/* Đường kẻ dọc nối các điểm */}
                        {/* <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gray-200"></div> */}

                        {pickUpPoints.map((point, index) => (
                          <div key={index} className="flex gap-4 items-start relative z-10">
                            <span className="font-bold text-gray-700 min-w-[45px]">{point.time}</span>
                            <div className="flex gap-2 items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5"></div>
                              <span className="text-gray-600 uppercase text-sm">{point.location}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cột Điểm trả */}
                    <div>
                      <h4 className="font-bold text-gray-700 mb-4">Điểm trả</h4>
                      <div className="space-y-4">
                        {dropOffPoints.map((point, index) => (
                          <div key={index} className="flex gap-4 items-start">
                            <span className="font-bold text-gray-700 min-w-[45px]">{point.time}</span>
                            <div className="flex gap-2 items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5"></div>
                              <span className="text-gray-600 uppercase text-sm">{point.location}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Các Tab content khác có thể để trống hoặc thêm nội dung tùy ý */}
                <TabsContent value="sale">Nội dung giảm giá...</TabsContent>
                <TabsContent value="rating">Nội dung đánh giá...</TabsContent>
              </CardContent>
            </Tabs>
          </div>
        </div>
      )}
    </Card>
  );
}