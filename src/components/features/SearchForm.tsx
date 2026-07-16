import { Button } from '@/components/ui/button'
import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react'
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useNavigate } from "react-router";

type InputProps = {
  hasError?: boolean;
  disabled?: boolean;
};

const SearchForm = ({ disabled = false }: InputProps) => {

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search"); // route bạn muốn chuyển tới
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  return (
    <>
      <div className='flex grid grid-cols-3 justify-between gap-3'>
        <div className='flex gird gird-cols-3 gap-0 col-span-2 border border-gray-200 rounded-lg relative'>
          {/* chon diem xuat phat */}
          <div className='flex flex-col-1 px-3'>
            <div className='flex items-center'>
              <img src='/pickup_vex_blue_24dp.svg' />
            </div>
            <div className='noi-xuat-phat grid gap-1 grid-cols-1 m-2'>
              <label className="block text-xs font-medium leading-none text-muted-foreground">
                Nơi xuất phát
              </label>
              <input
                list="cities"
                disabled={disabled}
                className="text-sm outline-none border-none focus:outline-none focus:ring-0 p-0"
                placeholder="Nhập hoặc chọn thành phố"
              />

              <datalist id="cities">
                <option value="TP.HCM" />
                <option value="Hà Nội" />
                <option value="Đà Nẵng" />
              </datalist>
            </div>
          </div>


          <hr className="w-px h-full bg-gray-300 border-0" />
          {/* chon noi den */}
          <div className='flex flex-col-1 pl-6 px-3'>
            <div className='flex items-center'>
              <img src='/dropoff_new_24dp.svg' />
            </div>
            <div className='noi-xuat-phat grid gap-1 grid-cols-1 m-2'>
              <label className="block text-xs font-medium leading-none text-muted-foreground">
                Nơi đến
              </label>
              <input
                list="cities"
                disabled={disabled}
                className="text-sm outline-none border-none focus:outline-none focus:ring-0 p-0"
                placeholder="Nhập hoặc chọn thành phố"
              />

              <datalist id="cities">
                <option value="TP.HCM" />
                <option value="Hà Nội" />
                <option value="Đà Nẵng" />
              </datalist>
            </div>
          </div>

          <hr className="w-px h-full bg-gray-300 border-0" />
          {/* nhap ngay di */}
          <div className="grid gap-1 grid-cols-1 m-2 relative">
            <label className="block text-xs font-medium leading-none text-muted-foreground">
              Ngày đi
            </label>

            <input
              type="text"
              readOnly
              value={date ? format(date, 'dd/MM/yyyy') : ''}
              placeholder="Chọn ngày đi"
              className="text-sm outline-none border-none focus:outline-none focus:ring-0 p-0"
              onClick={() => setOpenCalendar(true)}
            />

            {openCalendar && (
              <div className="absolute top-full left-0 z-50 mt-2">
                <Calendar
                  mode="single"
                  locale={vi}
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setOpenCalendar(false);
                  }}
                  formatters={{
                    formatCaption: (date) =>
                      format(date, 'MMMM yyyy', { locale: vi }),
                  }}
                  className="rounded-md border shadow-sm bg-white"
                  captionLayout="dropdown"
                />
              </div>
            )}
          </div>
        </div>

        {/* Button search*/}
        <div className="col-span-1">
          <Button  onClick={handleSearch} className='w-full h-full p-3 bg-[#fcba03] text-black focus-none hover:none hover:bg-[#ffcf4b] rounded-lg'>Tìm Kiếm</Button>
        </div>
      </div>


    </>
  )
}

export default SearchForm