import Navbar from '@/components/container/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant';
import {useDispatch,useSelector} from "react-redux";
import { setLoading, setUser } from '@/redux/authSlice';
import {Loader2} from "lucide-react";
import Layout from '@/SEO/Layout'

const Login = () => {
  const [input,setInput] = useState({
      email: "",
      password: "",
      role:"",
  });

  const {loading,user} = useSelector(store=>store.auth)
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const changeEventHandler = (e) => {
      setInput({...input,[e.target.name]:e.target.value});
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });
        if(res.data.success) {
            dispatch(setUser(res.data.user));
            navigate("/");
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    } finally {
        dispatch(setLoading(false));
    }
    };

    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])

  return (
    <Layout title={"Login - Access Your JobSeekr Account"} description={"Login to your JobSeekr account to find the latest job listings, manage applications, and update your profile. Get started with your career search today by accessing your personalized dashboard."} keywords={"login, jobseekr login, sign in, user login, access account, job seeker login, login to JobSeekr, job search account, career dashboard, manage applications, job seeker profile"}>
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
                {
                    loading ? <Button className="w-full mb-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait... </Button> :
                        <Button type="submit" className="w-full mb-4">Login</Button>
                }
                <span className='text-md text-gray-400'>Don't have an account? <Link className='text-blue-600 hover:underline' to="/signup">Sign Up</Link></span>
            </form>
        </div>
    </Layout>
  )
}

export default Login