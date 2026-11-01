import React from "react"
import Link from "next/link"
import AccordianCard from "@/components/webnext-langing-page/faq-section/accordian-card"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import CommonSection from "@workspace/ui/components/common-section"
import type { FaqAction, FaqItem } from "@/lib/types/faq"
interface FaqSectionProps {
  heading?: string
  helpTitle?: string
  helpDescription?: string
  faqData: FaqItem[]
  defaultOpenValues?: string[]
  actions?: FaqAction[]
  className?: string
}
const DEFAULT_ACTIONS: FaqAction[] = [
  { label: "Customer Care", variant: "primary" },
  { label: "Live Chat", variant: "secondary", icon: <LiveChaItcon /> },
]
export default function FaqSection({
  heading = "Got a question? You\u2019re not alone.",
  helpTitle = "Let\u2019s sort it\u2014together.",
  helpDescription = "Explore answers and find help right here\u2014no need to wait.",
  faqData,
  defaultOpenValues = faqData?.[0] ? [faqData[0].value] : undefined,
  actions = DEFAULT_ACTIONS,
  className,
}: FaqSectionProps) {
  return (
    <CommonSection>
      <div
        className={cn(
          "grid grid-cols-1 gap-16 rounded-2xl px-10 py-10 text-black md:grid-cols-5 md:gap-24 md:px-20 md:py-15",
          className
        )}
      >
        <div className={"flex flex-col justify-between gap-15 md:col-span-2"}>
          <h2 className={"text-5xl"}>{heading}</h2>
          <div className={"rounded-2xl bg-[#ECF5FC] p-6"}>
            <HelpIcon />
            <div className={"py-5"}>
              <h4 className={"text-2xl"}>{helpTitle}</h4>
              <p>{helpDescription}</p>
            </div>
            <div className={"flex gap-5"}>
              {actions.map((action, index) => (
                <FaqActionButton
                  key={`${action.label}-${index}`}
                  action={action}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={"mx-5 md:col-span-3"}>
          <AccordianCard
            items={faqData}
            defaultOpenValues={defaultOpenValues}
          />
        </div>
      </div>
    </CommonSection>
  )
}
function FaqActionButton({ action }: { action: FaqAction }) {
  const isSecondary = action.variant === "secondary"
  const button = (
    <Button
      className={cn(
        "rounded-full px-5 py-4" /** Optional extra classes for the outer container. */,
        isSecondary
          ? "bg-white text-black hover:bg-white"
          : "bg-blue-600 hover:bg-blue-600"
      )}
    >
      {action.icon}
      <span>{action.label}</span>
    </Button>
  )
  return action.href ? <Link href={action.href}>{button}</Link> : button
}
function LiveChaItcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.455 4.73151C21 5.80107 21 7.2012 21 10.0015V12.7003C21 12.98 21 13.1198 20.9944 13.2379C20.8725 15.8135 18.812 17.874 16.2364 17.9959C16.1183 18.0015 15.9623 18.0015 15.6504 18.0015L15.5703 18.0016C14.5501 18.0081 13.5562 18.3266 12.7222 18.9143L12.6692 18.9521L10.0585 20.8169C9.1635 21.4561 7.98743 20.5329 8.3959 19.5118C8.68525 18.7884 8.15251 18.0015 7.37341 18.0015H6.77166C4.68863 18.0015 3 16.3129 3 14.2298V10.0015C3 7.2012 3 5.80107 3.54497 4.73151C4.02433 3.7907 4.78924 3.02579 5.73005 2.54643C6.79961 2.00146 8.19974 2.00146 11 2.00146H13C15.8003 2.00146 17.2004 2.00146 18.27 2.54643C19.2108 3.02579 19.9757 3.7907 20.455 4.73151ZM9.29426 9.76787C9.92735 9.13478 11.0054 9.38925 11.2885 10.2387C11.9242 12.1459 14.3448 12.7173 15.7664 11.2958L16.5303 10.5318C16.8232 10.2389 16.8232 9.76403 16.5303 9.47114C16.2374 9.17824 15.7626 9.17824 15.4697 9.47114L14.7057 10.2351C14.0726 10.8682 12.9946 10.6137 12.7115 9.76429C12.0758 7.85705 9.65517 7.28563 8.2336 8.7072L7.46967 9.47114C7.17678 9.76403 7.17678 10.2389 7.46967 10.5318C7.76256 10.8247 8.23744 10.8247 8.53033 10.5318L9.29426 9.76787Z"
        fill="#0C1026"
      />
    </svg>
  )
}
function HelpIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.25 17C11.148 17 9.5 18.648 9.5 20.75C9.5 22.852 11.148 24.5 13.25 24.5C15.352 24.5 17 22.852 17 20.75C17 18.648 15.352 17 13.25 17ZM24.5 20.75C24.5 18.648 22.852 17 20.75 17C18.648 17 17 18.648 17 20.75C17 22.852 18.648 24.5 20.75 24.5C22.852 24.5 24.5 22.852 24.5 20.75ZM28.25 24.5C30.352 24.5 32 22.852 32 20.75C32 18.648 30.352 17 28.25 17C26.148 17 24.5 18.648 24.5 20.75C24.5 22.852 26.148 24.5 28.25 24.5Z"
        fill="#5DA1D2"
      />
      <g filter="url(#filter0_i_6895_2436)">
        <path
          d="M62.9636 60.4478L62.96 60.4459C60.6126 59.003 59.8325 55.8366 61.2388 53.4855C63.0699 50.2995 64 46.8554 64 43.25C64 31.8774 54.6209 22.625 43.25 22.625C41.5837 22.625 40.0054 22.8081 38.5589 23.167C37.8778 23.3372 37.3467 23.8775 37.1856 24.5623C35.7427 30.7841 30.7879 35.739 24.5624 37.1874C23.8775 37.3466 23.3393 37.8759 23.1671 38.5589C22.8081 40.0018 22.625 41.5801 22.625 43.25C22.625 54.6226 31.8791 64 43.25 64H62.125C62.9929 64 63.751 63.4012 63.9487 62.5552C64.1501 61.7094 63.74 60.836 62.9636 60.4478Z"
          fill="url(#paint0_linear_6895_2436)"
        />
      </g>
      <g filter="url(#filter1_i_6895_2436)">
        <path
          d="M20.75 0C9.38737 0 0 9.38737 0 20.75C0 24.3499 0.9375 27.8749 2.73738 30.9124C4.12488 33.35 3.3375 36.4625 0.9375 37.8875C0.1875 38.3 -0.149875 39.1624 0.075125 39.9875C0.300125 40.8124 1.01262 41.375 1.875 41.375H20.75C22.4 41.375 24.0125 41.1875 25.4 40.85C33.0126 39.0875 39.0875 33.0124 40.85 25.4375C41.1876 24.0125 41.375 22.4375 41.375 20.75C41.375 9.38737 32.1126 0 20.75 0ZM13.25 22.625C12.1999 22.625 11.375 21.7999 11.375 20.75C11.375 19.6999 12.1999 18.875 13.25 18.875C14.3001 18.875 15.125 19.6999 15.125 20.75C15.125 21.7999 14.3001 22.625 13.25 22.625ZM20.75 22.625C19.6999 22.625 18.875 21.7999 18.875 20.75C18.875 19.6999 19.6999 18.875 20.75 18.875C21.8001 18.875 22.625 19.6999 22.625 20.75C22.625 21.7999 21.8001 22.625 20.75 22.625ZM28.25 22.625C27.1999 22.625 26.375 21.7999 26.375 20.75C26.375 19.6999 27.1999 18.875 28.25 18.875C29.3001 18.875 30.125 19.6999 30.125 20.75C30.125 21.7999 29.3001 22.625 28.25 22.625Z"
          fill="url(#paint1_linear_6895_2436)"
        />
      </g>
      <path
        d="M34.5 44.125C34.5 43.0895 35.3395 42.25 36.375 42.25C37.4105 42.25 38.25 43.0895 38.25 44.125C38.25 45.1605 37.4105 46 36.375 46C35.3395 46 34.5 45.1605 34.5 44.125Z"
        fill="#B5E0FF"
      />
      <path
        d="M42 44.125C42 43.0895 42.8395 42.25 43.875 42.25C44.9105 42.25 45.75 43.0895 45.75 44.125C45.75 45.1605 44.9105 46 43.875 46C42.8395 46 42 45.1605 42 44.125Z"
        fill="#B5E0FF"
      />
      <path
        d="M49.5 44.125C49.5 43.0895 50.3395 42.25 51.375 42.25C52.4105 42.25 53.25 43.0895 53.25 44.125C53.25 45.1605 52.4105 46 51.375 46C50.3395 46 49.5 45.1605 49.5 44.125Z"
        fill="#B5E0FF"
      />
      <defs>
        <filter
          id="filter0_i_6895_2436"
          x="22.625"
          y="22.625"
          width="41.375"
          height="41.375"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="plus-lighter"
            in2="shape"
            result="effect1_innerShadow_6895_2436"
          />
        </filter>
        <filter
          id="filter1_i_6895_2436"
          x="0"
          y="0"
          width="41.375"
          height="41.375"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
          />
          <feBlend
            mode="plus-lighter"
            in2="shape"
            result="effect1_innerShadow_6895_2436"
          />
        </filter>
        <linearGradient
          id="paint0_linear_6895_2436"
          x1="59"
          y1="58.5"
          x2="10"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078CF" />
          <stop offset="1" stopColor="#5FBCFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6895_2436"
          x1="38.5"
          y1="42"
          x2="4"
          y2="-3.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#72D2FF" />
          <stop offset="1" stopColor="#DEF1F9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
