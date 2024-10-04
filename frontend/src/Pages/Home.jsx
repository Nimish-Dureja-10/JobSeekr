import Navbar from '@/components/container/Navbar'
import CategoryCarousel from '@/components/HomeComponents/CategoryCarousel'
import Footer from '@/components/HomeComponents/Footer'
import HeroSection from '@/components/HomeComponents/HeroSection'
import LatestJob from '@/components/HomeComponents/LatestJob'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import React,{useEffect} from 'react'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  },[])
  

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