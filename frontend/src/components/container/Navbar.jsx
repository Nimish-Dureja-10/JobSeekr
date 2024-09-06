import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import {User2,LogOut} from "lucide-react";

const Navbar = () => {
  const user = false;

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Seekr</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-4'>
                <Button variant="outline">Login</Button>
                <Button className="bg-red-600 hover:bg-red-700">Sign Up</Button>
              </div>
            ) : (
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className='flex gap-4'>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
                <div>
                  <h4 className='font-medium'>Nimish Dureja</h4>
                  <p className='text-sm text-gray-400'>lorem ipsum doreit jte.</p>
                </div>
              </div>
              <div className='flex flex-col text-gray-600 p-2'>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <User2 />
                  <Button variant="link">View Profile</Button>
                </div>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut />
                  <Button variant="link">Logout</Button>
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