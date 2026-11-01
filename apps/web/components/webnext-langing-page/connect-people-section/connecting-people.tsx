"use client"
import React from "react"
import SectionHeading from "@workspace/ui/components/section-heading"
import SimpleCardCarousel from "@workspace/ui/components/simple-card-carousel"
import CommonSection from "@workspace/ui/components/common-section"
import { connectPeopleData } from "@/public/data/connect-people-data"
import ConnectPeopleCard from "@/components/webnext-langing-page/connect-people-section/connect-people-card"

function ConnectingPeople() {
  return (
    <CommonSection fullWidth className="my-20">
      <SectionHeading
        title={"Connecting people to what matters the most"}
        subtitle={
          "With country's strongest network, Grameenphone is delivering innovations every day"
        }
        align="center"
        className="text-center"
      />
      <div className="mt-16">
        <SimpleCardCarousel
          items={connectPeopleData}
          getKey={(item) => item.id}
          slidesPerView={{ default: 1, sm: 2, md: 3, lg: 4.5 }}
          showNavigation={false}
          contentClassName="ml-0"
          autoplay={true}
          itemClassName="pl-5"
          renderItem={(item) => (
            <ConnectPeopleCard imageUrl={item.image} category={item.category} />
          )}
        />
      </div>
    </CommonSection>
  )
}

export default ConnectingPeople
