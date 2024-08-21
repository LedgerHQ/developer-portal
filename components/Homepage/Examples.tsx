import Carousel from "./Carousel"
import { ExampleCard } from "./ExampleCard"

export const Examples = () => {
  return (
    <div className="relative bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative pt-20 pb-10 md:pb-16 px-4 md:px-28 z-10">
          <div className="text-heading-5 md:text-heading-3 tracking-tight-3 font-semibold" id="api">
            They chose security, they chose Ledger
          </div>
        </div>
      </div>
      <div className="relative max-w-[1600px] overflow-hidden mx-auto">
        <div className="absolute h-14 w-10 md:w-44 lg:w-96 left-0 top-0 bg-black-gradient-left z-10" />
        <Carousel />
        <div className="absolute h-14 w-10 md:w-44 lg:w-96 right-0 top-0 bg-black-gradient-right z-10" />
      </div>

      <div className="max-w-[1440px] mx-auto -mt-4 md:mt-0">
        <div className="relative pb-20 px-4 md:px-28 z-10">
          <div className="flex flex-wrap gap-8 mt-16 justify-center items-center md:items-stretch md:justify-normal">
            <ExampleCard 
              icon="coinbase" 
              title="Coinbase Wallet"
              subtitle="Use Coinbase Wallet with your Ledger"
              description="Coinbase Wallet's browser extension is compatible with Ledger hardware wallets, providing an additional layer of security and greater peace of mind"
              type="wallet"
            />
            <ExampleCard 
              icon="moonpay-purple" 
              title="MoonPay"
              subtitle="Buying crypto straight to your Ledger"
              description="MoonPay was integrated into Ledger Live, and allows assets to be directly deposited and secured in Ledger devices" 
              type="services-dapps"
            />
            <ExampleCard 
              icon="lido" 
              title="Lido"
              subtitle="Staking ETH on Ledger Live"
              description="The LIDO dAPP was integrated into the Ledger Live ecosystem and improved security by providing clear signing to Ledger users" 
              type="services-dapps"
            />
            <ExampleCard 
              icon="solana" 
              title="Solana"
              subtitle="Managing and staking  SOL on Ledger Live"
              description="Solana built and designed the Ledger application and Ledger Live interface, providing its userbase with state-of-the-art security and experience" 
              type="blockchain"
            />
            <ExampleCard 
              icon="objkt" 
              title="Objkt"
              subtitle="Neat connection to Objkt"
              description="Securely display your NFT collections directly within Ledger Live, for a neat and easy visualisation experience" 
              type="nft"
            />
            <ExampleCard 
              icon="cosmos" 
              title="Cosmos"
              subtitle="Into the Cosmos with Ledger"
              description="Cosmos is fully compatible with Ledger making it easy to support any Cosmos chains on the suite of Ledger products" 
              type="blockchain"
            />
            <div className="md:hidden w-full text-p text-grey-500 mt-4">And many more...</div>
          </div>
          <div className="hidden md:block text-p text-grey-500 text-right mt-4">And many more...</div>
        </div>
      </div>
    </div>
  )
}