import Image, { type StaticImageData } from "next/image"
import { cn } from "@workspace/ui/lib/utils"

interface CardMediaProps {
  src: string | StaticImageData
  alt: string
  className?: string
}

export default function CardMedia({ src, alt, className }: CardMediaProps) {
  return (
    <div className={cn("relative z-10 shrink-0", className)}>
      <Image src={src} alt={alt} className="h-auto w-full object-contain" />
    </div>
  )
}
