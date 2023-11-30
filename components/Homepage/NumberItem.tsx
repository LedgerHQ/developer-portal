import { FC, HTMLAttributes } from 'react'
import { combination } from '../../lib/utils';
import { useSpring, animated, easings, } from 'react-spring';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface NumberItemProps extends HTMLAttributes<HTMLDivElement> {
  number: string;
  text: string;
}

export const NumberItem_1: FC<NumberItemProps> = ({number, text, className, ...props}) => {
  const numberValue = Number(number.replace(/\D/g,''));
  const nonStringValue = number.replace(/\d/g,'');

  const spring = useSpring({ 
    from: { val: numberValue*0 },
    to: { val: numberValue*1 },
    delay: 200,
    //config: { mass:4, tension:28, friction: 60, easing: easings.easeOutExpo },

    config: { mass:3, tension:280, friction: 60, easing: easings.easeOutExpo },

    //config: { mass:1, tension:280, friction: 70, easing: easings.easeOutExpo, duration: 3000},
    //config: { mass:3, tension:280, friction: 70, easing: easings.easeOutCirc },
  }
  );

  return (
    <div className={combination("flex flex-col w-[320px] phone:w-[350px] items-center gap-5 text-center", className)} {...props}>
      <div className="font-mono-medium text-heading-5 lg:text-heading-3 text-purple">
        <animated.span>{spring.val.to(val => (Math.floor(val)).toLocaleString("fr-FR"))}</animated.span>
        {nonStringValue}
      </div>
      <div className="text-p font-semibold">{text}</div>
    </div>
  )
}

export const NumberItem_2: FC<NumberItemProps> = ({number, text, className, ...props}) => {
  const numberValue = Number(number.replace(/\D/g,''));
  const nonStringValue = number.replace(/\d/g,'');

  const spring = useSpring({ 
    from: { val: numberValue*0 },
    to: { val: numberValue*1 },
    delay: 200,
    config: { mass:3, tension:28, friction: 60, easing: easings.easeOutExpo },
  }
  );

  return (
    <div className={combination("flex flex-col w-[320px] phone:w-[350px] items-center gap-5 text-center", className)} {...props}>
      <div className="font-mono-medium text-heading-5 lg:text-heading-3 text-purple">
        <animated.span>{spring.val.to(val => (Math.floor(val)).toLocaleString("fr-FR"))}</animated.span>
        {nonStringValue}
      </div>
      <div className="text-p font-semibold">{text}</div>
    </div>
  )
}

export const NumberItem_3: FC<NumberItemProps> = ({number, text, className, ...props}) => {
  const numberValue = Number(number.replace(/\D/g,''));
  const nonStringValue = number.replace(/\d/g,'');

  const spring = useSpring({ 
    from: { val: numberValue*0 },
    to: { val: numberValue*1 },
    delay: 200,
    config: { mass:3, tension:280, friction: 87, easing: easings.easeOutExpo },
  }
  );

  return (
    <div className={combination("flex flex-col w-[320px] phone:w-[350px] items-center gap-5 text-center", className)} {...props}>
      <div className="font-mono-medium text-heading-5 lg:text-heading-3 text-purple">
        <animated.span>{spring.val.to(val => (Math.floor(val)).toLocaleString("fr-FR"))}</animated.span>
        {nonStringValue}
      </div>
      <div className="text-p font-semibold">{text}</div>
    </div>
  )
}
