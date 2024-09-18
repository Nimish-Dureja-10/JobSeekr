import Navbar from '@/components/container/Navbar'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React from 'react'
import {Pen,Mail,Contact} from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import AppliedJobTable from '@/components/ProfileComponents/AppliedJobTable';

const skills = ["Html","CSS","Javascript","ReactJs","NodeJs","MongoDB","AWS"];
// const skills = [];

const Profile = () => {

  const isResume = true;
    
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <div>
                        <h1 className='font-medium text-xl'>Full Name</h1>
                        <p className='text-gray-500'>lorem ipsum doreit predt.</p>
                    </div>
                </div>
                <Button variant="outline" className="text-right"><Pen/></Button>
            </div>
            <div className='flex flex-col gap-4 my-5'>
                <div className='flex items-center gap-3'>
                    <Mail />
                    <span>
                        Email Address
                    </span>
                </div>
                <div className='flex items-center gap-3'>
                    <Contact />
                    <span>
                        9876543210
                    </span>
                </div>
            </div>
            <div className='flex gap-4'>
                <h1 className='text-lg font-semibold'>Skills - </h1>
                <div className='flex items-center gap-2'>
                    {
                        skills.length !== 0 ? skills.map((item,index)=>(
                            <Badge className={"rounded-full"} key={index}>{item}</Badge>
                        ))
                        :  <span>NA</span>
                    }
                </div>
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5 my-4'>
                <div className='flex gap-2 items-center'>
                    <Label className="text-md font-semibold">Resume -</Label>
                    {
                        isResume ? <a href='https://google.com' target={'_blank'} className="text-blue-600 hover:underline bg-gray-200 px-8 rounded-full" >Link</a> 
                        : <span>NA</span>
                    }
                </div>
            </div>
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='text-xl text-center my-2 font-semibold'>Applied Jobs</h1>
            {/* Application Table */}
            <AppliedJobTable />
        </div>
    </div>
  )
}

export default Profile