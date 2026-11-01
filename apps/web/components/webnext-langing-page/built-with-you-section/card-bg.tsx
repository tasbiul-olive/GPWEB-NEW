import Image, { type StaticImageData } from "next/image"
import { cn } from "@workspace/ui/lib/utils"

type PromoCardBackground =
  | { type: "color"; color?: string; className?: string }
  | {
      type: "image"
      src: string | StaticImageData
      alt: string
    }

interface PromoCardProps {
  background: PromoCardBackground
  children: React.ReactNode
  className?: string
}

export default function CardBG({
  background,
  children,
  className,
}: PromoCardProps) {
  return (
    <div
      style={
        background.type === "color" && background.color
          ? { backgroundColor: background.color }
          : undefined
      }
      className={cn(
        "relative isolate flex min-h-105 overflow-hidden rounded-3xl p-8",
        background.type === "color" ? background.className : "bg-neutral-900",
        className
      )}
    >
      {background.type === "image" && (
        <>
          <Image
            src={background.src}
            alt={background.alt}
            fill
            className="object-cover"
          />
        </>
      )}
      {children}
    </div>
  )
}
