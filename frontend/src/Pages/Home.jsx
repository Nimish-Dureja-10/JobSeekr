import Navbar from '@/components/container/Navbar'
import CategoryCarousel from '@/components/HomeComponents/CategoryCarousel'
import Footer from '@/components/HomeComponents/Footer'
import HeroSection from '@/components/HomeComponents/HeroSection'
import LatestJob from '@/components/HomeComponents/LatestJob'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJob />
        <Footer />
    </div>
  )
}

export default Home