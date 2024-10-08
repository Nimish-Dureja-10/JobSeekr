import ApplicantsTable from '@/components/adminComponents/ApplicantsTable'
import Navbar from '@/components/container/Navbar'
import React,{useEffect} from 'react'
import axios from "axios";
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { setApplicants } from '@/redux/applicationSlice';

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
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-6'>
            <h1 className='font-bold text-xl my-4'>Applicants ({applicants?.applications?.length})</h1>
            <ApplicantsTable />
        </div>
    </div>
  )
}

export default Applicants