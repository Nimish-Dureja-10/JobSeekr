import React from 'react'
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
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-16">
        <CarouselContent>
          {
            category.map((cat,index)=>(
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Button variant="outline" className="rounded-full" key={index}>{cat}</Button>
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