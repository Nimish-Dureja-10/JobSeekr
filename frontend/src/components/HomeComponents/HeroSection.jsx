import React, { useState } from 'react'
import {Search} from 'lucide-react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query,setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
      dispatch(setSearchQuery(query));
      navigate("/browse");
  }

  return (
    <div className='text-center'>
      <div className='flex flex-col my-10 gap-6'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium'>No. 1 Job Hunt Website</span>
        <h1 className='text-5xl font-bold'>Search, Apply <br /> Get Your <span className='text-[#6a32c2]'>Dream Job </span></h1>
        <p className='font-light px-8'>Your hunt for a dream job ends here, just search, apply and get hired. Your dream job is waiting for you.</p>
        <div className='flex lg:w-[40%] shodow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
          <input type={'text'} onChange={(e)=>setQuery(e.target.value)} value={query} className="border-none outline-none w-full px-4 text-gray-600f" placeholder='Find your dream job' />
          <Button onClick={()=>searchJobHandler(query)} className="rounded-r-full bg-[#6a32c2]">
            <Search className='w-5 h-5'/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection