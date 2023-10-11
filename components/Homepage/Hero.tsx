import Image from "next/image"
import PurpleText from "../ui/PurpleText"
import HeroImg from "../../public/homepage/hero-desktop.png"
import Button from "../ui/Button"

interface HeroProps {
  journeyId: string;
}

export const Hero = ({ journeyId }: HeroProps) => {
  return (
    <div className="relative bg-black">
      <div className="max-w-[1440px] mx-auto">
        <Image className="absolute max-h-[449px] top-0 right-[10%] w-[55%] z-0" src={HeroImg} alt="hero" />
        <div className="relative py-20 px-28 z-10">
          <div className="heading-2">Ledger <PurpleText>Developer</PurpleText> Portal</div>
          <div className="heading-5 mt-5">
            <p><PurpleText>Build</PurpleText> with Ledger to bring <PurpleText>security</PurpleText> to your community.</p>
            <p><PurpleText>Easy. Accessible. Proven.</PurpleText></p>
          </div>
          <Button label="Get Started" link={journeyId} svgIcon="arrow-right" type="white" className="mt-10" />
        </div>
      </div>
    </div>
  )
}