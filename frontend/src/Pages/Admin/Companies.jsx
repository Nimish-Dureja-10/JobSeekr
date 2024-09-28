import CompaniesTable from '@/components/adminComponents/CompaniesTable'
import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { setSearchCompanyByKeyword } from '@/redux/companySlice'

const Companies = () => {
    const navigate = useNavigate();
    useGetAllCompanies();
    const dispatch = useDispatch();

    const [input,setInput] = useState('');

    useEffect(()=>{
      dispatch(setSearchCompanyByKeyword(input));
    },[input]);

  return (
    <div>
        <Navbar />
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <Input type="text" className="w-fit" placeholder="Filter by name" value={input} onChange={(e)=>setInput(e.target.value)} />
                <Button onClick={()=>navigate("/admin/company/create")}>New Company</Button>
            </div>
            <CompaniesTable />
        </div>
    </div>
  )
}

export default Companies