import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "sonner";
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { setSingleCompany } from '@/redux/companySlice'
import {useDispatch} from "react-redux";

const CreateCompany = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyName,setCompanyName] = useState("");

    const createNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    "Content-Type" : "application/json"
                },
                withCredentials:true
            });
            if(res?.data?.success) {
                dispatch(setSingleCompany(res?.data?.company))
                toast.success(res?.data?.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/company/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
            <div className='my-10'>
                <h1 className='font-bold text-2xl' >Your Company Name?</h1>
                <p className='text-gray-500'>What would you like to name your comany? You can change this later.</p>
            </div>
            <Label>Company Name</Label>
            <Input type="text" className="my-2" placeholder="Google, Microsoft, Amazon" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} />
            <div className='flex items-center gap-2 my-6'>
                <Button variant="outline" onClick={()=>navigate('/admin/companies')}>Cancel</Button>
                <Button onClick={createNewCompany}>Continue</Button>
            </div>
        </div>
    </div>
  )
}

export default CreateCompany;