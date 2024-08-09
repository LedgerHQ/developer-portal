import { useState, useEffect, FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { combination } from '../../lib/utils';
import { Tag } from './Tag';
import { JourneyButton } from './JourneyButton';
import { useRouter } from 'next/navigation';

interface JourneyCardProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  type: "clear-signing" | "device" | "connectivity" | "blockchain" | "live-app";
}

export const JourneyCard: FC<JourneyCardProps> = ({title, description, type, className, ...props}) => {  
  const router = useRouter();
  const [isHover,setIsHover]=useState(false);

  function MouseOver() {
    setIsHover(true);
  }
  function MouseOut() {
    setIsHover(false);
  }

  const handleClick = () => {
    switch (type) {
      case "clear-signing":
        router.push("/docs/clear-signing")
        break;
      case "device":
        router.push("/docs/device-app")
        break;
      case "connectivity":
        router.push("/docs/connectivity")
        break;
      case "blockchain":
        router.push("/docs/blockchain")
        break;
      case "live-app":
        router.push("/docs/live-app")
        break;
      default:
        break;
    }
  }

  return (
    <button type="button" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={handleClick} className={combination("group flex flex-col rounded border-[0.5px] border-grey-700 hover:border-white bg-grey-800/40 backdrop-blur-sm text-left duration-300 ease-linear", className)} {...props}>
      <div className="relative w-full h-[160px] sm:h-[160px] md:h-[110px] lg:h-[150px] xl:h-[160px] overflow-hidden duration-300 ease-linear">
        <Image 
          src={require(`../../public/homepage/bg-${type}.jpg`)} 
          alt="type"
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:scale-110 duration-300 ease-linear"
        />  
      </div>
      <div className="flex flex-col px-8 pt-6 mb-6">
        <Tag type={type} />
        <div className="text-heading-5 font-semibold tracking-tight-2 mt-4">{title}</div>
        <div className="text-heading-7 font-semibold mt-2">{description}</div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-end px-8 pb-6 md:mt-auto md:items-end">
        <JourneyButton hovered={isHover} className="ml-10" />
      </div>
    </button>
  )
}