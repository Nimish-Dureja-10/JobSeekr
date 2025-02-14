import { setSearchQuery } from '@/redux/jobSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Data Scientist",
  "AI/ML Engineer",
  "Sales Manager"
];

const CategoryCarousel = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchJobHandler = (query) => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  }

  return (
    <div>
      <Carousel className="w-[45%] lg:w-full max-w-xl mx-auto my-16">
        <CarouselContent>
          {
            category.map((cat,index)=>(
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full" key={index}>{cat}</Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel