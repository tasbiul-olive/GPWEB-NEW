import React from "react"
import { cn } from "@workspace/ui/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-align={align}
      className={cn(
        "mx-auto flex max-w-160 flex-col gap-4 data-[align=center]:items-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold text-foreground md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-center text-lg text-[#364152]">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
