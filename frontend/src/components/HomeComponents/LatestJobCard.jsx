import React from 'react'
import { Badge } from '../ui/badge'

const LatestJobCard = () => {
  return (
    <div className='p-4 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
            <h1 className='font-medium text-lg'>Company Name</h1>
            <p className='text-sm text-gray-500'>Location</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job title</h1>
            <p className='text-sm text-gray-700'>description</p>
        </div>
        <div className='flex items-center gap-4 my-2'>
            <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#f83002] font-bold rounded-full'} variant="ghost">Job Type</Badge>
            <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">Salary</Badge>
        </div>
    </div>
  )
}

export default LatestJobCard