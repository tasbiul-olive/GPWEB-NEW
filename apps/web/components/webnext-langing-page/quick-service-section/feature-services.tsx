import React from "react"
import FeatureIconSection from "./feature-icon-section"
import { featureIconItems, rechargeItems } from "@/public/data/icon-data"
import FeatureServiceCarousel from "./feature-service-carosel"
import CommonSection from "@workspace/ui/components/common-section"

export default function FeatureServices() {
  return (
    <CommonSection className="py-10">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-2/9">
          <FeatureServiceCarousel
            items={rechargeItems}
          ></FeatureServiceCarousel>
        </div>
        <div className="md:w-7/9">
          <FeatureIconSection items={featureIconItems}></FeatureIconSection>
        </div>
      </div>
    </CommonSection>
  )
}
