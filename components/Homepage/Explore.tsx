import Button from "../ui/Button"

interface ExploreProps {
  journeyId: string;
}

export const Explore = ({ journeyId }: ExploreProps) => {
  return (
    <div className="relative bg-nano-background bg-contain bg-no-repeat bg-right">
      <div className="flex items-center justify-center p-28">
        <div className="flex flex-col items-center gap-16">
          <div className="heading-3SemiBold tracking-tighter text-center">Explore the different developer journeys</div>
          <Button label="Get Started" type="primary" svgIcon="arrow-right" link={journeyId} />
        </div>
      </div>
    </div>
  )
}