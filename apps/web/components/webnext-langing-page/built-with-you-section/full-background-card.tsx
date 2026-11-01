import React from "react"
import CardBG from "@/components/webnext-langing-page/built-with-you-section/card-bg"
import CardContent from "@/components/webnext-langing-page/built-with-you-section/card-content"
import type { BuildWithYouDataProps } from "@/public/data/connect-people-data"

export default function FullBackgroundCard({
  item,
}: {
  item: BuildWithYouDataProps
}) {
  return (
    <CardBG
      background={{ type: "image", src: item.imgUrl, alt: item.title }}
      className="h-full flex-col items-center justify-start gap-4 pt-10 text-center"
    >
      <CardContent
        title={item.title}
        description={item.description}
        buttonText={item.buttonText}
        ctaHref={item.ctaHref}
        contentAlign="center"
      />
    </CardBG>
  )
}
