import { FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { cn } from '../../lib/utils';
import { Tag } from './Tag';

interface ExampleCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: "coinbase" | "cosmos" | "lido" | "moonpay" | "objkt" | "solana";
  title: string;
  subtitle: string;
  description: string;
  type: "wallet" | "services-dapps" | "blockchain" | "nft"
}

export const ExampleCard: FC<ExampleCardProps> = ({icon, title, subtitle, description, type, className, ...props}) => {  
  return (
    <div className={cn("flex flex-col w-[384px] px-6 py-8 rounded border-[0.5px] border-grey-300 bg-grey-200 shadow-[0px_14px_15px_0px_rgba(128,128,128,0.10)]", className)} {...props}>
      <div className="flex gap-4 items-center">
        <Image src={require(`../../public/icons/${icon}.png`)} alt="icon" className="h-6 w-6" />
        <div className="heading-6">{title}</div>
      </div>
      <div className="bodyTextSemiBold text-grey-700 mt-6 !leading-[28px]">{subtitle}</div>
      <div className="bodyText text-grey-700 !leading-[28px] mb-6">{description}</div>
      <Tag type={type} className="mt-auto" />
    </div>
  )
}