"use client"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { MainNavLinks, TopNavLinks } from "@workspace/ui/lib/nav-link-items"
import NavbarAction from "@workspace/ui/components/navbar-action"
import NavbarSearch from "@workspace/ui/components/navbar-search"
import NavbarGpLogo from "@workspace/ui/components/navbar-gp-logo"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

interface MainNavBarProps {
  activeUrl?: string
}

export default function NavbarMain({ activeUrl = "/" }: MainNavBarProps) {
  const pathname = usePathname()
  // Treat the site root ("/") as the "Personal" section.
  const currentTopUrl = pathname === "/" ? "/personal" : pathname
  const activeSection =
    TopNavLinks.find((item) => item.url === currentTopUrl)?.label ?? "Menu"

  return (
    <div className="bg-white">
      {/* Desktop bar */}
      <div className="mx-auto hidden h-12 max-w-306 items-center justify-between md:flex">
        <nav className="flex items-center gap-6">
          {MainNavLinks.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={cn(
                "transition-colors",
                item.url === activeUrl
                  ? "font-semibold text-[#0171E2]"
                  : "text-black"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6 text-sm">
          <NavbarSearch></NavbarSearch>
          <NavbarAction></NavbarAction>
        </div>
      </div>

      {/* Mobile bar: hamburger (left) · logo (dead-center) · actions (right) */}
      <div className="relative mx-auto flex h-12 max-w-306 items-center justify-between px-4 md:hidden">
        <Sheet>
          <SheetTrigger
            aria-label="Open menu"
            className="flex items-center justify-center rounded-md p-1 text-black transition-colors hover:bg-[#F1F5F9]"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            {/* Active section shown at the left, in the same row as the close icon */}
            <SheetHeader className="flex-row items-center border-b p-4">
              <SheetTitle className="text-[#0171E2]">
                {activeSection}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col">
              {MainNavLinks.map((item) => (
                <SheetClose asChild key={item.url}>
                  <Link
                    href={item.url}
                    className={cn(
                      "border-b border-[#F1F5F9] px-4 py-3 transition-colors",
                      item.url === activeUrl
                        ? "font-semibold text-[#0171E2]"
                        : "text-black hover:bg-[#F8FAFC]"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Absolutely centered logo so side content widths never shift it */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
          <div className="pointer-events-auto">
            <NavbarGpLogo></NavbarGpLogo>
          </div>
        </div>

        <NavbarAction></NavbarAction>
      </div>
    </div>
  )
}
