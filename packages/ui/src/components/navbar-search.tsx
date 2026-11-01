"use client"

import React from "react"
import { Input } from "@workspace/ui/components/input"

interface NavbarSearchProps {
  placeholder?: string
  onSubmit?: (query: string) => void
  showOnMobile?: boolean
}

export default function NavbarSearch({
  placeholder = "Search",
  onSubmit,
  showOnMobile = false,
}: NavbarSearchProps) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const query = new FormData(e.currentTarget).get(
            "text-input"
          ) as string
          onSubmit?.(query)
        }}
        className={showOnMobile ? "relative block" : "relative hidden md:block"}
      >
        {/*<Search  />*/}
        <div className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0284 13.008L15.8333 15.8332M14.537 9.35169C14.537 12.2154 12.2155 14.5369 9.35181 14.5369C6.48811 14.5369 4.16663 12.2154 4.16663 9.35169C4.16663 6.48799 6.48811 4.1665 9.35181 4.1665C12.2155 4.1665 14.537 6.48799 14.537 9.35169Z"
              stroke="#364152"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Input
          name="text-input"
          type="search"
          placeholder={placeholder}
          className="w-56 rounded-full border border-[#E3E8EF] bg-[#F1F5F9] pl-9 text-black"
        />
      </form>
    </div>
  )
}
