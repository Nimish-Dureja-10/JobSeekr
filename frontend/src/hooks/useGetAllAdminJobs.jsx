import React,{useEffect} from 'react'
import axios from "axios";
import {useDispatch} from "react-redux";
import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';

const useGetAllAdminJobs = () => {
    
  const dispatch = useDispatch();

  useEffect(()=>{
      const fetchAllAdminJobs = async () => {
          try {
              const res = await axios.get(`${JOB_API_END_POINT}/admin/get`,{withCredentials:true});
              if(res.data.success) {
                  dispatch(setAllAdminJobs(res.data.jobs));
              }
          } catch (error) {
              console.log(error);
          }
      }
      fetchAllAdminJobs();
  },[]);
};

export default useGetAllAdminJobs;