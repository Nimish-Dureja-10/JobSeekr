import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import AdminJobsTable from '@/components/adminComponents/AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByKeyword } from '@/redux/jobSlice';

const AdminJobs = () => {
    useGetAllAdminJobs();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input,setInput] = useState('');

    useEffect(()=>{
      dispatch(setSearchJobByKeyword(input));
    },[input]);

  return (
    <div>
        <Navbar />
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <Input type="text" className="w-fit" placeholder="Filter by name or role" value={input} onChange={(e)=>setInput(e.target.value)} />
                <Button onClick={()=>navigate("/admin/job/create")}>New Job</Button>
            </div>
            <AdminJobsTable />
        </div>
    </div>
  )
}

export default AdminJobs