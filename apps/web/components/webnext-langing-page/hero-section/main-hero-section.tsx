import CommonSection from "@workspace/ui/components/common-section"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

const DEFAULT_BACKGROUND_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4"

interface MainHeroSectionProps {
  textFormateSide: "left" | "center"
  backgroundType?: "video" | "image"
  backgroundSrc?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function MainHeroSection({
  textFormateSide,
  backgroundType = "video",
  backgroundSrc = DEFAULT_BACKGROUND_VIDEO,
  title = "85M reasons, infinite possibilities",
  description = "From everyday connectivity to future-ready innovations Grameenphone brings it all under one seamless digital ecosystem.",
  ctaLabel = "Explore Possibilities",
  ctaHref = "/",
}: MainHeroSectionProps) {
  const isCentered = textFormateSide === "center"

  return (
    <CommonSection fullWidth>
      <section className="relative mt-4 mb-10 h-[calc(100dvh-var(--navbar-height)-1rem)] overflow-hidden text-white">
        <div className="absolute inset-0">
          {backgroundType === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={backgroundSrc} type="video/mp4" />
            </video>
          ) : (
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${backgroundSrc}")` }}
            />
          )}
        </div>

        <div className="relative flex h-full items-center px-4 py-12 md:px-6 md:py-16 lg:px-8">
          <div
            className={cn(
              "flex w-full flex-col gap-5 md:mx-18",
              isCentered
                ? "mx-auto max-w-5xl items-center text-center"
                : "max-w-[550] items-start text-left"
            )}
          >
            <h1 className="text-4xl leading-tight font-semibold md:text-6xl">
              {title}
            </h1>

            <p className="max-w-2xl leading-6 text-white">{description}</p>

            <Link href={ctaHref}>
              <Button className="rounded-full bg-white px-8 py-5 text-lg leading-7 font-medium text-black transition-colors hover:bg-white">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </CommonSection>
  )
}
