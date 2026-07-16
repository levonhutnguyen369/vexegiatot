import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Slider } from "antd";

type FilterType =
  | "checkbox" | "other"


interface FilterItem {
  type: FilterType;
  title: string;
  options: string[];
}

const filters: FilterItem[] = [
  {
    type: "other",
    title: "Giờ đi",
    options: [
      "Phương Trang",
      "Thành Bưởi",
      "Mai Linh",
      "Hoàng Long",
      "Limousine 9 chỗ",
    ],
  },
  {
    type: "checkbox",
    title: "Nhà xe",
    options: [
      "Phương Trang",
      "Thành Bưởi",
      "Mai Linh",
      "Hoàng Long",
      "Limousine 9 chỗ",
    ],
  },
  {
    type: "checkbox",
    title: "Loại xe",
    options: [
      "Xe giường nằm",
      "Xe ghế ngồi",
      "Xe limousine",
      "Xe cabin đôi",
    ],
  },
  {
    type: "checkbox",
    title: "Loại ghế",
    options: ["Ghế thường", "Ghế VIP", "Giường đơn", "Giường đôi"],
  },
  {
    type: "checkbox",
    title: "Đánh giá",
    options: ["⭐ 5 sao", "⭐ Từ 4 sao", "⭐ Từ 3 sao", "Dưới 3 sao"],
  },
  {
    type: "checkbox",
    title: "Tiện nghi",
    options: [
      "Wifi",
      "Điều hòa",
      "Nước uống miễn phí",
      "Ổ cắm sạc",
      "Chăn – gối",
    ],
  },
];

const DropdownMenu = () => {
  return (
    <aside className="w-full max-w-xs">
      
      <Accordion type="multiple" className="w-full">
        <div className="flex justify-between items-center">
          <p className="p-4 text-lg font-bold">Bộ lọc</p>
          {/* <a className="text-blue-500 cursor-pointer underline decoration-1 text-sm">Xóa lọc</a> */}
        </div>
        
        {filters.map((filter) => (
          <AccordionItem key={filter.title} value={filter.title}>
            <AccordionTrigger className="px-4 text-left font-semibold text-base hover">
              {filter.title}
            </AccordionTrigger>

            <AccordionContent>
              <div className="px-4 pb-4">
                {filter.type === "other" ? (
                  <>
                    <div className="text-sm text-gray-600 mb-2">
                      Khoảng giờ xuất phát
                    </div>

                    <Slider range min={0} max={24} defaultValue={[0, 24]} />

                    <div className="flex justify-between text-base text-gray-500 mt-1">
                      <span>0h</span>
                      <span>24h</span>
                    </div>
                  </>
                ) : (
                  <ul className="space-y-2">
                    {filter.options.map((option) => (
                      <li key={option}>
                        <label className="flex items-center gap-2 text-base text-gray-600 cursor-pointer">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded text-sky-600 focus:ring-0"
                          />
                          <span>{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AccordionContent>

          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export default DropdownMenu;
