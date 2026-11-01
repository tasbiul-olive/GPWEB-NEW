import React from "react"
import Image from "next/image"
import { Progress } from "@workspace/ui/components/progress"
import CommonSection from "@workspace/ui/components/common-section"

export default function MyGP() {
  return (
    <CommonSection>
      <div className="my-16 grid grid-cols-1 gap-16 rounded-2xl bg-[#F1F5F9] pt-10 md:grid-cols-2 md:gap-30 md:pt-29">
        <div className={"mx-12"}>
          <h2 className={"text-5xl leading-14 font-bold text-foreground"}>
            MyGP: One App, Many Possibilities
          </h2>
          <div className={"my-10"}>
            <h4 className={"text-xl font-bold"}>One Tap Payments </h4>
            <p className={"my-2 text-[#364152]"}>
              From nationwide connectivity to secure cloud platforms,
              Grameenphone helps enterprises drive innovation.
            </p>
            <Progress
              value={40}
              className="my-5 h-0.75 w-full bg-gray-400"
              indicatorClassName="bg-black"
            />
            <h4 className={"text-xl"}>Pay Bill</h4>
            <Progress
              value={0}
              className="my-5 h-0.75 w-full bg-gray-400"
              indicatorClassName="bg-black"
            />
            <h4 className={"text-xl"}>Trusted GPShop </h4>
          </div>
          <div className={"my-0"}>
            <Image
              src="/images/mygp-qrcode.png"
              alt="mygpAppMobile"
              width={502}
              height={184}
              className="h-auto w-1/2"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
        <div>
          <Image
            src="/images/mygpApp.png"
            alt="mygpAppMobile"
            width={1092}
            height={1274}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </CommonSection>
  )
}
