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
  const [textStyle, setTextStyle] = useState<string>("");
  const [containerStyle, setContainerStyle] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "wallet":
        setTextStyle("text-purple-dark");
        setContainerStyle("border-purple");
        break;
      case "services-dapps":
        setTextStyle("text-black");
        setContainerStyle("border-grey-700");
        break;
      case "blockchain":
        setTextStyle("text-primary-dark");
        setContainerStyle("border-primary");
        break;
      case "nft":
        setTextStyle("text-green-nft-dark");
        setContainerStyle("border-green-nft");
        break;
      default:
        setTextStyle("");
        setContainerStyle("");
        break;
    }
  }, [type])

  return (
    <div className={cn("w-fit flex gap-2 border rounded px-4 py-2 items-center", containerStyle, className)} {...props}>
        <Image src={require(`../../public/icons/${type}.svg`)} alt="icon" className="h-5 w-5" />
        <div className={`tagText ${textStyle}`}>{strings[type]}</div>
    </div>
  )
}
