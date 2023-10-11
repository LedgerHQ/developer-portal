import { FC, HTMLAttributes } from 'react'
import { cn } from '../../lib/utils';

interface PurpleTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const PurpleText: FC<PurpleTextProps> = ({children, className, ...props}) => {
  return <span className={cn('text-purple', className)} {...props}>{children}</span>
}

export default PurpleText