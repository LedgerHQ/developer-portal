import Button from "../ui/Button"

interface ExploreProps {
  journeyId: string;
}

export const Explore = ({ journeyId }: ExploreProps) => {
  return (
    <div className="relative bg-nano-background lg:bg-nano-background-lg xl:bg-nano-background-xl 2xl:bg-nano-background-2xl bg-cover md:bg-contain bg-no-repeat bg-[40%] md:bg-right bg-black">
      <div className="flex items-center justify-center px-4 py-28 md:p-28">
        <div className="flex flex-col items-center gap-16">
          <div className="text-heading-3 font-semibold tracking-tight-3 text-center hidden md:block">Explore the different developer journeys</div>
          <div className="text-heading-3 font-semibold tracking-tight-2 text-center md:hidden">See how easy 
          (and free) it is</div>
          <Button label="Get Started" type="primary" svgIcon="arrow-right" link={journeyId} />
        </div>
      </div>
    </div>
  )
}