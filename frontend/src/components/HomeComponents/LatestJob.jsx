import React from 'react'
import LatestJobCard from './LatestJobCard'
import {useSelector} from "react-redux";
import { motion } from 'framer-motion';

const LatestJob = () => {
  
  const {allJobs} = useSelector(store=>store.jobs);

  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-center lg:text-start text-4xl font-semibold'><span className='text-[#6a32c2]'>Latest & Top</span> Job Openings</h1>
      <div className='px-6 grid lg:grid-cols-3 gap-4 my-10'>
        {
          allJobs.length <=0 ? <span>No Job Found</span>
          :
           allJobs?.slice(0,6)?.map((job)=>(
            <motion.div initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }} >
              <LatestJobCard key={job._id} job={job} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default LatestJob