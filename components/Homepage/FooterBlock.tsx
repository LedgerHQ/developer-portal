import { HTMLAttributes, FC } from "react"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll";
import { FooterBlockType } from "./FooterData"
import { combination } from "../../lib/utils";

interface FooterBlockProps extends HTMLAttributes<HTMLDivElement> {
  blockData: FooterBlockType;
}

export const FooterBlock: FC<FooterBlockProps> = ({ blockData, className, ...props }) => {
  return (
    <div className={combination("mb-10", className)} {...props}>
      <div className="text-p-highlight font-semibold mb-3">{blockData.name}</div>
      <div className="flex flex-col gap-3">
        {blockData.links.map((linkData) => {
          if (linkData.scrollLink) {
            return (
              <ScrollLink
              key={linkData.label}
              to={linkData.scrollLink}
              smooth
              className="text-p-caption text-grey-500 hover:text-grey-400 cursor-pointer"
              offset={-80}
            >
              {linkData.label}
            </ScrollLink>
            )
          }
          return (
            <Link key={linkData.label} className="text-p-caption text-grey-500 hover:text-grey-400" href={linkData.link}>
              {linkData.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}