import Image, { type StaticImageData } from "next/image"

interface ConnectPeopleCardProps {
  category: string
  title?: string
  imageUrl: string | StaticImageData
  backGround?: string
}

export default function ConnectPeopleCard({
  category,
  imageUrl,
}: ConnectPeopleCardProps) {
  return (
    <div className="relative aspect-3/4 w-full">
      <Image
        src={imageUrl}
        alt={category}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  )
}
