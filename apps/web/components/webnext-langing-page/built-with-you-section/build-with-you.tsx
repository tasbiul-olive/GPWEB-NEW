import React from "react"
import SectionHeading from "@workspace/ui/components/section-heading"
import CommonSection from "@workspace/ui/components/common-section"
import {
  BuildWithYouData,
  type BuildWithYouDataProps,
} from "@/public/data/connect-people-data"
import FullBackgroundCard from "@/components/webnext-langing-page/built-with-you-section/full-background-card"
import FullWidthCard from "@/components/webnext-langing-page/built-with-you-section/full-width-card"
import BroadbandPromoCard from "@/components/webnext-langing-page/built-with-you-section/broadband-card"

function renderCard(item: BuildWithYouDataProps) {
  if (item.fullBackground) {
    return <FullBackgroundCard item={item} />
  }
  if (item.cardWidth === "full") {
    return <FullWidthCard item={item} />
  }
  return <BroadbandPromoCard item={item} />
}

export default function BuildWithYou() {
  return (
    <CommonSection className={"my-16"}>
      <SectionHeading
        title={"Built with you in mind"}
        subtitle={"Get all the evolved services in Grameenphone ecosystem"}
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {BuildWithYouData.map((item) => (
          <div
            key={item.id}
            className={item.cardWidth === "full" ? "md:col-span-2" : undefined}
          >
            {renderCard(item)}
          </div>
        ))}
      </div>
    </CommonSection>
  )
}
