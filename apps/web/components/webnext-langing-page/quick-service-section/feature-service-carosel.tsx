"use client"

import React from "react"
import { RechargeItem } from "@/lib/types/icon-types"
import RechargeCard from "./recharge-card"
import SimpleCardCarousel from "@workspace/ui/components/simple-card-carousel"

export default function FeatureServiceCarousel({
  items,
}: {
  items: RechargeItem[]
}) {
  return (
    <div className="h-full">
      <SimpleCardCarousel
        items={items}
        getKey={(item) => item.id}
        className={"h-full"}
        autoplay={true}
        autoplayDelay={3000}
        showNavigation={false}
        renderItem={(item) => <RechargeCard item={item} />}
      />
    </div>
  )
}
