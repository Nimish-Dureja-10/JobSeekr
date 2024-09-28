import React,{useState,useEffect} from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
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
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const CompaniesTable = () => {
  const { allCompanies,searchCompanyByKeyword } = useSelector((store) => store.company);
  const [filterCompanies,setFilterCompanies] = useState(allCompanies);
  const navigate = useNavigate();

  useEffect(()=>{
    const filteredCompany = allCompanies.length >=0 && allCompanies.filter((company)=>{
        if(!searchCompanyByKeyword) {
            return true;
        }
        return company?.name?.toLowerCase().includes(searchCompanyByKeyword.toLowerCase());
    });
    setFilterCompanies(filteredCompany);
  },[allCompanies,searchCompanyByKeyword]);

  return (
    <div className="mt-6">
      <Table>
        <TableCaption>List of your registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allCompanies?.length <= 0 ? (
            <span>No company register by you is found.</span>
          ) : (
            <>
              {filterCompanies?.map((company) => (
                <tr key={company._id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage
                        className="object-cover"
                        src={company.logo}
                      />
                    </Avatar>
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div className="flex items-center gap-2" onClick={()=>navigate(`/admin/company/${company._id}`)}>
                          <Edit2 className="h-4 w-4" />
                          <span>Edit</span>
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

export default CompaniesTable;
