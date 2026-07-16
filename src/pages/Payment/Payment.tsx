import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, QrCode, Wallet, Bus, Users, Clock, MapPin } from "lucide-react";
import { toast } from "sonner"; // Hoặc thư viện toast bạn đang dùng

// --- MOCK DATA (Dữ liệu giả lập được truyền từ trang trước) ---
const BOOKING_DATA = {
  trip: {
    route: "Sài Gòn - Đà Lạt",
    startTime: "23:00",
    date: "20/01/2026",
    busType: "Limousine 34 chỗ",
    pickup: "VP Sài Gòn (12:00)",
    dropoff: "VP Đà Lạt (18:00)",
  },
  seats: ["A01", "A02", "B05"],
  pricePerSeat: 210000,
  customer: {
    name: "Nguyễn Văn A",
    phone: "0909 123 456",
    email: "nguyenvana@example.com",
  },
};

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("vnpay"); // Mặc định chọn VNPAY
  const [isLoading, setIsLoading] = useState(false);

  // Tính toán tổng tiền
  const totalAmount = BOOKING_DATA.seats.length * BOOKING_DATA.pricePerSeat;
  const serviceFee = 0; // Phí dịch vụ (nếu có)
  const finalTotal = totalAmount + serviceFee;

  // Xử lý sự kiện thanh toán
  const handlePayment = () => {
    setIsLoading(true);

    // Giả lập gọi API
    setTimeout(() => {
      if (paymentMethod === "vnpay") {
        // LOGIC VNPAY:
        // 1. Gọi API Backend để lấy URL thanh toán VNPAY
        // 2. Redirect người dùng sang URL đó
        window.location.href = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?...";
        toast.info("Đang chuyển hướng sang cổng thanh toán VNPAY...");
      } else {
        // LOGIC TIỀN MẶT:
        // Gọi API tạo đơn hàng với trạng thái "Pending Payment"
        toast.success("Đặt vé thành công! Vui lòng thanh toán tại quầy.");
        // Redirect sang trang Success
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* <h1 className="text-2xl font-bold mb-6 text-gray-800">Thanh toán & Xác nhận</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* --- CỘT TRÁI: PHƯƠNG THỨC THANH TOÁN --- */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Chọn phương thức thanh toán</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                defaultValue="vnpay"
                className="grid gap-4"
                onValueChange={setPaymentMethod}
              >
                {/* Option 1: VNPAY */}
                <Label
                  htmlFor="vnpay"
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl border-2 p-4 hover:bg-blue-50 cursor-pointer transition-all ${paymentMethod === "vnpay" ? "border-blue-600 bg-blue-50/50" : "border-gray-200"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="vnpay" id="vnpay" className="mt-1 md:mt-0" />
                    <div className="bg-white p-2 rounded border">
                      {/* Thay bằng Logo VNPAY thật */}
                      <img src="https://vnpay.vn/s1/statics.vnpay.vn/2023/9/06ncktiwd6dc1694418196384.png" alt="VNPAY" className="h-6 object-contain" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-gray-700">Thanh toán qua VNPAY</p>
                      <p className="text-sm text-gray-500 font-normal">
                        Hỗ trợ QR Code, Thẻ ATM nội địa, Visa/Mastercard.
                      </p>
                    </div>
                  </div>
                  {paymentMethod === "vnpay" && <CheckCircle2 className="text-blue-600 h-6 w-6 hidden md:block" />}
                </Label>

                {/* Option 2: Tiền mặt */}
                <Label
                  htmlFor="cash"
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl border-2 p-4 hover:bg-orange-50 cursor-pointer transition-all ${paymentMethod === "cash" ? "border-orange-500 bg-orange-50/50" : "border-gray-200"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="cash" id="cash" className="mt-1 md:mt-0" />
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Wallet className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-gray-700">Thanh toán tiền mặt</p>
                      <p className="text-sm text-gray-500 font-normal">
                        Thanh toán tại văn phòng nhà xe hoặc chuyển khoản sau.
                      </p>
                    </div>
                  </div>
                  {paymentMethod === "cash" && <CheckCircle2 className="text-orange-500 h-6 w-6 hidden md:block" />}
                </Label>
              </RadioGroup>

              {/* Hướng dẫn chi tiết dựa trên lựa chọn */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 border border-gray-200">
                {paymentMethod === "vnpay" ? (
                  <div className="flex gap-3 items-start">
                    <QrCode className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <p>Bạn sẽ được chuyển hướng sang cổng thanh toán VNPAY. Giao dịch an toàn và được xác nhận ngay lập tức.</p>
                  </div>
                ) : (
                  <div className="flex gap-3 items-start">
                    <Clock className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <p>Vé sẽ được giữ trong vòng <strong>60 phút</strong>. Vui lòng thanh toán để hoàn tất đặt vé.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --- CỘT PHẢI: THÔNG TIN VÉ (STICKY) --- */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4 shadow-lg border-t-4 border-t-[#fcba03]">
            <CardHeader className="bg-gray-50/50 border-b">
              <CardTitle className="text-base font-bold uppercase text-gray-700">Thông tin đặt vé</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">

              {/* Thông tin Hành khách */}
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                  <Users size={16} className="text-blue-600" /> Hành khách
                </h3>
                <div className="text-sm text-gray-600 space-y-1 pl-6">
                  <p><span className="font-medium text-gray-800">{BOOKING_DATA.customer.name}</span></p>
                  <p>{BOOKING_DATA.customer.phone}</p>
                  <p>{BOOKING_DATA.customer.email}</p>
                </div>
              </div>

              <Separator />

              {/* Thông tin Lượt đi */}
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                  <Bus size={16} className="text-blue-600" /> Lượt đi
                </h3>
                <div className="text-sm space-y-3 pl-6">
                  <div>
                    <p className="font-bold text-gray-800">{BOOKING_DATA.trip.route}</p>
                    <p className="text-xs text-gray-500">{BOOKING_DATA.trip.date}</p>
                  </div>

                  <div className="relative border-l-2 border-gray-300 ml-1 pl-4 space-y-4 pb-1">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></div>
                      <p className="font-bold text-blue-700">{BOOKING_DATA.trip.startTime}</p>
                      <p className="text-gray-600 text-xs">{BOOKING_DATA.trip.pickup}</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></div>
                      <p className="text-gray-600 text-xs">{BOOKING_DATA.trip.dropoff}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-blue-50 p-2 rounded text-blue-800">
                    <span className="font-medium">Ghế:</span>
                    <span className="font-bold">{BOOKING_DATA.seats.join(", ")}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Chi tiết giá */}
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2">Chi tiết giá</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Giá vé ({BOOKING_DATA.seats.length}x)</span>
                    <span>{totalAmount.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí dịch vụ</span>
                    <span>{serviceFee === 0 ? "Miễn phí" : serviceFee}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">Tổng cộng</span>
                    <span className="font-bold text-xl text-orange-600">{finalTotal.toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>
              </div>

              {/* Nút thanh toán */}
              <Button
                onClick={handlePayment}
                disabled={isLoading}
                className="w-full h-12 text-base font-bold bg-[#fcba03] hover:bg-[#fed45f] text-gray-900 mt-4 shadow-sm"
              >
                {isLoading ? "Đang xử lý..." : paymentMethod === 'vnpay' ? "Thanh toán VNPAY" : "Đặt vé ngay"}
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}