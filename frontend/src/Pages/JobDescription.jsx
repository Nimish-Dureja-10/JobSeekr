import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'
import { X } from "lucide-react";
import {useNavigate} from "react-router-dom";

const JobDescription = () => {
    const isApplied = true;
    const navigate = useNavigate();
  return (
      <>
        <div className='flex items-end justify-end max-w-7xl mx-auto mt-4'>
            <Button className="rounded-full" onClick={()=>navigate("/jobs")} ><X className='h-4 w-4' /></Button>
        </div>
        <div className='max-w-7xl mx-auto my-6 bg-gray-200 p-4 rounded-lg'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Senior Frontend Developer</h1>
                    <div className='flex items-center gap-4 my-2'>
                        <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">12 Positions</Badge>
                        <Badge className={'text-[#f83002] font-bold rounded-full'} variant="ghost">Job Type</Badge>
                        <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">Salary</Badge>
                    </div>
                </div>
                <Button disabled={isApplied} 
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' 
                    :
                    'bg-[#7209b7] cursor-pointer hover:bg-[#5f32ad]'}`}>
                {
                    isApplied ? "Already Applied" : "Apply Now"
                }
                </Button>
            </div>
            <h1 className='py-2 border-b-2 border-b-gray-300 font-medium'>Job Description</h1>
            <div className='my-4 p-2'>
                <h1 className='font-bold my-1'>Role : <span className='font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location : <span className='font-normal text-gray-800'>Gurugram, Haryana</span></h1>
                <h1 className='font-bold my-1'>Company : <span className='font-normal text-gray-800'>OneBanc PVT.LTD</span></h1>
                <h1 className='font-bold my-1'>Description : <span className='font-normal text-gray-800'>Required a frontend developer who had experience in working with frontend library/framework like ReactJs/Angular.</span></h1>
                <h1 className='font-bold my-1'>Experience : <span className='font-normal text-gray-800'>2 years</span></h1>
                <h1 className='font-bold my-1'>Salary : <span className='font-normal text-gray-800'>8-10LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants : <span className='font-normal text-gray-800'>1</span></h1>
                <h1 className='font-bold my-1'>Posted Date : <span className='font-normal text-gray-800'>16-09-2024</span></h1>
            </div>
        </div>
    </>
  )
}

export default JobDescription