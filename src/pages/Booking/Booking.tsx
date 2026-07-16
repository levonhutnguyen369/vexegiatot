import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { User, Armchair, BusFront } from "lucide-react";
import { Link } from "react-router";

// --- MOCK DATA TỪ API ---
const TRIP_INFO = {
  route: "Sài Gòn - Đà Lạt",
  time: "23:00 • 20/01/2026",
  basePrice: 210000,
};

// Giả lập sơ đồ ghế xe giường nằm 2 tầng (3 dãy)
const generateSeats = (floorPrefix: string) => {
  const rows = 6;
  const cols = 3;
  let seats = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      // Random một số ghế đã bị đặt
      const isBooked = Math.random() < 0.2;
      seats.push({
        id: `${floorPrefix}${r}${c}`, // Ví dụ: A11, A12
        label: `${floorPrefix}${r < 10 ? '0' + r : r}`, // Hiển thị A01, A02...
        status: isBooked ? "booked" : "available",
        price: 210000,
      });
    }
  }
  return seats;
};

const SEAT_MAP = {
  down: generateSeats("A"), // Tầng dưới
  up: generateSeats("B"),   // Tầng trên
};

// --- COMPONENT CHÍNH ---
export default function BookingPage() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [customerInfo, setCustomerInfo] = useState({ name: "", phone: "", email: "" });

  // Xử lý chọn ghế
  const toggleSeat = (seatId: string, status: string) => {
    if (status === "booked") return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      if (selectedSeats.length >= 5) {
        alert("Bạn chỉ được chọn tối đa 5 ghế.");
        return;
      }
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  // Tính tổng tiền
  const totalPrice = selectedSeats.length * TRIP_INFO.basePrice;

  // Component render từng ghế
  const SeatItem = ({ seat }: { seat: any }) => {
    const isSelected = selectedSeats.includes(seat.id);
    let bgClass = "bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer"; // Available
    let textClass = "text-blue-700";

    if (seat.status === "booked") {
      bgClass = "bg-gray-200 border-gray-300 cursor-not-allowed";
      textClass = "text-gray-400";
    } else if (isSelected) {
      bgClass = "bg-orange-500 border-orange-600 text-white";
      textClass = "text-white";
    }

    return (
      <div
        onClick={() => toggleSeat(seat.id, seat.status)}
        className={`
          w-10 h-14 rounded-t-lg rounded-b-md border-2 m-1 flex items-center justify-center text-xs font-bold transition-all relative
          ${bgClass} ${textClass}
        `}
      >
        {/* Giả lập hình dáng cái gối đầu của ghế */}
        <div className={`absolute top-1 w-6 h-1 rounded-full ${isSelected ? 'bg-white/30' : 'bg-current opacity-20'}`}></div>
        {seat.label}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">

      {/* CỘT TRÁI: SƠ ĐỒ GHẾ */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Armchair className="text-blue-600" /> Chọn ghế
            </CardTitle>
            <div className="flex gap-4 text-sm mt-2 justify-center bg-gray-50 p-2 rounded-lg">
              <div className="flex items-center gap-1"><div className="w-4 h-4 bg-gray-200 rounded border border-gray-300"></div> Đã bán</div>
              <div className="flex items-center gap-1"><div className="w-4 h-4 bg-blue-50 rounded border border-blue-200"></div> Còn trống</div>
              <div className="flex items-center gap-1"><div className="w-4 h-4 bg-orange-500 rounded border border-orange-600"></div> Đang chọn</div>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col md:flex-row justify-center gap-10 pt-4">
            {/* Tầng dưới */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-500 mb-3">Tầng dưới</h3>
              <div className="grid grid-cols-3 gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                {/* Vô lăng tài xế */}
                <div className="col-span-3 flex justify-start mb-4 opacity-30">
                  <BusFront size={32} />
                </div>
                {SEAT_MAP.down.map((seat) => (
                  <SeatItem key={seat.id} seat={seat} />
                ))}
              </div>
            </div>

            {/* Tầng trên */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-500 mb-3">Tầng trên</h3>
              <div className="grid grid-cols-3 gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                {/* Khoảng trống tương ứng vô lăng */}
                <div className="col-span-3 mb-4 h-8"></div>
                {SEAT_MAP.up.map((seat) => (
                  <SeatItem key={seat.id} seat={seat} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Điểm đón trả (Rút gọn) */}
        <Card>
          <CardHeader><CardTitle className="text-base">Điểm đón / trả</CardTitle></CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="font-bold mb-2 block">Điểm đón</Label>
              <RadioGroup defaultValue="vp1">
                <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="vp1" id="vp1" />
                  <Label htmlFor="vp1" className="cursor-pointer">
                    <span className="font-bold">12:00</span> - VP Sài Gòn
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 mt-2">
                  <RadioGroupItem value="bx1" id="bx1" />
                  <Label htmlFor="bx1" className="cursor-pointer">
                    <span className="font-bold">12:30</span> - BX Miền Đông
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="font-bold mb-2 block">Điểm trả</Label>
              <RadioGroup defaultValue="vp2">
                <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="vp2" id="vp2" />
                  <Label htmlFor="vp2" className="cursor-pointer">
                    <span className="font-bold">18:00</span> - VP Đà Lạt
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CỘT PHẢI: THÔNG TIN THANH TOÁN */}
      <div className="space-y-6">
        <Card className="shadow-lg border-t-4 border-t-blue-600 sticky top-4">
          <CardHeader>
            <CardTitle>Thông tin chuyến đi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="font-bold text-lg">{TRIP_INFO.route}</p>
              <p className="text-gray-500 text-sm">{TRIP_INFO.time}</p>
            </div>
            <Separator />

            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Số lượng ghế:</span>
                <span className="font-bold">{selectedSeats.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Số ghế:</span>
                <span className="font-bold text-blue-600">{selectedSeats.join(", ") || "-"}</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-end">
              <span className="font-bold text-gray-700">Tổng tiền:</span>
              <span className="text-2xl font-bold text-orange-600">
                {totalPrice.toLocaleString('vi-VN')}đ
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <h4 className="font-bold text-sm flex items-center gap-2"><User size={16} /> Thông tin hành khách</h4>
              <div className="space-y-2">
                <Input placeholder="Họ và tên *" onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} />
                <Input placeholder="Số điện thoại *" onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} />
                <Input placeholder="Email (để nhận vé)" />
              </div>
            </div>

            <Link to="/payment">
              <Button
                className="w-full bg-[#fcba03] hover:bg-[#eeb102] text-black font-bold mt-4"
                disabled={selectedSeats.length === 0}
              >
                Tiếp tục
              </Button>
            </Link>


            <p className="text-xs text-center text-gray-400 mt-2">
              Bằng việc nhấn tiếp tục, bạn đồng ý với chính sách bảo mật của chúng tôi.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}