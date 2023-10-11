import { ExampleCard } from "./ExampleCard"

export const Examples = () => {
  return (
    <div className="relative bg-white text-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative py-20 px-28 z-10">
          <div className="heading-3 tracking-tighter font-semibold">They chose security, they chose Ledger</div>
          <div className="flex flex-wrap gap-8 mt-16">
            <ExampleCard 
              icon="coinbase" 
              title="CoinbaseWallet"
              subtitle="CoinbaseWallet with your Ledger"
              description="Developers at Coinbase added an additional layer of security to their extension by incorporating Ledger connectivity to the CoinbaseWallet extension"
              type="wallet"
            />
            <ExampleCard 
              icon="moonpay" 
              title="Moonpay"
              subtitle="Buying crypto straight to your Ledger"
              description="Moonpay was integrated into Ledger Live, and allows assets to be directly deposited and secured in Ledger devices" 
              type="services-dapps"
            />
            <ExampleCard 
              icon="lido" 
              title="Lido"
              subtitle="Staking ETH on Ledger Live"
              description="The LIDO DApp joined the Ledger Live ecosystem and improved security by providing clear-signing to Ledger users" 
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
          </div>
          <div className="bodyText text-grey-700 text-right mt-4">And many more...</div>
        </div>
      </div>
    </div>
  )
}