import Button from "../ui/Button"
import { useRouter } from 'next/navigation'


interface ExploreProps {
  journeyId: string;
}

// export const Explore = ({ journeyId }: ExploreProps) => {
//   return (
//     <div className="bg-black">
//       <div className="relative max-w-[1440px] mx-auto bg-nano-background lg:bg-nano-background-lg xl:bg-nano-background-xl laptop:bg-nano-background-laptop bg-cover md:bg-contain bg-no-repeat bg-[40%] md:bg-right bg-black">
//         <div className="flex items-center justify-center px-4 py-20 md:px-28">
//           <div className="flex flex-col items-center gap-16">
//             <div className="text-heading-5 md:text-heading-3 font-semibold tracking-tight-2 text-center">Don't know where to start?</div>
//             <Button label="Explore the possibilities" type="primary" svgIcon="arrow-right" link={journeyId} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export const Explore = ({ journeyId }: ExploreProps) => {
  return (
    <div className="bg-black">
      <div className="relative max-w-[1440px] mx-auto bg-nano-background lg:bg-nano-background-lg xl:bg-nano-background-xl laptop:bg-nano-background-laptop bg-cover md:bg-contain bg-no-repeat bg-[40%] md:bg-right bg-black">
        <div className="flex items-center justify-center px-4 py-20 md:px-28">
          <div className="flex flex-col items-center gap-16">
            <div className="text-heading-5 md:text-heading-3 font-semibold tracking-tight-2 text-center">Don't know where to start?</div>
            <Button label="Explore the possibilities" type="primary" svgIcon="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  )
}