import { FC, HTMLAttributes } from 'react'
import PurpleText from "../ui/PurpleText"
import { cn } from '../../lib/utils';

interface NumberItemProps extends HTMLAttributes<HTMLDivElement> {
  number: string;
  text: string;
}

export const NumberItem: FC<NumberItemProps> = ({number, text, className, ...props}) => {
  return (
    <div className={cn("flex flex-col w-[350px] items-center gap-5", className)} {...props}>
      <PurpleText className="heading-5 lg:text-heading-3">{number}</PurpleText>
      <div className="bodyTextSemiBold text-center">{text}</div>
    </div>
  )
}