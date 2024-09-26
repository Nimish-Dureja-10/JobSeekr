import React,{useEffect} from 'react'
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';

const useGetSingleJob = (jobId) => {
  
  const {setSingleJob} = useSelector(store=>store.jobs);  
  const dispatch = useDispatch();


  useEffect(()=>{
      const fetchSingleJob = async () => {
          try {
              const res = await axios.get(`${JOB_API_END_POINT}/get/:${jobId}`,{withCredentials:true});
              if(res.data.success) {
                  dispatch(setSingleJob(res.data.jobs));
              }
          } catch (error) {
              console.log(error);
          }
      }
      fetchSingleJob();
  },[]);
};

export default useGetSingleJob;