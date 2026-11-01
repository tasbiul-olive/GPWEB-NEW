import CardBG from "@/components/webnext-langing-page/built-with-you-section/card-bg"
import CardContent from "@/components/webnext-langing-page/built-with-you-section/card-content"
import CardMedia from "@/components/webnext-langing-page/built-with-you-section/card-media"
import type { BuildWithYouDataProps } from "@/public/data/connect-people-data"

export default function BroadbandPromoCard({
  item,
}: {
  item: BuildWithYouDataProps
}) {
  return (
    <CardBG
      background={{ type: "color", color: item.bgColor }}
      className="flex-col items-center justify-between gap-6 text-center"
    >
      <CardContent
        title={item.title}
        description={item.description}
        buttonText={item.buttonText}
        ctaHref={item.ctaHref}
        contentAlign="center"
      />
      <CardMedia src={item.imgUrl} alt={item.title} className="" />
    </CardBG>
  )
}
