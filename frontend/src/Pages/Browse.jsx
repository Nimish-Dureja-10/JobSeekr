import Navbar from '@/components/container/Navbar'
import Job from '@/components/JobComponents/Job';
import React from 'react'

const randomJobs = [1,2,3,4,5,6,7,8,9,10];

const Browse = () => {
  return (
    <div>
        <Navbar />
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-center text-xl font-semibold'>Search Results <span>({randomJobs.length})</span></h1>
            <hr  className='mt-4'/>
            <div className='grid grid-cols-3 gap-6 mt-4'>
                {
                    randomJobs.map((item,index)=>(
                        <div>
                            <Job />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Browse