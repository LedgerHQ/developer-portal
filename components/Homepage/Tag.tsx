import { useState, useEffect, FC, HTMLAttributes } from 'react'
import Image from "next/image"
import { combination } from '../../lib/utils';

const strings = {
  "clear-signing": "Clear Signing",
  "device": "Device Apps",
  "interaction": "Device Interaction",
  "blockchain": "Blockchain",
  "live-app": "Live Apps"
}

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  type: "clear-signing"| "device" | "interaction" | "blockchain" | "live-app"
}

export const Tag: FC<TagProps> = ({type, className, ...props}) => {  
  const [containerStyle, setContainerStyle] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "clear-signing":
        setContainerStyle("border-lime-500 bg-lime-700");
        break;
      case "device":
        setContainerStyle("border-purple-light bg-purple-dark");
        break;
      case "interaction":
        setContainerStyle("border-purple-light bg-purple-dark");
        break;
      case "blockchain":
        setContainerStyle("border-primary bg-primary-dark");
        break;
      case "live-app":
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
