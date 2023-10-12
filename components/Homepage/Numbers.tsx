import { NumberItem } from "./NumberItem"

export const Numbers = () => {
  return (
    <div className="relative bg-black">
      <div className="max-w-[1216px] mx-auto flex items-center justify-center px-4 py-16 md:p-28 bg-purple-radial-gradient">
        <div className='flex flex-col md:flex-row gap-6 md:gap-4 w-full items-center md:items-stretch place-content-between'>
          <NumberItem number="140+" text="blockchain protocols secured" />
          <div className="w-[1px] bg-grey-400 hidden md:block" />
          <div className="h-[1px] w-full bg-grey-400 block md:hidden" />
          <NumberItem number="200+" text="DApps compatible" />
          <div className="w-[1px] bg-grey-400 hidden md:block" />
          <div className="h-[1px] w-full bg-grey-400 block md:hidden" />
          <NumberItem number="6 000 000" text="devices sold worldwide" />
        </div>
      </div>
    </div>
  )
}