import React from 'react'
import { Button } from '../ui/button';
import LatestJobCard from './LatestJobCard'

const randomJobs = [1,2,3,4,5,6,7,8];

const LatestJob = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-semibold'><span className='text-[#6a32c2]'>Latest & Top</span> Job Openings</h1>
      <div className='grid grid-cols-3 gap-4 my-10'>
        {
          randomJobs.slice(0,6).map((item,index)=>(
            <LatestJobCard key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestJob