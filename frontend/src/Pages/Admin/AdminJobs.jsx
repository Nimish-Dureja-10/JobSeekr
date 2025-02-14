import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import AdminJobsTable from '@/components/adminComponents/AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByKeyword } from '@/redux/jobSlice';
import Layout from '@/SEO/Layout';

const AdminJobs = () => {
    useGetAllAdminJobs();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input,setInput] = useState('');

    useEffect(()=>{
      dispatch(setSearchJobByKeyword(input));
    },[input]);

  return (
    <Layout title={"Admin Dashboard - Manage Jobs"} description={"dmin panel for managing job listings, monitoring job applications, and overseeing recruitment activities on JobSeekr. Add, edit, or remove job posts, track applicants, and streamline your hiring process."} keywords={"admin dashboard, manage jobs, job listings, job postings, recruit jobs, hiring process, monitor applications, manage job openings, edit job listings, track job applications, job posting management, recruitment tools, job administration"}>
        <Navbar />
        <div className='w-[90%] lg:max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <Input type="text" className="w-fit" placeholder="Filter by name or role" value={input} onChange={(e)=>setInput(e.target.value)} />
                <Button onClick={()=>navigate("/admin/job/create")}>New Job</Button>
            </div>
            <AdminJobsTable />
        </div>
    </Layout>
  )
}

export default AdminJobs