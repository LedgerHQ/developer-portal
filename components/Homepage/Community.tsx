import Button from "../ui/Button"

export const Community = () => {
  return (
    <div className="relative bg-black">
      <div className="flex items-center justify-center px-28 py-20 bg-purple-radial-gradient">
        <div className="flex flex-col items-center gap-16">
          <div className='flex flex-col items-center gap-6'>
            <span className="tagText text-purple">Community driven</span>
            <div className="text-heading-5 md:text-heading-3 font-semibold tracking-tight-3 text-center">Join the Ledger Developer Community</div>
            <div className="text-p-emphasis-mobile md:text-p-emphasis text-center">The top Web3 developers and security experts are here to help, debate, share and build with you what shapes the future of blockchain.</div>
          </div>
          <Button label="Join us on Discord" type="white" svgIcon="arrow-external" href="https://ledgeropen.herokuapp.com/pro" />
        </div>
      </div>
    </div>
  )
}