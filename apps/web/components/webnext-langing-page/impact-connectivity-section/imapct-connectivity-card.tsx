import React from "react"
import { ImpactConnectivityItem } from "@/public/data/connect-people-data"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ImapctConnectivityCardProps {
  item: ImpactConnectivityItem
  onClick?: () => void
}

function ImapctConnectivityCard({
  item,
  onClick,
}: ImapctConnectivityCardProps) {
  const { imgUrl, title, subtitle } = item

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full max-w-80 flex-col gap-4 text-left"
    >
      <div className="relative aspect-3/5 w-full overflow-hidden rounded-2xl">
        <Image
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          src={imgUrl}
        />
        <span className="absolute right-2 bottom-3 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      <p className="text-sm text-[#364152]">
        <span className="font-bold text-foreground">{title} </span>
        {subtitle.length > 40 ? `${subtitle.substring(0, 40)}...` : subtitle}
      </p>
    </button>
  )
}

export default ImapctConnectivityCard
