import { useState, useEffect, FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { combination } from '../../lib/utils';

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
        setContainerStyle("border-grey-600 bg-grey-700");
        break;
      case "services-dapps":
        setContainerStyle("border-purple-light bg-purple-dark");
        break;
      case "blockchain":
        setContainerStyle("border-grey-200 bg-grey-400 text-black");
        break;
      case "nft":
        setContainerStyle("border-primary bg-primary-dark");
        break;
      default:
        setContainerStyle("");
        break;
    }
  }, [type])

  return (
    <div className={combination("w-fit flex gap-2 border rounded px-4 py-2 items-center", containerStyle, className)} {...props}>
        <Image src={require(`../../public/icons/${type}.svg`)} alt="icon" className="h-5 w-5" />
        <div className="tagText">{strings[type]}</div>
    </div>
  )
}
