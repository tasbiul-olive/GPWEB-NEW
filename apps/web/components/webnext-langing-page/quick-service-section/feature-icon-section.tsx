import React from "react"
import { FeatureIconItem } from "@/lib/types/icon-types"
import FeatureIconCard from "@/components/webnext-langing-page/quick-service-section/feature-icon-card"

interface FeatureIconSectionProps {
  items: FeatureIconItem[]
}

export default function FeatureIconSection({ items }: FeatureIconSectionProps) {
  return (
    <div className="grid flex-1 grid-cols-2 items-start gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.id} className="">
          <FeatureIconCard item={item}></FeatureIconCard>
        </div>
      ))}
    </div>
  )
}
