import React from 'react'
import { Label } from "@/components/ui/label"
import { Slider } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import DropdownMenu from './DropdownMenu';
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

const FilterSidebar = () => {
  const SORT_OPTIONS = [
    { id: "r1", value: "default", label: "Mặc định" },
    { id: "r2", value: "comfortable", label: "Giờ đi sớm nhất" },
    { id: "r3", value: "compact", label: "Giờ đi muộn nhất" },
    { id: "r4", value: "increase", label: "Giá tăng dần" },
    { id: "r5", value: "decrease", label: "Giá giảm dần" },
  ];
  return (
    <>
      <div className='grid grid-rows gap-3'>
        <div className="rounded-xl border bg-white shadow-sm py-2 px-4">
          <p className='font-bold text-base py-2'>Sắp xếp</p>
          <RadioGroup defaultValue="comfortable">
            {SORT_OPTIONS.map((option) => (
              <div key={option.value} className="flex items-center gap-3">
                {/* Dùng id và value từ mảng */}
                <RadioGroupItem value={option.value} id={option.id} />
                <Label htmlFor={option.id} className='text-base text-gray-600'>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className='rounded-xl border bg-white shadow-sm'>
          <DropdownMenu />
        </div>
      </div>

    </>
  )
}

export default FilterSidebar