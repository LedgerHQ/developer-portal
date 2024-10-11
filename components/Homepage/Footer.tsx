import Image from 'next/image';
import Link from "next/link";
import { FooterData } from "./FooterData"
import { FooterBlock } from './FooterBlock';
import { FooterMobile } from './FooterMobile';

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="h-[1px] w-full bg-white" />
      <div className="max-w-[1440px] mx-auto">
        <div className="py-20 px-4 md:px-28 z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="flex flex-col gap-9 md:w-60">
              <Link href="https://www.ledger.com" className="relative h-10 w-28">
                <Image
                  src="/homepage/ledger-logo-long-white.svg"
                  alt="Ledger"
                  fill
                />
              </Link>
              <div className="text-p-caption text-grey-600">Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Nano S, Ledger Vault, Ledger OS are registered trademarks of Ledger SAS</div>
            </div>
            <div className="flex-col md:flex-row w-full gap-4 place-content-between hidden md:flex">
              {
                FooterData.map((blockData) => {
                  return <FooterBlock key={blockData.name} blockData={blockData} className="lg:mr-20" />
                })
              }
            </div>
            <FooterMobile footerData={FooterData} className="md:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}