import { FC, HTMLAttributes } from 'react'
import { combination } from '../../lib/utils';
import { useSpring, animated } from 'react-spring';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface NumberItemProps extends HTMLAttributes<HTMLDivElement> {
  number: string;
  text: string;
}

export const NumberItem: FC<NumberItemProps> = ({number, text, className, ...props}) => {
  const numberValue = Number(number.replace(/\D/g,''));
  const nonStringValue = number.replace(/\d/g,'');

  const spring = useSpring({ 
    from: { val: 0 },
    to: { val: numberValue },
    delay: 200,
    config: { mass:1, tension:20, friction: 10, duration: 3000 },
  });


  return (
    <div className={combination("flex flex-col w-[350px] items-center gap-5 text-center", className)} {...props}>
      <div className="font-mono-medium text-heading-5 lg:text-heading-3 text-purple">
        <animated.span>{spring.val.to(val => (Math.floor(val)).toLocaleString("fr-FR"))}</animated.span>
        {nonStringValue}
      </div>
      <div className="text-p font-semibold">{text}</div>
    </div>
  )
}