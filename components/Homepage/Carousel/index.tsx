import React from 'react'
import CarouselItem from './CarouselItem';
import { CarouselData } from "./CarouselData"

export const Carousel= () => {
  return (
    <div className="relative w-full h-14 overflow-hidden">
      <div className="absolute w-[2160px] flex left-0 items-center gap-16 animate-carousel-part1">
        {CarouselData.map((item) => (
            <CarouselItem key={item.title} title={item.title} url={item.url} />
        ))}
      </div>
      <div className="absolute w-[2160px] flex left-[2160px] items-center gap-16 animate-carousel-part2">
        {CarouselData.map((item) => (
            <CarouselItem key={item.title} title={item.title} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default Carousel
