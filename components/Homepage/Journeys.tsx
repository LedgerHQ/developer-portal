import { JourneyCard } from "./JourneyCard"

export const Journeys = () => {
  return (
    <div className="relative bg-[url('/homepage/journeys-background.png')] bg-cover">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative py-20 px-4 md:px-28 z-10">
          <div className="text-heading-5 md:text-heading-3 tracking-tight-3 font-semibold" id="journeys">Documentation modules</div>
          <div className="flex flex-wrap gap-y-8 md:gap-x-[3%] mt-16">


            <div className="text-heading-6 md:text-heading-5 tracking-tight-3 font-semibold w-full">Devices</div>

            <JourneyCard 
              title="Device App Kit"
              description="Boilerplate apps and SDKs available in C and Rust to get your app in the Ledger Live 'My Ledger' Section"
              type="device"
              className="w-full md:w-[48.5%]"
            />
            <JourneyCard 
              title="Device Management kit"
              description="Easily handle connection and communication between your app and Ledger devices" 
              type="interaction"
              className="w-full md:w-[48.5%]"
            />

            <div className="text-heading-6 md:text-heading-5 tracking-tight-3 font-semibold w-full">Ledger Live</div>

            <JourneyCard 
              title="Blockchain integration"
              description="Add the possibility to handle your Blockchain's accounts directly in Ledger Live" 
              type="blockchain"
              className="w-full md:w-[48.5%]"
            />
            <JourneyCard 
              title="Ledger Services Kit"
              description="Extend the reach of your dApp by integrating it in Ledger Live" 
              type="live-app"
              className="w-full md:w-[48.5%]"
            />

            <div className="text-heading-6 md:text-heading-5 tracking-tight-3 font-semibold w-full">Clear signing</div>

            <JourneyCard 
              title="Clear Signing initiative"
              description="Whitelist your smart contracts methods to enforce our new clear signing standard"
              type="clear-signing"
              className="w-full"
            />

          </div>
        </div>
      </div>
    </div>
  )
}
