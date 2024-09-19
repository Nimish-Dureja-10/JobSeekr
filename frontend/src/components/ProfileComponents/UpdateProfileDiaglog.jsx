import React,{useState} from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Loader2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import {toast} from "sonner";

const UpdateProfileDiaglog = ({open,setOpen}) => {

  const [loading,setLoading] = useState(false);  
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();

  const [input,setInput] = useState({
        fullname: user?.fullname || "",
        email:user?.email || "",
        phoneNumber:user?.phoneNumber || "",
        bio:user?.profile?.bio || "",
        skills:user?.profile?.skills?.map(skill=>skill) || "",
        file:user?.profile?.resume || ""
  });

  const changeEventHandler = (e) => {
      setInput({...input,[e.target.name]:e.target.value});
  }

  const changeFileHandler = (e) => {
      const file = e.target.files?.[0];
      setInput({...input,file});
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("fullname",input.fullname);
      formData.append("email",input.email);
      formData.append("phoneNumber",input.phoneNumber);
      formData.append("bio",input.bio);
      formData.append("skills",input.skills);
      if(input.file){
          formData.append("file",input.file)
      }
      try {
          const res = await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
              headers:{
                  'Content-Type' : 'multipart/form-data'
              },
              withCredentials:true
          });
          if(res.data.success) {
            dispatch(setUser(res.data.user));
            toast.success(res.data.message);
            console.log(res);
          }
      } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
      }
      setOpen(false);
  }

  return (
    <div>
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[424px]" onInteractOutside={()=>setOpen(false)}>
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label className="text-right" htmlFor="fullname">Full Name</Label>
                            <Input className="col-span-3" id="fullname" name="fullname" type="text" placeholder="John Doe" value={input.fullname} onChange={changeEventHandler} /> 
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label className="text-right" htmlFor="email">Email Id</Label>
                            <Input className="col-span-3" id="email" name="email" type="email" placeholder="JohnDoe@xyz.com" value={input.email} onChange={changeEventHandler} /> 
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label className="text-right" htmlFor="phoneNumber">Phone No.</Label>
                            <Input className="col-span-3" id="phoneNumber" name="phoneNumber" type="number" placeholder="987XXXXXX" value={input.phoneNumber} onChange={changeEventHandler} /> 
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label className="text-right" htmlFor="bio">Bio</Label>
                            <Input className="col-span-3" id="bio" name="bio" type="text" placeholder="lorem ipsum deriot pertoi." value={input.bio} onChange={changeEventHandler} /> 
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label className="text-right" htmlFor="skills">Skills</Label>
                            <Input className="col-span-3" id="skills" name="skills" type="text" placeholder="C++,Java,Python" value={input.skills} onChange={changeEventHandler} /> 
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label className="text-right" htmlFor="file">Resume</Label>
                            <Input className="col-span-3" id="file" name="file" type="file" accept="application/pdf" onChange={changeFileHandler} /> 
                        </div>
                    </div>
                    <DialogFooter>
                        {
                            loading ? <Button className="w-full mb-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait... </Button> :
                            <Button type="submit" className="w-full mb-4">Update</Button>
                        }
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default UpdateProfileDiaglog