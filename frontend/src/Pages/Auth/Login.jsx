import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant'

const Login = () => {
  const [input,setInput] = useState({
      email: "",
      password: "",
      role:"",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
      setInput({...input,[e.target.name]:e.target.value});
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });
        if(res.data.success) {
            navigate("/");
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
        <div className='flex items-center justify-center mt-16 max-w-7xl mx-auto'>
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                <h1 className='font-bold text-2xl mb-5'>Login</h1>
                <div className='my-2'>
                    <Label>Email Address</Label>
                    <Input placeholder="xyz@gmail.com" type="email" value={input.email} name="email" onChange={changeEventHandler} />
                </div>
                <div className='my-2'>
                    <Label>Password</Label>
                    <Input placeholder="Password" type="password" value={input.password} name="password" onChange={changeEventHandler} />
                </div>
                <div className='flex items-center justify-between'>
                    <RadioGroup className="flex items-center gap-4 my-2">
                        <div className="flex items-center space-x-2">
                            <Input className="cursor-pointer" type="radio" name="role" value="student" checked={input.role === "student"} onChange={changeEventHandler} />
                            <Label htmlFor="r1">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input className="cursor-pointer" type="radio" name="role" value="recruiter" checked={input.role === "recruiter"} onChange={changeEventHandler} />
                            <Label htmlFor="r2">Recruiter</Label>
                        </div>
                    </RadioGroup>
                </div>
                <Button type="submit" className="w-full mb-4">Login</Button>
                <span className='text-md text-gray-400'>Don't have an account? <Link className='text-blue-600 hover:underline' to="/signup">Sign Up</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login