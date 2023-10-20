import Image from 'next/image';

const PaymentsLogos = () => (
  <div className="mt-1 flex flex-col gap-3">
    <div className="flex h-3 flex-row gap-1">
      <Image
        src={`/homepage/logo-paypal-s.png`}
        alt="paypal"
        height={12}
        width={48}
      />
      <Image
        src={`/homepage/logo-crypto-s.png`}
        alt="crypto.com"
        height={12}
        width={82}
      />
      <Image
        src={`/homepage/logo-bitpay-s.png`}
        alt="bitpay"
        height={12}
        width={36}
      />
    </div>
    <div className="flex h-3 flex-row gap-1">
      <Image
        src={`/homepage/logo-american-express.png`}
        alt="american expresss"
        height={20}
        width={24}
        quality={100}
      />
      <Image
        src={`/homepage/logo-visa-s.png`}
        alt="visa"
        height={12}
        width={31}
      />
      <Image
        src={`/homepage/logo-maestro-s.png`}
        alt="maestro"
        height={12}
        width={22}
      />
      <Image
        src={`/homepage/logo-mastercard-s.png`}
        alt="master card"
        height={12}
        width={22}
      />
      <Image
        src={`/homepage/logo-cb-s.png`}
        alt="carte bancaire"
        height={12}
        width={18}
      />
    </div>
  </div>
);

export default PaymentsLogos;