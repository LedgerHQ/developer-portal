import { useState, useEffect, FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { cn } from '../../lib/utils';

const strings = {
  "wallet": "Wallet",
  "services-dapps": "Services & Dapps",
  "blockchain": "Blockchain",
  "nft": "NFT"
}

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  type: "wallet" | "services-dapps" | "blockchain" | "nft"
}

export const Tag: FC<TagProps> = ({type, className, ...props}) => {  
  const [containerStyle, setContainerStyle] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "wallet":
        setContainerStyle("border-purple-light bg-purple-dark");
        break;
      case "services-dapps":
        setContainerStyle("border-grey-300 bg-grey-600");
        break;
      case "blockchain":
        setContainerStyle("border-primary bg-primary-dark");
        break;
      case "nft":
        setContainerStyle("border-green-nft bg-green-nft-dark");
        break;
      default:
        setContainerStyle("");
        break;
    }
  }, [type])

  return (
    <div className={cn("w-fit flex gap-2 border rounded px-4 py-2 items-center", containerStyle, className)} {...props}>
        <Image src={require(`../../public/icons/${type}.svg`)} alt="icon" className="h-5 w-5" />
        <div className="tagText">{strings[type]}</div>
    </div>
  )
}
