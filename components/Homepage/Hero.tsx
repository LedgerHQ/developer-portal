import Image from "next/image"
import HeroImg from "../../public/homepage/hero-background.png"
import Button from "../ui/Button"

interface HeroProps {
  journeyId: string;
}

export const Hero = ({ journeyId }: HeroProps) => {
  return (
    <div className="bg-black">
      <div className="relative max-w-[1440px] mx-auto md:bg-hero-background bg-contain bg-no-repeat bg-right">
        <div className="pb-20 md:py-20 px-4 md:px-28" id="home">
          <div className="relative w-auto mx-auto md:hidden">
            <Image src={HeroImg} alt="hero" />
            <div className="absolute w-full md:hidden h-32 bottom-0 left-0 bg-black-gradient-bottom" />
          </div>
          <div className="text-heading-4 md:text-heading-5 lg:text-heading-3 xl:text-heading-2 font-semibold tracking-tight-4">Ledger <span className="text-purple">Developer</span> Portal</div>
          <div className="text-heading-6 lg:text-heading-5 font-semibold tracking-tight-2 mt-5">
            <p><span className="text-purple">Build</span> with Ledger to bring <span className="text-purple">security</span> to your community.</p>
            <p><span className="text-purple">Easy. Accessible. Proven.</span></p>
          </div>
          <Button label="Get Started" link={journeyId} svgIcon="arrow-right" type="white" className="relative mt-10 z-10" />
          <div className="absolute w-full hidden md:block h-28 bottom-0 left-0 bg-black-gradient-bottom" />
        </div>
      </div>
    </div>
  )
}