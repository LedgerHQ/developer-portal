import { useState, useEffect, useRef, FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { cn } from '../../lib/utils';
import { Tag } from './Tag';
import Button from '../ui/Button';
import { CryptoIcon } from './CryptoIcon';
import { BlockchainCryptos, CryptoType, CryptosData, NFTCryptos, ServicesDappsCryptos, WalletCryptos } from './CryptoData';
import { Cryptos } from './Cryptos';
import { JourneyButton } from './JourneyButton';

interface JourneyCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  type: "wallet" | "services-dapps" | "blockchain" | "nft";
}

export const JourneyCard: FC<JourneyCardProps> = ({title, description, type, className, ...props}) => {  
  const [cryptos, setCryptos] = useState<CryptoType[]>([])
  const [isHover,setIsHover]=useState(false);
  const cardRef = useRef<HTMLButtonElement>(null)

  function MouseOver() {
    setIsHover(true);
  }
  function MouseOut() {
    setIsHover(false);
  }

  const getCryptosList = () => {
    switch (type) {
      case "wallet":
        return WalletCryptos;
      case "services-dapps":
        return ServicesDappsCryptos;
      case "blockchain":
        return BlockchainCryptos;
      case "nft":
        return NFTCryptos;
      default:
        return [];
    }
  }

  useEffect(() => {
    const journeyList = getCryptosList();

    const list: CryptoType[] = [];
    journeyList.forEach((cryptoIcon) => {
      const crypto = CryptosData.find(c => c.icon === cryptoIcon)
      if (crypto) {
        list.push(crypto)
      }
    })

    setCryptos(list);
  }, [])

  const handleClick = () => {
    switch (type) {
      case "wallet":
        console.log("wallet")
        break;
      case "services-dapps":
        console.log("services-dapps")
        break;
      case "blockchain":
        console.log("blockchain")
        break;
      case "nft":
        console.log("nft")
        break;
      default:
        break;
    }
  }

  // useEffect(() => {
  //   console.log("object", cardRef.current)
  // }, [cardRef.current.clientWidth])

  return (
    <button type="button" ref={cardRef} onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={handleClick} className={cn("flex flex-col rounded border-[0.5px] border-grey-700 bg-grey-800/40 bg-blur-sm text-left", className)} {...props}>
      <div className={cn("w-full overflow-hidden duration-300 ease-linear", isHover ? "h-[32%]" : "h-[35%]")}>
        <Image 
          src={require(`../../public/homepage/bg-${type}.png`)} 
          alt="type"
          className={cn("w-full duration-300 ease-linear", isHover ? "-mt-0" : "")}
        />  
      </div>
      <div className="flex flex-col px-8 pt-6 mb-6">
        <Tag type={type} />
        <div className="text-heading-5 font-semibold tracking-tight mt-4">{title}</div>
        <div className="text-heading-7 font-semibold mt-2">{description}</div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-8 md:place-content-between px-8 pb-6 mt-8 md:mt-auto md:items-end">
        <Cryptos cryptos={cryptos} hovered={isHover} />
        <JourneyButton hovered={isHover} />
      </div>
    </button>
  )
}