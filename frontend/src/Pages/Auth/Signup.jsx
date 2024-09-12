import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from "sonner";

const Signup = () => {

    const [input,setInput] = useState({
        fullname:"",
        email:"",
        password:"",
        phoneNumber:"",
        role:"",
        file:""
    });

    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value});
    };

    const changeFileHandler = (e) => {
        setInput({...input,file:e.target.files?.[0]});
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname",input.fullname);
        formData.append("email",input.email);
        formData.append("password",input.password);
        formData.append("phoneNumber",input.phoneNumber);
        formData.append("role",input.role);
        if(input.file) {
            formData.append("file",input.file);
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                },
                withCredentials:true
            });
            if(res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

  return (
    <div>
        <Navbar />
        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                <h1 className='font-bold text-2xl mb-5'>Register Here</h1>
                <div className='my-2'>
                    <Label>Full Name</Label>
                    <Input placeholder="Fullname" type="text" value={input.fullname} name="fullname" onChange={changeEventHandler} />
                </div>
                <div className='my-2'>
                    <Label>Email Address</Label>
                    <Input placeholder="xyz@gmail.com" type="email" value={input.email} name="email" onChange={changeEventHandler} />
                </div>
                <div className='my-2'>
                    <Label>Password</Label>
                    <Input placeholder="Password" type="password" value={input.password} name="password" onChange={changeEventHandler} />
                </div>
                <div className='my-2'>
                    <Label>Phone Number</Label>
                    <Input placeholder="Phone Number" type="number" value={input.phoneNumber} name="phoneNumber" onChange={changeEventHandler} />
                </div>
                <div className='flex items-center justify-between'>
                    <RadioGroup className="flex items-center gap-4 my-5">
                        <div className="flex items-center space-x-2">
                            <Input className="cursor-pointer" type="radio" name="role" value="student" checked={input.role === 'student'} onChange={changeEventHandler} />
                            <Label htmlFor="r1">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input className="cursor-pointer" type="radio" name="role" value="recruiter" checked={input.role === 'recruiter'} onChange={changeEventHandler} />
                            <Label htmlFor="r2">Recruiter</Label>
                        </div>
                    </RadioGroup>
                    <div className='flex items-center gap-2'>
                        <Label>Profile</Label>
                        <Input type="file" accept="image/*" className="cursor-pointer" onChange={changeFileHandler} />
                    </div>
                </div>
                <Button type="submit" className="w-full my-4">Sign Up</Button>
                <span className='text-md text-gray-400'>Already have an account? <Link className='text-blue-600 hover:underline' to="/login">Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Signup