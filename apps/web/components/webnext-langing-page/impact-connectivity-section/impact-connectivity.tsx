"use client"
import React from "react"
import SimpleCardCarousel from "@workspace/ui/components/simple-card-carousel"
import CommonSection from "@workspace/ui/components/common-section"
import { ImpactConnectivityData } from "@/public/data/connect-people-data"
import ImapctConnectivityCard from "@/components/webnext-langing-page/impact-connectivity-section/imapct-connectivity-card"
import { StoriesVideoModal } from "@/components/webnext-langing-page/impact-connectivity-section/stories-video-modal"

export default function ImpactConnectivity() {
  const title = "The Impact of Connection"
  const subtitle =
    "Since 1997, Grameenphone is actively connecting the whole nation with immense possibilities;"

  const [open, setOpen] = React.useState(false)
  const [activeSlide, setActiveSlide] = React.useState(0)

  const openStory = (index: number) => {
    setActiveSlide(index)
    setOpen(true)
  }

  return (
    <CommonSection
      fullWidth
      className="my-16 ps-[max(1rem,calc((100vw-90rem)/4))]"
    >
      <SimpleCardCarousel
        items={ImpactConnectivityData}
        getKey={(item) => item.id}
        slidesPerView={{ default: 1.2, sm: 2, md: 3.5, lg: 4.5 }}
        // autoplay={true}
        showNavigation
        navigationPlacement="header"
        headerClassName="pe-[max(1rem,calc((100vw-90rem)/4))]"
        header={
          <div className="flex max-w-150 flex-col gap-4">
            <h2 className="text-3xl font-bold text-foreground md:text-5xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-lg text-[#364152]">{subtitle}</p>
            ) : null}
          </div>
        }
        contentClassName="-ml-4"
        itemClassName="pl-4"
        renderItem={(item, index) => (
          <ImapctConnectivityCard
            item={item}
            onClick={() => openStory(index)}
          />
        )}
      />

      <StoriesVideoModal
        open={open}
        onOpenChange={setOpen}
        data={ImpactConnectivityData}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </CommonSection>
  )
}
