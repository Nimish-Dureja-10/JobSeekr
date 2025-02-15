import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { User2, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant.js';
import { setUser } from '@/redux/authSlice';

const MobileNavbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  // Close the MobileNavbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false); // Close the navbar on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      dispatch(setUser(null));
      navigate('/');
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#F83002]">Seekr</span>
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden block text-2xl text-gray-600"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-gray-200 shadow-lg">
          <ul className="flex flex-col p-4">
            {user && user?.role === 'recruiter' ? (
              <>
                <Link to="/admin/companies">
                  <li className="p-2">Companies</li>
                </Link>
                <Link to="/admin/jobs">
                  <li className="p-2">Jobs</li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/">
                  <li className="p-2">Home</li>
                </Link>
                <Link to="/jobs">
                  <li className="p-2">Jobs</li>
                </Link>
                <Link to="/browse">
                  <li className="p-2">Browse</li>
                </Link>
              </>
            )}
            {!user ? (
              <div className="flex flex-col gap-4 mt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Sign Up</Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="flex gap-4">
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user?.fullname}</h4>
                        <p className="text-sm text-gray-400">{user?.profile?.bio}</p>
                      </div>
                    </div>
                    <div className="flex flex-col text-gray-600 p-2">
                      {user && user?.role === 'student' && (
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                          <User2 />
                          <Button variant="link">
                            <Link to="/profile">View Profile</Link>
                          </Button>
                        </div>
                      )}
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button variant="link" onClick={logoutHandler}>
                          Logout
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      dispatch(setUser(null));
      navigate('/');
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white">
      <div className="hidden lg:flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#F83002]">Seekr</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user?.role === 'recruiter' ? (
              <>
                <Link to="/admin/companies">
                  <li>Companies</li>
                </Link>
                <Link to="/admin/jobs">
                  <li>Jobs</li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/jobs">
                  <li>Jobs</li>
                </Link>
                <Link to="/browse">
                  <li>Browse</li>
                </Link>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-4">
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
                <div className="flex gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-gray-400">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 p-2">
                  {user && user?.role === 'student' && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link" onClick={logoutHandler}>
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

const MainNavbar = () => (
  <>
    <Navbar />
    <MobileNavbar />
  </>
);

export default MainNavbar;