import FaqSection from "@/components/webnext-langing-page/faq-section/faq-section"
import { AccordianItemsData } from "@/public/data/accordian-data"
import { AwardsRecognitionData } from "@/public/data/connect-people-data"
import ConnectingPeople from "@/components/webnext-langing-page/connect-people-section/connecting-people"
import BusinessTeaser from "@/components/webnext-langing-page/business-teaser-section/business-teaser"
import MyGP from "@/components/webnext-langing-page/mygp-section/mygp"
import ImpactConnectivity from "@/components/webnext-langing-page/impact-connectivity-section/impact-connectivity"
import Innovation from "@/components/webnext-langing-page/innovation-section/innovation"
import BuildWithYou from "@/components/webnext-langing-page/built-with-you-section/build-with-you"
import MainHeroSection from "@/components/webnext-langing-page/hero-section/main-hero-section"
import FeatureServices from "@/components/webnext-langing-page/quick-service-section/feature-services"
import AwardsRecognitionSliderSection from "@/components/webnext-langing-page/awards-recognition-section/awards-recognition"

export default function Page() {
  return (
    <div className="w-full">
      <MainHeroSection textFormateSide="left" />
      <FeatureServices></FeatureServices>
      <Innovation></Innovation>
      <ImpactConnectivity />
      <BuildWithYou></BuildWithYou>
      <ConnectingPeople></ConnectingPeople>
      <BusinessTeaser />
      <AwardsRecognitionSliderSection items={AwardsRecognitionData} />
      <MyGP />
      <FaqSection faqData={AccordianItemsData}></FaqSection>
    </div>
  )
}
