import React from 'react'
import LatestJobCard from './LatestJobCard'
import {useSelector} from "react-redux";

// const randomJobs = [1,2,3,4,5,6,7,8];

const LatestJob = () => {

  const {allJobs} = useSelector(store=>store.jobs);

  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-semibold'><span className='text-[#6a32c2]'>Latest & Top</span> Job Openings</h1>
      <div className='grid grid-cols-3 gap-4 my-10'>
        {
          allJobs.length <=0 ? <span>No Job Found</span>
          :
           allJobs?.slice(0,6)?.map((job)=>(
            <LatestJobCard key={job._id} job={job} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestJob