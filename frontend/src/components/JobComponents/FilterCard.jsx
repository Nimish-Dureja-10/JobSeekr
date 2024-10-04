import { setSearchQuery } from '@/redux/jobSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

const filterData = [
    {
        filterType : "Location",
        array : ["Delhi NCR","Gurugram","Noida","Mumbai","Pune","Banglore","Hyderabad"]
    },
    {
        filterType : "Industry",
        array : ["Frontend Developer","Backend Developer","Fullstack Developer","Data Scientist","AI/ML Engineer","Production Manager"]
    },
    {
        filterType : "Salary",
        array : ["0-3LPA","4LPA-10LPA","11-15LPA","15LPA+"]
    }
]

const FilterCard = () => {
    
  return (
    <div className='w-full bg-gray-100 p-3 rounded-md'>
        <h1 className='text-lg font-bold'>Filter Jobs</h1>
        <hr className='mt-3' />
        <RadioGroup>
            {
                filterData.map((data,index)=>(
                    <div>
                        <h1 className='font-bold text-md'>{data.filterType}</h1>
                        {
                            data.array.map((item,idx)=>{
                                const itemId = `id${index} - ${idx}`;
                                return (
                                <div className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId} className="font-semibold">{item}</Label>
                                </div>
                            )})
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard