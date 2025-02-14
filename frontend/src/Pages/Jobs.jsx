import Navbar from '@/components/container/Navbar'
import FilterCard from '@/components/JobComponents/FilterCard'
import Job from '@/components/JobComponents/Job'
import React from 'react'
import { useSelector} from "react-redux";
import { motion } from 'framer-motion';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import Layout from '@/SEO/Layout';
import Footer from '@/components/HomeComponents/Footer';

const Jobs = () => {
  useGetAllJobs();
  const {allJobs} = useSelector(store=>store.jobs);

  return (
    <Layout title={"Explore Jobs - Find Your Ideal Career"} description={"Browse a wide range of job opportunities at JobSeekr. Find your ideal career match with personalized job listings and easy application processes. Start your job search today!"} keywords={"jobs, job search, job openings, career opportunities, find jobs, job listings, full-time jobs, part-time jobs, remote jobs, freelance jobs, job opportunities, hiring, apply for jobs, job vacancies, local jobs, professional jobs, job seeker, career search"} >
        <Navbar />
        <div className='max-w-7xl mx-auto mt-5'>
          <div className='flex lg:flex-row flex-col gap-5'>
            <div className='w-[90%] mx-auto lg:w-[20%]'>
              <FilterCard />
            </div>
            {
              allJobs.length <= 0 ? <span>Job not found</span> : 
              (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid px-6 lg:grid-cols-3 gap-4'>
                  {
                    allJobs.map((job)=>(
                      <motion.div initial={{ opacity: 0, y: -100 }} 
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.3 }} key={job._id}>
                        <Job job={job} />
                      </motion.div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>
        </div>
        {/* <Footer /> */}
    </Layout>
  )
}

export default Jobs