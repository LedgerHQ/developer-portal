import { useState, HTMLAttributes, FC } from "react"
import Image from "next/image";
import { combination } from "../../lib/utils";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FooterDataType } from "./FooterData";

interface FooterMobileProps extends HTMLAttributes<HTMLDivElement> {
  footerData: FooterDataType
}

export const FooterMobile: FC<FooterMobileProps> = ({ footerData, className, ...props }) => {
  const [expandedItem, setExpandedItem] = useState("");

  return (
    <div className={combination("mt-8 w-full", className)} {...props}>
      {footerData.map((blockData) => (
        <div key={`${blockData.name}`}>
          <button
            type="button"
            className="flex w-full cursor-pointer items-center justify-between gap-2 p-3 ps-0 text-sm font-semibold"
            tabIndex={0}
            onClick={() => {
              if (expandedItem === blockData.name) {
                setExpandedItem("");
              } else {
                setExpandedItem(blockData.name);
              }
            }}
          >
            <span>{blockData.name}</span>
            <Image
              src={`${expandedItem === blockData.name ? "/homepage/chevron-up-white.svg" : "/homepage/chevron-down-white.svg"}`}
              alt="chevron"
              width={20}
              height={20}
            />
          </button>
          <ul
            className={combination(
              'overflow-hidden duration-300',
              expandedItem === blockData.name
                ? 'visible max-h-96 '
                : 'invisible max-h-0 '
            )}
          >
            {blockData.links.map((linkData, index) => {
            if (linkData.scrollLink) {
              return (
                <li
                className="px-3 py-2 text-sm text-gray-300"
                key={`${linkData.name}-${index}`}
              >
                <ScrollLink
                  key={linkData.label}
                  to={linkData.scrollLink}
                  smooth
                  className="text-p-caption text-grey-500 hover:text-grey-400 cursor-pointer"
                  offset={-80}
                >
                  {linkData.label}
                </ScrollLink>
              </li>
              )
            }
            return (
              <li
                className="px-3 py-2 text-sm text-gray-300"
                key={`${linkData.name}-${index}`}
              >
                <Link key={linkData.label} className="text-p-caption text-grey-500 hover:text-grey-400" href={linkData.link}>
                  {linkData.label}
                </Link>
              </li>
            )})}
          </ul>
        </div>
      ))}
    </div>
  );
};