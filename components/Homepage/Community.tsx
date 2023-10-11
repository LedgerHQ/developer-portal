import Button from "../ui/Button"
import PurpleText from "../ui/PurpleText"

export const Community = () => {
  return (
    <div className="relative bg-black">
      <div className="flex items-center justify-center p-28 bg-purple-radial-gradient">
        <div className="flex flex-col items-center gap-16">
          <div className='flex flex-col items-center gap-6'>
            <PurpleText className="tagText">Community driven</PurpleText>
            <div className="heading-3SemiBold tracking-tighter">Join the Ledger Developer Community</div>
            <div className="emphasisText text-center">The top Web3 developers and security experts are here to help, debate, share and build with you what shapes the future of blockchain.</div>
          </div>
          <Button label="Join us on Discord" type="white" svgIcon="arrow-external" href="" />
        </div>
      </div>
    </div>
  )
}