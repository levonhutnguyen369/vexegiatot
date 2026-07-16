
import React from 'react';
import {  BusFront , MapPin , Users } from 'lucide-react'


interface StatisticItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-orange-100 rounded-full p-4">
            {icon}
        </div>
        <div>
            <h4 className="text-xl font-bold text-gray-800">{title}</h4>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    </div>
);

const Achievement: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white p-8 md:p-12 rounded-2xl overflow-hidden ">
      <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-600 tracking-tight">VEXETOT - CHẤT LƯỢNG LÀ DANH DỰ</h2>
          <p className="mt-4 text-lg text-gray-600">Được hàng triệu khách hàng tin tưởng và lựa chọn trên mọi hành trình.</p>
          </div>
      <div className="w-[70%] flex flex-col lg:flex-row items-center lg:space-x-12 flex justify-center">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          
          
          
          <div className="mt-10 space-y-8">
            <StatisticItem 
                icon={<Users />}
                title="Hơn 10 Triệu Lượt khách"
                description="Vexetot phục vụ hơn 10 triệu lượt khách bình quân 1 năm trên toàn quốc."
            />
            <StatisticItem 
                icon={<MapPin />}
                title="Hơn 1.000+ Đối tác"
                description="Mạng lưới đối tác nhà xe uy tín, phủ rộng khắp các tỉnh thành, trạm trung chuyển, bến xe."
            />
             <StatisticItem 
                icon={<BusFront />}
                title="Hơn 5.000+ Chuyến xe"
                description="Vexetot phục vụ hơn 5.000 chuyến xe đường dài và liên tỉnh mỗi ngày."
            />
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src='/achievement.svg' />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
