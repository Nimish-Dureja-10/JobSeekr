import Navbar from '@/components/container/Navbar'
import FilterCard from '@/components/JobComponents/FilterCard'
import Job from '@/components/JobComponents/Job'
import React from 'react'
import { useSelector} from "react-redux";
import { motion } from 'framer-motion';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Jobs = () => {
  useGetAllJobs();
  const {allJobs} = useSelector(store=>store.jobs);

  return (
    <div>
        <Navbar />
        <div className='max-w-7xl mx-auto mt-5'>
          <div className='flex gap-5'>
            <div className='w-[20%]'>
              <FilterCard />
            </div>
            {
              allJobs.length <= 0 ? <span>Job not found</span> : 
              (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                  {
                    allJobs.map((job)=>(
                      <motion.div initial={{ opacity: 0, y: -100 }} 
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.3 }} key={job._id}>
                        <Job job={job} />
                      </motion.div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Jobs