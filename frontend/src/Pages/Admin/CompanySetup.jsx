import Navbar from '@/components/container/Navbar'
import React,{useState,useEffect} from 'react'
import {ArrowLeft} from "lucide-react";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import axios from "axios";
import { COMPANY_API_END_POINT } from '@/utils/constant';
import {useParams,useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Loader2} from "lucide-react";
import useGetCompanyById from '@/hooks/useGetCompanyById';

const CompanySetup = () => {
    
    const {singleCompany} = useSelector(store=>store.company);
    const params = useParams();
    const companyId = params.id;
    const navigate = useNavigate();
    useGetCompanyById(companyId);

    const [input,setInput] = useState({
        name:"",
        description:"",
        website:"",
        location:"",
        file:null
    });

    const [loading,setLoading] = useState(false);

    const changeEventHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value});
    };

    const fileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({...input,file});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",input.name);
        formData.append("description",input.description);
        formData.append("website",input.website);
        formData.append("location",input.location);
        if(input?.file) {
            formData.append("file",input.file);
        }try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${companyId}`,formData,{
                headers : {
                    "Content-Type" : "multipart/form-data"
                },
                withCredentials : true
            });
            if(res?.data?.success) {
                toast.success(res?.data?.message);
                navigate("/admin/companies")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        setInput({
            name: singleCompany.name || "",
            description: singleCompany.description || "",
            website: singleCompany.website || "",
            location: singleCompany.location || "",
            file: singleCompany.file || null
        });
    },[singleCompany]);

  return (
    <div>
        <Navbar/>
        <div className='w-[90%] lg:max-w-xl mx-auto my-6 border border-gray-300 p-8 rounded-lg bg-gray-100'>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center justify-between py-4 px-2'>
                    <Button variant="outline" onClick={()=>navigate("/admin/companies")} className="flex items-center gap-2 text-gray-500 font-semibold">
                        <ArrowLeft/>
                        <span>Back</span>
                    </Button>
                    <h1 className='font-bold text-xl'>Company Setup</h1>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Label>Company Name</Label>
                        <Input type="text" placeholder="Name" name="name" value={input.name} onChange={changeEventHandler} />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input type="text" placeholder="Description" name="description" value={input.description} onChange={changeEventHandler} />
                    </div>
                    <div>
                        <Label>Website Link</Label>
                        <Input type="text" placeholder="www.company.com" name="website" value={input.website} onChange={changeEventHandler} />
                    </div>
                    <div>
                        <Label>Location</Label>
                        <Input type="text" placeholder="India or Remote" name="location" value={input.location} onChange={changeEventHandler} />
                    </div>
                    <div className='mb-4'>
                        <Label>Company Logo</Label>
                        <Input type="file" accept={"image/*"} onChange={fileHandler} />
                    </div>
                </div>
                {
                    loading ? <Button className="w-full mb-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait... </Button> :
                    <Button type="submit" className="w-full mb-4">Update Company Information</Button>
                }
            </form>
        </div>
    </div>
  )
}

export default CompanySetup