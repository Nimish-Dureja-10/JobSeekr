import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import {User2,LogOut} from "lucide-react";
import {Link,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import {toast} from 'sonner';
import axios from "axios";
import { USER_API_END_POINT } from '@/utils/constant.js';
import { setUser } from '@/redux/authSlice';

const Navbar = () => {
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      dispatch(setUser(null));
      navigate("/");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Seekr</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/jobs">
              <li>Jobs</li>
            </Link>
            <Link to="/browse">
              <li>Browse</li>
            </Link>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-4'>
                  <Link to="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-red-600 hover:bg-red-700">Sign Up</Button>
                  </Link>
              </div>
            ) : (
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className='flex gap-4'>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                </Avatar>
                <div>
                  <h4 className='font-medium'>Nimish Dureja</h4>
                  <p className='text-sm text-gray-400'>{user?.profile?.bio}</p>
                </div>
              </div>
              <div className='flex flex-col text-gray-600 p-2'>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <User2 />
                  <Button variant="link">
                    <Link to="/profile">
                      View Profile
                    </Link></Button>
                </div>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut />
                  <Button variant="link" onClick={logoutHandler}>Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar