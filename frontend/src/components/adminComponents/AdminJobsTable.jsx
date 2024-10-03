import React,{useState,useEffect} from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit2, MoreHorizontal, Eye } from "lucide-react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByKeyword } = useSelector((store)=>store.jobs);
  const navigate = useNavigate();
  const [filterJobs,setFilterJobs] = useState(allAdminJobs);

  const updateFilterJobs = () => {
    const filteredJobs = allAdminJobs?.filter((job)=>{
      if(!searchJobByKeyword) { 
        return true;
      }
      return job?.title?.toLowerCase().includes(searchJobByKeyword.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByKeyword.toLowerCase());
    });
    setFilterJobs(filteredJobs);
  }

  useEffect(()=>{
    updateFilterJobs();
  },[allAdminJobs,searchJobByKeyword]);

  return (
    <div className="mt-6">
      <Table>
        <TableCaption>List of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminJobs?.length <= 0 ? (
            <span>No job has been posted by you yet.</span>
          ) : (
            <>
              {filterJobs?.map((job) => (
                <tr key={job?._id}>
                  <TableCell>{job?.company?.name}</TableCell>
                  <TableCell>{job?.title}</TableCell>
                  <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div className="mb-2 flex items-center gap-2" onClick={()=>navigate(`/admin/job/${job._id}`)}>
                          <Edit2 className="h-4 w-4" />
                          <span>Edit</span>
                        </div>
                        <div className="flex items-center gap-2 w-fit" onClick={()=>navigate(`/admin/job/${job._id}/applicants`)}>
                          <Eye className="h-4 w-4" />
                          <span>Applicants</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </tr>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
