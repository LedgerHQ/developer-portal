import { useState, useEffect, FC, HTMLAttributes } from 'react'
import Image from 'next/image'


interface JourneyButtonProps extends HTMLAttributes<HTMLDivElement> {
  hovered: boolean;
}

export const JourneyButton: FC<JourneyButtonProps> = ({hovered, className, ...props}) => {  
  const [color, setColor] = useState<"black" | "white">("white")
  const [textColor, setTextColor] = useState<"text-black" | "text-white">("text-white")
  const [containerStyles, setContainerStyles] = useState<string>("border border-white")

  useEffect(() => {
    if (hovered) {
      setColor("black")
      setTextColor("text-black")
      setContainerStyles("bg-white border border-white")
    } else {
      setColor("white")
      setTextColor("text-white")
      setContainerStyles("border border-white")
    }
  }, [hovered])

  return (
    <div
      className={`group w-max px-6 py-4 rounded-full flex items-center gap-4 ${containerStyles}`}
    >
      <div className="w-max flex gap-4 items-center">
        <span className={`normal-case text-p font-semibold ${textColor} transition-left duration-300 ease-linear`}>
          Get Started
        </span>
        <img
          src={`/icons/arrow-right-${color}.svg`}
          className="transition-right duration-300"
          alt="button icon"
        />
      </div>
    </div>
  )
}
