import Navbar from '@/components/container/Navbar'
import Job from '@/components/JobComponents/Job';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { setSearchQuery } from '@/redux/jobSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Browse = () => {  

  useGetAllJobs();  
  const {allJobs} = useSelector(store=>store.jobs);
  const dispatch = useDispatch();

  useEffect(()=>{
    return () => {
        dispatch(setSearchQuery(""));
    }
  },[])

  return (
    <div>
        <Navbar />
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-center text-xl font-semibold'>Search Results <span>({allJobs.length})</span></h1>
            <hr  className='mt-4'/>
            <div className='grid grid-cols-3 gap-6 mt-4'>
                {
                    allJobs.map((job)=>(
                        <motion.div initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.3 }}
                            key={job?._id}>
                                <Job job={job} />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Browse