
import Achievement from '@/components/Achievement'
import Articles from '@/components/Articles'
import HeroSection from '@/components/HeroSection'
import PopularRoutes from '@/components/PopularRoutes'
import Promotions from '@/components/Promotions'
import React from 'react'

const Home = () => {
  return (
    <div className='flex-col'>
      <HeroSection />
      <PopularRoutes />
      <Promotions />
      <Achievement />
      <Articles />
    </div>
  )
}

export default Home