"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import NavbarGpLogo from "@workspace/ui/components/navbar-gp-logo"
import { TopNavLinks } from "@workspace/ui/lib/nav-link-items"
import LanguageSwitch from "@workspace/ui/components/language-switch"
import { Language } from "@workspace/ui/lib/types"

interface NavTopBarProps {
  downloadUrl?: string
}

const TOP_NAV_LANGUAGES: Language[] = ["ENG", "BAN"]

export default function NavbarTop({
  downloadUrl = "/download",
}: NavTopBarProps) {
  const pathname = usePathname()
  // Treat the site root ("/") as the "Personal" section.
  const currentUrl = pathname === "/" ? "/personal" : pathname

  return (
    <div className="hidden bg-[#F8FAFC] md:block">
      <div className="mx-auto flex h-12.5 max-w-306 items-center justify-between">
        <div className="flex items-center gap-6">
          <NavbarGpLogo></NavbarGpLogo>
          <nav
            aria-label="Utility"
            className="flex items-center divide-x divide-gray-200 text-sm"
          >
            {TopNavLinks.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={cn(
                  "px-4 transition-colors",
                  item.url === currentUrl
                    ? "font-semibold text-[#0171E2]"
                    : "text-[#697586]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={downloadUrl}
            className="text-[14px] font-semibold text-[#0171E2]"
          >
            Download MyGP
          </Link>
          <LanguageSwitch lang={TOP_NAV_LANGUAGES}></LanguageSwitch>
        </div>
      </div>
    </div>
  )
}
