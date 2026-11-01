"use client"

import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

import {
  footerColumns,
  footerTabs,
  mygpApp,
  SocialLinks,
  StoreBadges,
} from "@workspace/ui/lib/footer-data"
import {
  GrameenphoneLogo,
  SocialIconMap,
  StoreIconMap,
} from "@workspace/ui/components/footer-icons"
import Link from "next/link"

export default function Footer() {
  const [activeTab, setActiveTab] = React.useState(footerTabs[0]?.label)

  return (
    <footer className="w-full bg-[#F7F8FA] text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <GrameenphoneLogo className="h-9 w-auto" />

            <div className="flex items-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200">
              {footerTabs.map((tab) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(tab.label)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    activeTab === tab.label
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-black"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <ul className="flex items-center gap-3">
            {SocialLinks.map((social) => {
              const Icon =
                SocialIconMap[social.id as keyof typeof SocialIconMap]
              return (
                <li key={social.id}>
                  <Link
                    href={social.href}
                    className="flex size-9 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition-colors hover:bg-slate-200 hover:text-black"
                  >
                    <Icon className="size-4" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <hr className="my-8 border-slate-200" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-black">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">
              {mygpApp.title}
            </h3>

            <div className="mb-4 size-28 rounded-lg border bg-white p-2" />

            <div className="flex flex-col gap-2">
              {StoreBadges.map((item) => {
                const Badge = StoreIconMap[item.id as keyof typeof StoreIconMap]
                return (
                  <Link key={item.id} href={item.href}>
                    <Badge className="h-9 w-auto" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
