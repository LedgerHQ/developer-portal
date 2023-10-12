import { FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { cn } from '../../lib/utils';
import { CryptoType } from "./CryptoData"

interface CryptoIconProps extends HTMLAttributes<HTMLDivElement> {
  crypto: CryptoType
}

export const CryptoIcon: FC<CryptoIconProps> = ({crypto, className, ...props}) => {  

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="group flex w-8 h-8 items-center justify-center rounded bg-grey-700">
        <Image src={require(`../../public/icons/${crypto.icon}.png`)} alt="icon" className="h-5 w-5" />
        <div className="absolute py-1 px-2 rounded top-[calc(100%+16px)] -left-[calc(50%-4px)] bg-grey-800 z-10 hidden group-hover:block">
          <span className="text-p-caption font-semibold">
            {crypto.name}
          </span>
        </div>
        <div className="absolute h-4 w-4 rotate-45 top-[calc(100%+10px)] left-[calc(50%-8px)] bg-grey-800 z-0 hidden group-hover:block" />
      </div>
    </div>
  )
}
