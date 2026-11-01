import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FeatureIconItem } from "../../../lib/types/icon-types"
import { Card } from "@workspace/ui/components/card"
interface FeatureIconCardProps {
  item: FeatureIconItem
}
export default function FeatureIconCard({ item }: FeatureIconCardProps) {
  return (
    <Link href={item.href} className="block h-full">
      <Card className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-muted p-6 pb-6 text-center transition-all duration-500 ease-in-out hover:bg-gray-100 hover:shadow-md">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image
            src={item.icon.src}
            alt={item.icon.alt}
            width={64}
            height={64}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <span className="text-sm font-medium text-foreground">
          {item.label}
        </span>
      </Card>
    </Link>
  )
}
