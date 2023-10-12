import { FC, HTMLAttributes } from 'react'
import { cn } from '../../lib/utils';

interface NumberItemProps extends HTMLAttributes<HTMLDivElement> {
  number: string;
  text: string;
}

export const NumberItem: FC<NumberItemProps> = ({number, text, className, ...props}) => {
  return (
    <div className={cn("flex flex-col w-[350px] items-center gap-5 text-center", className)} {...props}>
      <span className="font-mono-medium text-heading-5 lg:text-heading-3 text-purple">{number}</span>
      <div className="text-p font-semibold">{text}</div>
    </div>
  )
}