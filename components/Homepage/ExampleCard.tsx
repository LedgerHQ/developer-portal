import { FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { combination } from '../../lib/utils';
import { Tag } from './Tag';
import { useRouter } from 'next/navigation';

interface ExampleCardProps extends HTMLAttributes<HTMLButtonElement> {
  icon: "coinbase" | "cosmos" | "lido" | "moonpay-purple" | "objkt" | "solana";
  title: string;
  subtitle: string;
  description: string;
  type: "wallet" | "services-dapps" | "blockchain" | "nft";
}

export const ExampleCard: FC<ExampleCardProps> = ({icon, title, subtitle, description, type, className, ...props}) => {  
  const router = useRouter();
  
  const handleClick = () => {
    switch (type) {
      case "wallet":
        router.push("/wallet")
        break;
      case "services-dapps":
        router.push("/services-dapps")
        break;
      case "blockchain":
        router.push("/blockchain-foundation")
        break;
      case "nft":
        router.push("/nft-project")
        break;
      default:
        break;
    }
  }

  return (
    <button type="button" onClick={handleClick} className={combination("group flex flex-col w-[384px] px-6 py-8 rounded border-[0.5px] border-grey-700 hover:border-white bg-grey-900 text-left ease-linear duration-300", className)} {...props}>
      <div className="flex gap-4 items-center">
        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-md">
          <Image src={require(`../../public/icons/${icon}.png`)} alt="icon" className="w-6" />
        </div>
        <div className="text-heading-6 font-semibold tracking-tight-1">{title}</div>
      </div>
      <div className="text-p font-semibold text-grey-300 mt-6 !leading-[28px]">{subtitle}</div>
      <div className="text-p text-grey-300 !leading-[28px] mb-6">{description}</div>
      <div className="flex w-full place-content-between mt-auto">
        <Tag type={type} />
        <div className="items-center gap-2 hidden md:flex opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 ease-linear duration-300">
          <span className="text-p-caption underline whitespace-nowrap">Plan this journey</span>
          <img src="/icons/arrow-right-white.svg" alt="button icon" />
        </div>
      </div>
      <div className="items-center gap-2 mt-6 flex md:hidden">
        <span className="text-p-caption underline whitespace-nowrap">Plan this journey</span>
        <img src="/icons/arrow-right-white.svg" alt="button icon" />
      </div>
    </button>
  )
}