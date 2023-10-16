import Image from "next/image"
import HeroImg from "../../public/homepage/hero-mobile.png"
import Button from "../ui/Button"

interface HeroProps {
  journeyId: string;
}

export const Hero = ({ journeyId }: HeroProps) => {
  return (
    <div className="bg-black">
      <div className="max-w-[1440px] mx-auto md:bg-hero-background bg-contain bg-no-repeat bg-right">
        <div className="pb-20 md:py-20 px-4 md:px-28" id="home">
          <div className="h-[475px] phone:h-[512px] md:hidden">
            <Image className="max-h-[700px] w-auto -mt-[35%] phone:-mt-[30%] sm:-mt-[25%] mx-auto md:hidden z-0" src={HeroImg} alt="hero" />
          </div>
          <div className="text-heading-4 md:text-heading-5 lg:text-heading-3 xl:text-heading-2 font-semibold tracking-tighter">Ledger <span className="text-purple">Developer</span> Portal</div>
          <div className="text-heading-6 lg:text-heading-5 font-semibold tracking-tight mt-5">
            <p><span className="text-purple">Build</span> with Ledger to bring <span className="text-purple">security</span> to your community.</p>
            <p><span className="text-purple">Easy. Accessible. Proven.</span></p>
          </div>
          <Button label="Get Started" link={journeyId} svgIcon="arrow-right" type="white" className="relative mt-10 z-10" />
        </div>
      </div>
    </div>
  )
}