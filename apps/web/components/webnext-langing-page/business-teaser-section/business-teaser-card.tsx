"use client"

import React, { useEffect, useState } from "react"
import { BusinessTeaserData } from "@/public/data/connect-people-data"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"
import TeaserCard from "@/components/webnext-langing-page/business-teaser-section/teaser-card"

const PROGRESS_DURATION = 4000

export default function BusinessTeaserCard() {
  const BusinessTeaser = BusinessTeaserData[0]
  const items = BusinessTeaser?.data ?? []

  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!items.length) return

    let activeProgressID: number
    const animationStartTime = performance.now()

    const updateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - animationStartTime

      const progress = Math.min((elapsedTime / PROGRESS_DURATION) * 100, 100)

      setProgress(progress)

      if (progress >= 100) {
        setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
        return
      }

      activeProgressID = requestAnimationFrame(updateProgress)
    }

    activeProgressID = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(activeProgressID)
    }
  }, [activeIndex, items.length])

  if (!BusinessTeaser || items.length === 0) return null

  return (
    <div
      className={
        "grid grid-cols-1 gap-40 rounded-2xl bg-[#09122F] p-8 text-white md:grid-cols-2"
      }
    >
      <div className="flex flex-col justify-center p-8">
        <h2 className="text-5xl font-bold">{BusinessTeaser.title}</h2>
        <p className={"mt-4 text-lg"}>{BusinessTeaser.description}</p>
        <div className="mt-8 flex flex-col">
          {items.map((item, index) => {
            const isActive = index === activeIndex
            const isDone = index < activeIndex

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex flex-col gap-3 border-white/10 py-4 text-left"
              >
                <h3
                  className={cn(
                    "text-xl transition-colors duration-300",
                    isActive ? "font-semibold text-white" : "text-white/50"
                  )}
                >
                  {item.title}
                </h3>
                <Progress
                  value={isActive ? progress : isDone ? 100 : 0}
                  className="h-1 w-full bg-black/90"
                  indicatorClassName="bg-blue-900"
                />
              </button>
            )
          })}
        </div>
      </div>
      <div className="h-full">
        <TeaserCard item={items[activeIndex]!} />
      </div>
    </div>
  )
}
