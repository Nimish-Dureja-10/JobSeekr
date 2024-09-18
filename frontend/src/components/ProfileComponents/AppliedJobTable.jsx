import React from 'react'
import { Badge } from '../ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

const AppliedJobTable = () => {
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
                    [1,2,3,4].map((item,index)=>(
                        <TableRow>
                            <TableCell>14-09-2024</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right"><Badge className={'rounded-full'}>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable