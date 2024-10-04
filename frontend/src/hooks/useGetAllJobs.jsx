import React,{useEffect} from 'react'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';

const useGetAllJobs = () => {
    
  const dispatch = useDispatch();
  const {searchQuery} = useSelector(store=>store.jobs);

  useEffect(()=>{
      const fetchAllJobs = async () => {
          try {
              const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchQuery}`,{withCredentials:true});
              if(res.data.success) {
                  dispatch(setAllJobs(res.data.jobs));
              }
          } catch (error) {
              console.log(error);
          }
      }
      fetchAllJobs();
  },[]);
};

export default useGetAllJobs;