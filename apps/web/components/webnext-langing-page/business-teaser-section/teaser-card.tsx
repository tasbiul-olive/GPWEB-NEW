"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import type { BusinessTeaserItem } from "@/public/data/connect-people-data"

interface TeaserCardProps {
  item: BusinessTeaserItem
}

type Phase = "current" | "exit" | "enter"

export default function TeaserCard({ item }: TeaserCardProps) {
  const [displayedItem, setDisplayedItem] = useState(item)
  const [phase, setPhase] = useState<Phase>("current")
  const previousIdRef = useRef(item.id)

  useEffect(() => {
    if (item.id === previousIdRef.current) return
    previousIdRef.current = item.id

    setPhase("exit")

    const exitTimeout = setTimeout(() => {
      setDisplayedItem(item)
      setPhase("enter")

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("current"))
      })
    }, 400)

    return () => clearTimeout(exitTimeout)
  }, [item])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <div
        key={displayedItem.id}
        style={{ backgroundColor: displayedItem.bgColor }}
        className={cn(
          "absolute inset-0 flex flex-col justify-between rounded-2xl p-8 text-white transition-all duration-500 ease-in-out",
          phase === "exit" && "-translate-y-12 opacity-0",
          phase === "enter" && "translate-y-12 opacity-0",
          phase === "current" && "translate-y-0 opacity-100"
        )}
      >
        <div>
          <h3 className="text-2xl font-bold">{displayedItem.title}</h3>
          <div className="relative mt-10 h-24 w-24">
            <Image
              src={displayedItem.imageUrl}
              alt={displayedItem.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-white/80">{displayedItem.description}</p>
          <Button className="my-6 rounded-full bg-white px-6 py-5 text-black hover:bg-white/90">
            <Link href={displayedItem.ctaLink}>{displayedItem.ctaText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
