import React from 'react'

interface CarouselItemProps {
  title: string;
  url: string;
}

export const CarouselItem = ({ title, url }: CarouselItemProps) => {
  return (
    <div className="flex justify-center items-center">
      <img src={url} alt={title} className="h-14 w-14"/>
    </div>
  )
}

export default CarouselItem
