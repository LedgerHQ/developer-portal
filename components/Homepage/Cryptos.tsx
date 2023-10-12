import { useState, useEffect, FC, HTMLAttributes } from 'react'
import { cn } from '../../lib/utils';
import { CryptoType } from "./CryptoData"
import { CryptoIcon } from './CryptoIcon';
import { More } from './More';

interface CryptosProps extends HTMLAttributes<HTMLDivElement> {
  cryptos: CryptoType[];
  hovered: boolean;
}

export const Cryptos: FC<CryptosProps> = ({cryptos, hovered, className, ...props}) => {  
  const [opacity, setOpacity] = useState<string>("opacity-0")
  const [moreOpacity, setMoreOpacity] = useState<string>("opacity-100")

  useEffect(() => {
    if (hovered) {
      setOpacity("opacity-100")
      setMoreOpacity("opacity-0")
    } else {
      setOpacity("opacity-0")
      setMoreOpacity("opacity-100")
    }
  }, [hovered, cryptos])

  return (
    <div className={cn("flex gap-1 flex-wrap", className)} {...props}>
      {
        cryptos.map((crypto, index) => {
          if (index < 5) {
            return (<CryptoIcon key={crypto.icon} crypto={crypto} />)
          }
          else if (index === 5) {
            return (
              <div className="relative w-8">
                <More className={`absolute ${moreOpacity} duration-300 ease-linear`} />
                <CryptoIcon className={`absolute ${opacity} duration-300 ease-linear`} key={crypto.icon} crypto={crypto} />
              </div>
            )
          }
          return (<CryptoIcon className={`${opacity} duration-300 ease-linear`} key={crypto.icon} crypto={crypto} />)
        })
      }
    </div>
  )
}
