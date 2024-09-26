import React from 'react'
import { Button } from '../ui/button'
import {Bookmark} from "lucide-react";
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import {Link,useNavigate} from "react-router-dom";

const Job = ({job}) => {
    const navigate = useNavigate();
    // const id = "fdfd343fer4fe33r43";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000*24*60*60));
    }

  return (
    <div className='bg-gray-200 rounded-md p-5 shadow-xl'>
        <div className='flex justify-between'>
            <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
            <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant="outline" size="icon">
                <Avatar>
                    <AvatarImage className="object-cover" src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"/>
                </Avatar>
            </Button>
            <div>
                <h1 className='text-md font-semibold'>{job?.company?.name}</h1>
                <p className='text-sm font-light'>{job?.location}</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-500'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-4 my-2'>
            <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">{job?.position} Positions</Badge>
            <Badge className={'text-[#f83002] font-bold rounded-full'} variant="ghost">{job?.jobType}</Badge>
            <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">{job?.salary} LPA</Badge>
        </div>
        <div className='flex gap-4 items-center mt-4'>
            <Button variant="outline" onClick={()=>navigate(`/job/${job._id}`)}>Details</Button>
            <Button className="bg-[#7209b7]">Save for later</Button>
        </div>
    </div>
  )
}

export default Job