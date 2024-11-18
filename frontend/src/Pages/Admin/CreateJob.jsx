import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React,{useState} from 'react'
import {useSelector} from "react-redux";
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import {toast} from "sonner";
import {useNavigate} from 'react-router-dom';
import {Loader2} from "lucide-react";
import Layout from '@/SEO/Layout'

const CreateJob = () => {

    const [input,setInput] = useState({
        title : "",
        description : "",
        requirements: "",
        salary : "",
        location : "",
        jobType : "",
        experienceLevel : "",
        position : 1,
        companyId  : "",
    });

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const {allCompanies} = useSelector(store=>store.company);

    const changeEventHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value});
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = allCompanies.find((company)=>company.name.toLowerCase() === value);
        setInput({...input,companyId:selectedCompany._id});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/create/new`,input,{
                headers : {
                    "Content-Type" : "application/json"
                },
                withCredentials:true
            });
            if(res?.data?.success) {
                toast?.success(res?.data?.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
            console.log(error);
        }finally {
            setLoading(false);
        }
    }

  return (
    <Layout title={"Create Job - Admin Dashboard"} description={"Admin panel for creating new job postings on JobSeekr. Add job details, set requirements, and publish job listings to attract top talent. Manage your recruitment process efficiently with our easy-to-use platform."} keywords={"create job, add job posting, job listings, job management, recruit jobs, job creation, hiring process, job requirements, job description, admin dashboard, job posting platform, publish job openings, job vacancies, job seeker platform"}>
        <Navbar />
        <div className='flex items-center justify-center my-5 w-screen'>
            <form onSubmit={handleSubmit} className='p-8 max-w-4xl border border-gray-200 shadow-lg my-5 rounded-md'>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <Label>Title</Label>
                        <Input type="text" name="title" value={input.title} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input type="text" name="description" value={input.description} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    <div>
                        <Label>Requirements</Label>
                        <Input type="text" name="requirements" value={input.requirements} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    <div>
                        <Label>Salary</Label>
                        <Input type="text" name="salary" value={input.salary} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    <div>
                        <Label>Location</Label>
                        <Input type="text" name="location" value={input.location} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    <div>
                        <Label>Job Type</Label>
                        <Input type="text" name="jobType" value={input.jobType} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    <div>
                        <Label>Experience</Label>
                        <Input type="text" name="experienceLevel" value={input.experienceLevel} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    <div>
                        <Label>Position</Label>
                        <Input type="number" name="position" value={input.position} onChange={changeEventHandler} className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
                    </div>
                    {
                        allCompanies.length >= 0 && (
                            <Select onValueChange={selectChangeHandler}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a company" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            allCompanies.map((company)=>(
                                                <SelectItem key={company?._id} value={company?.name?.toLowerCase()}>
                                                    {company?.name}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                            </SelectContent>
                            </Select>
                        )
                    }
                </div>
                {
                    loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait... </Button> :
                        <Button type="submit" className="w-full my-4">Post New Job</Button>
                }
                {
                    allCompanies?.length === 0  && <p className='text-xs text-red-600 font-bold text-center my-3'>*Please register a company before creating a job.</p>
                }
            </form>
        </div>
    </Layout>
  )
}

export default CreateJob