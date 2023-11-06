"use client";
import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { usePathname } from "next/navigation";
 
export default function DocslyClient() {
  const pathname = usePathname();
  if (pathname !== '/' && !pathname.includes('dev-journey')) {
    return <Docsly publicId="public_UDsp1PKk2nRwVMUdTRl1bWIk7mw26Div9V9IzTHx24wX5rP1r42UacubKadcffEc" pathname={pathname} />;
  }
}