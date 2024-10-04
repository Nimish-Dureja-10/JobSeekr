import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from '../ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

const AppliedJobTable = () => {

  const {appliedJobs} = useSelector(store=>store.jobs);  

  return (
    <div>
        <Table>
            <TableCaption>
                List of jobs you applied
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    appliedJobs.length >= 0 ? appliedJobs.map((item)=>(
                        <TableRow key={item?._id}>
                            <TableCell>{item?.job?.createdAt.split("T")[0]}</TableCell>
                            <TableCell>{item?.job?.title}</TableCell>
                            <TableCell>{item?.job?.company?.name}</TableCell>
                            <TableCell className="text-right"><Badge className={`rounded-full ${item?.status === "rejected" ?  "bg-red-500" : item.status === "accepted" ? "bg-green-600" : "bg-gray-600"}`}>{item?.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    )) : (
                        <span>You haven' t applied for a job yet.</span>
                    )
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable