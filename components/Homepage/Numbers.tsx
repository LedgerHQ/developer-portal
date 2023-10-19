import { NumberItem } from "./NumberItem"

const VerticalSeparator = () => (
  <div className="w-[1px] bg-grey-400 hidden md:block" />
)

const HorizontalSeparator = () => (
  <div className="h-[1px] w-full bg-grey-400 block md:hidden" />
)

export const Numbers = () => {
  return (
    <div className="relative bg-black">
      <div className="max-w-[1216px] mx-auto flex items-center justify-center px-4 py-16 md:px-28 md:py-20 bg-purple-radial-gradient">
        <div className='flex flex-col md:flex-row gap-6 md:gap-4 w-full items-center md:items-stretch place-content-between' id="overview">
          <NumberItem number="140+" text="blockchain protocols secured" />
          <VerticalSeparator />
          <HorizontalSeparator />
          <NumberItem number="200+" text="compatible DApps" />
          <VerticalSeparator />
          <HorizontalSeparator />
          <NumberItem number="6 000 000" text="devices sold worldwide" />
        </div>
      </div>
    </div>
  )
}