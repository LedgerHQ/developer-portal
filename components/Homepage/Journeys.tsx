import { JourneyCard } from "./JourneyCard"

export const Journeys = () => {
  return (
    <div className="relative bg-[url('/homepage/journeys-background.png')] bg-cover">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative py-20 px-4 md:px-28 z-10">
          <div className="text-heading-5 md:text-heading-3 tracking-tighter font-semibold" id="journeys">What you can build</div>
          <div className="flex flex-wrap gap-y-8 md:gap-x-[3%] mt-16">
            <JourneyCard 
              title="Increase transaction security,"
              description="chain and brand awareness, and bring your protocol to Ledger Live users"
              type="blockchain"
              className="w-full md:w-[48.5%]"
            />
            <JourneyCard 
              title="Quickly connect a Ledger device"
              description="to your software application by implementing various transport protocols" 
              type="wallet"
              className="w-full md:w-[48.5%]"
            />
            <JourneyCard 
              title="Developing and submitting an Embedded App"
              description="A comprehensive guide on how to develop and submit applications for Ledger devices." 
              type="services-dapps"
              className="w-full md:w-[48.5%]"
            />
            <JourneyCard 
              title="Secure NFT  collections, "
              description="and allow all Ledger users to directly display their NFTs in Ledger Live." 
              type="nft"
              className="w-full md:w-[48.5%]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}