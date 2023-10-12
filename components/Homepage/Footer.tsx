import Image from 'next/image';
import Link from "next/link";
import PaymentsLogos from "./PaymentsLogos"
import { FooterData } from "./FooterData"
import { FooterBlock } from './FooterBlock';
import { FooterMobile } from './FooterMobile';

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="h-[1px] w-full bg-white" />
      <div className="max-w-[1440px] mx-auto">
        <div className="py-20 px-4 md:px-28 z-10">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-16">
            <div className="flex flex-col gap-9 md:w-60">
              <Link href="https://www.ledger.com" className="relative h-10 w-28">
                <Image
                  src="/homepage/ledger-logo-long-white.svg"
                  alt="Ledger"
                  fill
                />
              </Link>
              <div className="text-p-caption text-grey-600">Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Nano S, Ledger Vault, Bolos are registered trademarks of Ledger SAS</div>
              <div className="flex flex-col gap-2">
                <div className="text-p-caption text-grey-600">Payment methods</div>
                <PaymentsLogos />
              </div>
            </div>
            <div className="flex-col w-full md:max-h-[700px] flex-wrap place-content-between hidden md:flex">
              {
                FooterData.map((blockData) => {
                  return <FooterBlock key={blockData.name} blockData={blockData} />
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