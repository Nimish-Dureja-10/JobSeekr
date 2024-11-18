import ApplicantsTable from '@/components/adminComponents/ApplicantsTable'
import Navbar from '@/components/container/Navbar'
import React,{useEffect} from 'react'
import axios from "axios";
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { setApplicants } from '@/redux/applicationSlice';
import Layout from '@/SEO/Layout';

const Applicants = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const {applicants} = useSelector(store=>store.application);

  useEffect(()=>{
    const fetchAllApplicants = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
            if(res?.data?.success){
                dispatch(setApplicants(res?.data?.job));
                console.log(res.data.job);
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchAllApplicants();
  },[]);  

  return (
    <Layout title={"View Applicants - Admin Dashboard"} description={"Admin panel for viewing and managing job applicants on JobSeekr. Track applicant status, review resumes, and manage hiring processes for your job listings. Streamline recruitment and find the right talent quickly."} keywords={"view applicants, job applicants, applicant management, recruitment dashboard, job applications, track applicants, applicant status, manage applicants, hiring process, review resumes, candidate management, job seeker platform, recruitment tools"}>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-6'>
            <h1 className='font-bold text-xl my-4'>Applicants ({applicants?.applications?.length})</h1>
            <ApplicantsTable />
        </div>
    </Layout>
  )
}

export default Applicants