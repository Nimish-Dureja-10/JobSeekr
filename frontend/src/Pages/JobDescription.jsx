import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React,{useEffect,useState} from 'react'
import { X } from "lucide-react";
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from '@/utils/constant';
import {useSelector,useDispatch} from "react-redux";
import { setSingleJob } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import {toast} from "sonner";
import { motion } from 'framer-motion';
import Layout from '@/SEO/Layout';

const JobDescription = () => {
    const {user} = useSelector(store=>store.auth);
    const {singleJob} = useSelector(store=>store.jobs);
    const navigate = useNavigate();
    const params = useParams();
    const jobId = params.id;
    const isInitiallyApplied = singleJob?.applications?.some(application=>application?.applicant === user?._id) || false;
    const [isApplied,setIsApplied] = useState(isInitiallyApplied);
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true});
            if(res.data.success) {
                setIsApplied(true);
                const updateSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]};
                dispatch(setSingleJob(updateSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

  useEffect(()=>{
      const fetchSingleJob = async () => {
          try {
              const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
              if(res.data.success) {
                  dispatch(setSingleJob(res.data.job));
                  setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id))
              }
          } catch (error) {
              console.log(error);
          }
      }
      fetchSingleJob();
  },[jobId,dispatch,user?._id]);

  return (
      <Layout title={`${singleJob.title} - Full Job Description, Requirements & Apply Now`} description={""} keywords={""}>
        <motion.div initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}>
            <div className='flex items-end justify-end max-w-7xl mx-auto mt-4'>
                <Button className="rounded-full" onClick={()=>navigate("/jobs")} ><X className='h-4 w-4' /></Button>
            </div>
            <div className='max-w-7xl mx-auto my-6 bg-gray-200 p-4 rounded-lg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                        <div className='flex items-center gap-4 my-2'>
                            <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">{singleJob?.position} Positions</Badge>
                            <Badge className={'text-[#f83002] font-bold rounded-full'} variant="ghost">{singleJob?.jobType}</Badge>
                            <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">{singleJob?.salary} LPA</Badge>
                        </div>
                    </div>
                    <Button disabled={isApplied} onClick={isApplied ? null : applyJobHandler}
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
                    <h1 className='font-bold my-1'>Role : <span className='font-normal text-gray-800'>{singleJob?.title}</span></h1>
                    <h1 className='font-bold my-1'>Location : <span className='font-normal text-gray-800'>{singleJob?.location}</span></h1>
                    {/* <h1 className='font-bold my-1'>Company : <span className='font-normal text-gray-800'>{singleJob?.company}</span></h1> */}
                    <h1 className='font-bold my-1'>Description : <span className='font-normal text-gray-800'>{singleJob?.description}</span></h1>
                    <h1 className='font-bold my-1'>Experience : <span className='font-normal text-gray-800'>{singleJob?.experienceLevel}</span></h1>
                    <h1 className='font-bold my-1'>Salary : <span className='font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
                    <h1 className='font-bold my-1'>Total Applicants : <span className='font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                    <h1 className='font-bold my-1'>Posted Date : <span className='font-normal text-gray-800'>{singleJob?.createdAt.slice(0,10)}</span></h1>
                </div>
            </div>
        </motion.div>
    </Layout>
  )
}

export default JobDescription