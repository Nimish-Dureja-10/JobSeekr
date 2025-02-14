import CompaniesTable from '@/components/adminComponents/CompaniesTable'
import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { setSearchCompanyByKeyword } from '@/redux/companySlice'
import Layout from '@/SEO/Layout'

const Companies = () => {
    const navigate = useNavigate();
    useGetAllCompanies();
    const dispatch = useDispatch();

    const [input,setInput] = useState('');

    useEffect(()=>{
      dispatch(setSearchCompanyByKeyword(input));
    },[input]);

  return (
    <Layout title={"Admin Dashboard - Manage Companies"} description={"Admin panel for managing company profiles, job listings, and hiring activities on JobSeekr. View, edit, or add company information and track job postings. Simplify your recruitment process today!"} keywords={"admin dashboard, manage companies, company profiles, job listings, job postings, company management, recruiter tools, hiring management, manage job openings, recruitment dashboard, company administration, job seeker platform"}>
        <Navbar />
        <div className='w-[90%] lg:max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <Input type="text" className="w-fit" placeholder="Filter by name" value={input} onChange={(e)=>setInput(e.target.value)} />
                <Button onClick={()=>navigate("/admin/company/create")}>New Company</Button>
            </div>
            <CompaniesTable />
        </div>
    </Layout>
  )
}

export default Companies