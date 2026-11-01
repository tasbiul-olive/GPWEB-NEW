"use client"
import React from "react"
import SectionHeading from "@workspace/ui/components/section-heading"
import SimpleCardCarousel from "@workspace/ui/components/simple-card-carousel"
import CommonSection from "@workspace/ui/components/common-section"
import type { AwardRecognitionItem } from "@/public/data/connect-people-data"
import AwardRecognitionCard from "@/components/webnext-langing-page/awards-recognition-section/award-recognition-card"

interface AwardsRecognitionSliderSectionProps {
  items: AwardRecognitionItem[]
  title?: string
  subtitle?: string
}

export default function AwardsRecognitionSliderSection({
  items,
  title = "Trusted by Millions, Celebrated by Experts",
  subtitle = "With country's strongest network, Grameenphone is delivering innovations every day",
}: AwardsRecognitionSliderSectionProps) {
  return (
    <CommonSection fullWidth className={"my-16"}>
      <SectionHeading
        title={title}
        subtitle={subtitle}
        className="text-center"
      ></SectionHeading>
      <div className={"mt-16"}>
        <SimpleCardCarousel
          items={items}
          getKey={(item) => item.id}
          slidesPerView={{ default: 1, sm: 2, md: 3.3 }}
          showNavigation={false}
          contentClassName="ml-0"
          itemClassName="pl-5"
          autoplay={true}
          renderItem={(item) => (
            <AwardRecognitionCard imageUrl={item.imageUrl} key={item.id} />
          )}
        />
      </div>
    </CommonSection>
  )
}
