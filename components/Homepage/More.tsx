import { FC, HTMLAttributes } from 'react'
import Image from "next/image"
import PlusIcon from "../../public/icons/plus.svg"

interface MoreProps extends HTMLAttributes<HTMLDivElement> {}

export const More: FC<MoreProps> = (props) => {  

  return (
    <div {...props}>
      <div className="flex w-8 h-8 items-center justify-center rounded bg-grey-600">
        <Image src={PlusIcon} alt="icon" className="h-5 w-5" />
      </div>
    </div>
  )
}
