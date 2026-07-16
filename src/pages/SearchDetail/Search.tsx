import React from 'react';

import FilterSidebar from './components/FilterSidebar';
import SearchResults from './components/SearchResults';
import BookingTabs from '@/components/HeroSection/BookingTabs';

// Có thể dùng CSS Module hoặc Tailwind để layout1
const Search = () => {
  return (
    <div className="search-page-container w-full flex flex-rows justify-center items-center bg-[#f3f3f3]">
      <div className='flex flex-wrap justify-between items-center bg-gray w-[70%]'>
        {/* 1. Phần Tabs nằm trên cùng */}
        <div className="search-header flex justify-center my-10">
          <BookingTabs className="bg-white flex items-center rounded-xl font-sans shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300"/>
        </div>

        {/* 2. Phần Body chia 2 cột */}
        <div className="search-body d-flex flex flex-cols-4 w-full gap-5">
          {/* Sidebar bên trái (chiếm khoảng 25-30%) */}
          <div className="sidebar-wrapper flex-1">
            <FilterSidebar />
          </div>

          {/* Content bên phải (chiếm phần còn lại) */}
          <main className="results-wrapper flex-3">
            <SearchResults />
          </main>
        </div>
      </div>

    </div>
  );
};

export default Search;