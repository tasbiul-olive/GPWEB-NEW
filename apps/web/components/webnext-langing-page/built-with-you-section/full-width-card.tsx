import CardContent from "@/components/webnext-langing-page/built-with-you-section/card-content"
import CardBG from "@/components/webnext-langing-page/built-with-you-section/card-bg"
import type { BuildWithYouDataProps } from "@/public/data/connect-people-data"
import CardMedia from "@/components/webnext-langing-page/built-with-you-section/card-media"

export default function FullWidthCard({
  item,
  className,
}: {
  item: BuildWithYouDataProps
  className?: string
}) {
  return (
    <CardBG
      background={{ type: "color", color: item.bgColor }}
      className={`flex-col items-center justify-between gap-8 md:flex-row ${className ?? ""}`}
    >
      <CardContent
        title={item.title}
        description={item.description}
        buttonText={item.buttonText}
        ctaHref={item.ctaHref}
        contentAlign={item.contentAlign}
        className="md:max-w-sm"
      />
      <CardMedia src={item.imgUrl} alt={item.title} className="" />
    </CardBG>
  )
}
