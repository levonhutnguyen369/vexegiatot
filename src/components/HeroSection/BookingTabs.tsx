import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import SearchForm from '../features/SearchForm';
import clsx from "clsx";

const onChange = (key: string) => {
  console.log(key);
};


interface BookingTabsProps {
  className?: string;
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Xe khách',
    children: (
      <div className="w-full p-4">
        <SearchForm />
      </div>
    ),
  },
  {
    key: '2',
    label: 'Tàu lửa',
    children: (
      <div className="w-full p-4">
        Đặt vé tàu lửa
      </div>
    )
  },
  {
    key: '3',
    label: 'Thuê xe',
    children: (
      <div className="w-full p-4">
        Dịch vụ thuê xe
      </div>
    )
  },
];

const BookingTabs: React.FC<BookingTabsProps> = ({ className }) => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className={clsx(className, "")}
    />
  );
};

export default BookingTabs;