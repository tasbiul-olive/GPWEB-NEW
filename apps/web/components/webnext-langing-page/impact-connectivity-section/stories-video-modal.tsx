"use client"
import React from "react"
import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@workspace/ui/components/carousel"
import { Button } from "@workspace/ui/components/button"
import { ImpactConnectivityItem } from "@/public/data/connect-people-data"

interface StoriesVideoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  data: ImpactConnectivityItem[]
  activeSlide: number
  setActiveSlide: (index: number) => void
}

export function StoriesVideoModal({
  open,
  onOpenChange,
  data,
  activeSlide,
  setActiveSlide,
}: StoriesVideoDialogProps) {
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([])
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return

    api.scrollTo(activeSlide, true)
  }, [api, activeSlide])

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const index = api.selectedScrollSnap()

      setActiveSlide(index)

      videoRefs.current.forEach((video) => {
        if (!video) return

        video.pause()
        video.currentTime = 0
      })

      videoRefs.current[index]?.play()
    }

    api.on("select", onSelect)

    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api, setActiveSlide])

  React.useEffect(() => {
    if (!open) return

    videoRefs.current.forEach((video) => {
      if (!video) return

      video.pause()
      video.currentTime = 0
    })

    setTimeout(() => {
      videoRefs.current[activeSlide]?.play()
    }, 100)
  }, [open, activeSlide])

  React.useEffect(() => {
    if (!open || !api) return

    const currentItem = data[activeSlide]
    const isLast = activeSlide === data.length - 1

    if (isLast) return

    if (currentItem?.video) {
      const video = videoRefs.current[activeSlide]
      if (!video) return

      const onEnded = () => api.scrollNext()
      video.addEventListener("ended", onEnded)

      return () => {
        video.removeEventListener("ended", onEnded)
      }
    }

    const timer = setTimeout(() => {
      api.scrollNext()
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [open, api, activeSlide, data])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger></DialogTrigger>
      <DialogContent
        fullscreen
        showCloseButton={false}
        className="h-screen w-screen max-w-none rounded-none border-0 bg-black p-0"
      >
        <DialogTitle className="sr-only">
          {data[activeSlide]?.title ?? "Impact stories"}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {data[activeSlide]?.subtitle ?? "Grameenphone impact stories"}
        </DialogDescription>

        <DialogClose asChild>
          <button
            aria-label="Close stories"
            className="absolute top-6 left-4 z-50 flex h-10 w-15 items-center justify-center rounded-full bg-black/20 text-white md:top-8 md:left-8 md:h-12 md:w-12 md:bg-transparent"
          >
            <X className="h-10 w-10" />
          </button>
        </DialogClose>

        <div className="flex h-full items-center justify-center bg-black">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: false,
            }}
            className="max-w-120"
          >
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-screen overflow-hidden md:my-4 md:h-[min(863px,calc(100vh-36px))] md:rounded-lg">
                    <div className="absolute inset-x-0 top-0 z-30 flex gap-1.5 p-4">
                      {data.map((_, barIndex) => (
                        <button
                          key={barIndex}
                          type="button"
                          aria-label={`Go to story ${barIndex + 1}`}
                          onClick={() => api?.scrollTo(barIndex)}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            barIndex === activeSlide
                              ? "flex-3 bg-white"
                              : "flex-1 bg-white/40 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>

                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el
                      }}
                      loop
                      playsInline
                      poster={item.imgUrl.src}
                      className="h-full w-full object-cover"
                      onClick={(e) => {
                        const video = e.currentTarget

                        if (video.paused) {
                          video.play()
                        } else {
                          video.pause()
                        }
                      }}
                    >
                      {item.video ? <source src={item.video} /> : null}
                    </video>

                    <div className="absolute bottom-6 left-1/2 w-full max-w-80 -translate-x-1/2 rounded-lg bg-black/50 px-6 py-4 md:max-w-100">
                      <div className="flex gap-4 pb-6">
                        <div className="relative h-14 w-24 md:h-18 md:w-30">
                          <Image
                            src={item.imgUrl}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white md:text-2xl">
                            {item.title}
                          </h3>

                          <p className="text-xs text-white/90 md:text-base">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <Button className="h-10 w-full bg-blue-600 md:h-12">
                        {item.buttonText}
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />

            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}
