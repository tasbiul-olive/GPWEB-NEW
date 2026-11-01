import React from "react"
import Image, { type StaticImageData } from "next/image"

interface AwardRecognitionCardProps {
  imageUrl: string | StaticImageData
  alt?: string
}

function AwardRecognitionCard({
  imageUrl,
  alt = "Award Not Given.",
}: AwardRecognitionCardProps) {
  return (
    <div className="relative aspect-3/4 w-full">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  )
}

export default AwardRecognitionCard
