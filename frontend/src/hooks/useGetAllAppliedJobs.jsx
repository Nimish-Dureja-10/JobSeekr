import React,{useEffect} from 'react'
import axios from "axios";
import {useDispatch} from "react-redux";
import { setAppliedJobs } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT } from '@/utils/constant';

const useGetAllAppliedJobs = () => {
    
  const dispatch = useDispatch();

  useEffect(()=>{
      const fetchAllAppliedJobs = async () => {
          try {
              const res = await axios.get(`${APPLICATION_API_END_POINT}/get`,{withCredentials:true});
              if(res.data.success) {
                  dispatch(setAppliedJobs(res.data.application));
              }
          } catch (error) {
              console.log(error);
          }
      }
      fetchAllAppliedJobs();
  },[]);
};

export default useGetAllAppliedJobs;