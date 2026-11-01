import React from "react"
import SectionHeading from "@workspace/ui/components/section-heading"
import CommonSection from "@workspace/ui/components/common-section"
import BusinessTeaserCard from "@/components/webnext-langing-page/business-teaser-section/business-teaser-card"

export default function BusinessTeaser() {
  return (
    <CommonSection className="my-16">
      <div>
        <SectionHeading
          title={"Connecting people to what matters the most"}
          subtitle={
            "With country's strongest network, Grameenphone is delivering innovations every day"
          }
          className="text-center"
        ></SectionHeading>
      </div>
      <div className={"mt-16"}>
        <BusinessTeaserCard></BusinessTeaserCard>
      </div>
    </CommonSection>
  )
}
