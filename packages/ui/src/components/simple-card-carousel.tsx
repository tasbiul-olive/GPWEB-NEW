"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

type SlidePerView = {
  default?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  "2xl"?: number
}

interface SmartCarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  getKey?: (item: T, index: number) => React.Key
  className?: string
  showNavigation?: boolean
  contentClassName?: string
  itemClassName?: string
  autoplay?: boolean
  autoplayDelay?: number
  loop?: boolean
  slidesPerView?: SlidePerView
  header?: React.ReactNode
  headerClassName?: string
  navigationPlacement?: "sides" | "header"
}

function getSlideBasisClasses() {
  return [
    "basis-[var(--slide-basis-default)]",
    "sm:basis-[var(--slide-basis-sm)]",
    "md:basis-[var(--slide-basis-md)]",
    "lg:basis-[var(--slide-basis-lg)]",
    "xl:basis-[var(--slide-basis-xl)]",
    "2xl:basis-[var(--slide-basis-2xl)]",
  ].join(" ")
}

function getSlideBasisStyle(slides: SlidePerView = {}): React.CSSProperties {
  const { default: d = 1, sm, md, lg, xl, "2xl": xxl } = slides

  const toBasis = (n?: number) => (n ? `calc(100% / ${n})` : undefined)

  return {
    "--slide-basis-default": toBasis(d),
    "--slide-basis-sm": toBasis(sm ?? d),
    "--slide-basis-md": toBasis(md ?? sm ?? d),
    "--slide-basis-lg": toBasis(lg ?? md ?? sm ?? d),
    "--slide-basis-xl": toBasis(xl ?? lg ?? md ?? sm ?? d),
    "--slide-basis-2xl": toBasis(xxl ?? xl ?? lg ?? md ?? sm ?? d),
  } as React.CSSProperties
}

function CarouselHeaderNav() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        aria-label="Previous slide"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted/70 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted/70 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  )
}

export default function SimpleCardCarousel<T>({
  items,
  renderItem,
  getKey,
  className,
  contentClassName,
  itemClassName,
  slidesPerView = {
    default: 1,
  },
  showNavigation = true,
  autoplay = false,
  autoplayDelay = 3000,
  loop = true,
  header,
  headerClassName,
  navigationPlacement = "sides",
}: SmartCarouselProps<T>) {
  if (!items.length) return null

  if (items.length === 1) {
    return <div className={className}>{renderItem(items[0]!, 0)}</div>
  }

  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
    })
  )

  const slideClasses = getSlideBasisClasses()
  const slideStyle = getSlideBasisStyle(slidesPerView)

  const headerNav = showNavigation && navigationPlacement === "header"
  const sideNav = showNavigation && navigationPlacement === "sides"

  return (
    <Carousel
      className={`group ${className ?? ""}`}
      opts={{ loop }}
      plugins={autoplay ? [autoplayPlugin.current] : []}
    >
      {(header || headerNav) && (
        <div
          className={cn(
            "mb-8 flex items-end justify-between gap-6",
            headerClassName
          )}
        >
          <div className="min-w-0">{header}</div>
          {headerNav && <CarouselHeaderNav />}
        </div>
      )}

      <CarouselContent className={contentClassName}>
        {items.map((item, index) => (
          <CarouselItem
            key={getKey?.(item, index) ?? index}
            className={`${slideClasses} ${itemClassName ?? ""}`}
            style={slideStyle}
          >
            {renderItem(item, index)}
          </CarouselItem>
        ))}
      </CarouselContent>

      {sideNav && (
        <>
          <CarouselPrevious className="left-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <CarouselNext className="right-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        </>
      )}
    </Carousel>
  )
}
