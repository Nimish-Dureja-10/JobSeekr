import React from 'react'
import { Button } from '../ui/button'
import {Bookmark} from "lucide-react";
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

const Job = () => {
  return (
    <div className='bg-gray-200 rounded-md p-5 shadow-xl'>
        <div className='flex justify-between'>
            <p className='text-sm text-gray-500'>2 days ago</p>
            <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant="outline" size="icon">
                <Avatar>
                    <AvatarImage className="object-cover" src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"/>
                </Avatar>
            </Button>
            <div>
                <h1 className='text-md font-semibold'>Company Name</h1>
                <p className='text-sm font-light'>Location</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Title</h1>
            <p className='text-sm text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='flex items-center gap-4 my-2'>
            <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#f83002] font-bold rounded-full'} variant="ghost">Job Type</Badge>
            <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">Salary</Badge>
        </div>
        <div className='flex gap-4 items-center mt-4'>
            <Button variant="outline">Details</Button>
            <Button className="bg-[#7209b7]">Save for later</Button>
        </div>
    </div>
  )
}

export default Job