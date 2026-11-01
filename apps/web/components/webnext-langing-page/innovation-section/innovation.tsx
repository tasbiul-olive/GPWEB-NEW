"use client"

import React from "react"
import Image from "next/image"
import SectionHeading from "@workspace/ui/components/section-heading"
import CommonSection from "@workspace/ui/components/common-section"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { InnovationSlideData } from "@/public/data/connect-people-data"
import { Button } from "@workspace/ui/components/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

function Innovation() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <CommonSection fullWidth className={"my-16"}>
      <SectionHeading
        title={"Innovation for all"}
        subtitle={
          "We’re constantly improving—explore new updates, product launches, and inspiring stories built to connect and empower you every day."
        }
      />
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent
            className="-ml-4 py-8"
            style={{ perspective: "1600px" }}
          >
            {InnovationSlideData.map((banner) => (
              <CarouselItem
                key={banner.id}
                className="basis-[80%] pl-4 sm:basis-[65%] md:basis-[58%] lg:basis-[52%]"
              >
                <div className="relative aspect-7/4 w-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={banner.image}
                    alt={banner.title ?? "Promotional banner"}
                    fill
                    className="object-cover"
                    priority
                  />

                  {(banner.title || banner.cta) && (
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />
                  )}

                  <div className="absolute inset-0 flex flex-col justify-end gap-4 p-8">
                    {banner.badge && (
                      <span className="w-fit rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-3 py-1 text-sm font-bold text-white">
                        {banner.badge}
                      </span>
                    )}
                    {/*{banner.title && (*/}
                    {/*  <h3 className="max-w-[70%] text-xl leading-snug font-bold text-white">*/}
                    {/*    {banner.title}*/}
                    {/*  </h3>*/}
                    {/*)}*/}
                    {banner.cta && (
                      <Button
                        className="w-fit rounded-full bg-white px-7 py-6 text-lg text-black hover:bg-white/90"
                        size="sm"
                      >
                        {banner.cta}
                      </Button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <button
            onClick={() => api?.scrollPrev()}
            className="absolute top-1/2 left-5 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:left-25"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="absolute top-1/2 right-5 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:right-25"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </Carousel>

        <div className="mx-auto mt-2 flex max-w-50 items-center justify-center gap-2 rounded-full bg-gray-100 py-3">
          {InnovationSlideData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                current === index ? "w-6 bg-black" : "w-2 bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </CommonSection>
  )
}

export default Innovation
