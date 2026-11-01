import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RechargeItem } from "@/lib/types/icon-types"
import { Button } from "@workspace/ui/components/button"

interface RechargeCardProps {
  item: RechargeItem
}

export default function RechargeCard({ item }: RechargeCardProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-muted p-6 text-center transition-colors">
      <div className="relative h-1/3 w-1/3">
        <Image
          src={item.icon.src}
          alt={item.icon.alt}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{item.title}</h3>
      </div>
      <Button className="rounded-full bg-[#0171E2] px-6 py-2">
        <Link href={item.ctaHref}>{item.ctaLabel}</Link>
      </Button>
    </div>
  )
}
