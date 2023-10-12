import Link from "next/link";
import { FooterBlockType } from "./FooterData"

interface FooterBlockProps {
  blockData: FooterBlockType;
}

export const FooterBlock = ({ blockData }: FooterBlockProps) => {
  return (
    <div className="mb-10">
      <div className="text-p-highlight font-semibold mb-3">{blockData.name}</div>
      <div className="flex flex-col gap-3">
        {blockData.links.map((linkData) => (
          <Link key={linkData.label} className="text-p-caption text-grey-500 hover:text-grey-400" href={linkData.link}>
            {linkData.label}
          </Link>
        )) }
      </div>
    </div>
  )
}