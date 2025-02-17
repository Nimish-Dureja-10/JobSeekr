import Navbar from '@/components/container/Navbar'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React,{useState} from 'react'
import {Pen,Mail,Contact} from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import AppliedJobTable from '@/components/ProfileComponents/AppliedJobTable';
import UpdateProfileDiaglog from '@/components/ProfileComponents/UpdateProfileDiaglog';
import { useSelector } from "react-redux";
import useGetAllAppliedJobs from '@/hooks/useGetAllAppliedJobs';
import Layout from '@/SEO/Layout';

// const skills = ["Html","CSS","Javascript","ReactJs","NodeJs","MongoDB","AWS"];
const isResume = true;

const Profile = () => {

  useGetAllAppliedJobs();  

  const [open,setOpen] = useState(false);  
  const {user} = useSelector(store=>store.auth);
    
  return (
    <Layout title={"My Profile - Manage Your Job Applications"} description={"View and manage your job preferences, applications, and career profile on JobSeekr. Keep your resume updated, track job applications, and get personalized job recommendations tailored to your skills and interests."} keywords={"job profile, career profile, job applications, job preferences, update resume, job seeker profile, application status, job tracker, personalized job recommendations, manage profile, job search profile, update job settings"}>
        <Navbar/>
        <div className='w-[90%] lg:max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-4 lg:p-8'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar className="h-16 w-16 lg:h-24 lg:w-24">
                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                    <div className='flex flex-col'>
                        <h1 className='font-medium text-xl'>{user.fullname}</h1>
                        <p className='text-gray-500'>{user?.profile?.bio}</p>
                    </div>
                </div>
                <Button onClick={()=>setOpen(true)} variant="outline" className="text-right"><Pen/></Button>
            </div>
            <div className='flex flex-col gap-4 my-5'>
                <div className='flex items-center gap-3'>
                    <Mail />
                    <span>
                        {user.email}
                    </span>
                </div>
                <div className='flex items-center gap-3'>
                    <Contact />
                    <span>
                        {user.phoneNumber}
                    </span>
                </div>
            </div>
            <div className='flex gap-4'>
                <h1 className='text-lg font-semibold'>Skills - </h1>
                <div className='flex items-center gap-2'>
                    {
                        user?.profile?.skills?.length !== 0 ? user?.profile?.skills?.map((item,index)=>(
                            <Badge className={"rounded-full"} key={index}>{item}</Badge>
                        ))
                        :  <span>NA</span>
                    }
                </div>
            </div>
            <div className='grid w-full max-w-xl items-center gap-1.5 my-4'>
                <div className='flex flex-col lg:flex-row gap-2 items-start lg:items-center'>
                    <Label className="text-md font-semibold">Resume -</Label>
                    {
                        isResume ? <a href={user?.profile?.resume} target={'blank'} className="text-blue-600 hover:underline bg-gray-200 py-2 px-2 lg:py-0 lg:px-8 rounded-full" >{user?.profile?.resumeOriginalName}</a> 
                        : <span className='font-light text-gray-400'>NA</span>
                    }
                </div>
            </div>
        </div>
        <div className='w-[90%] lg:max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='text-xl text-center my-2 font-semibold'>Applied Jobs</h1>
            {/* Application Table */}
            <AppliedJobTable />
        </div>
        <UpdateProfileDiaglog open={open} setOpen={setOpen} />
    </Layout>
  )
}

export default Profile