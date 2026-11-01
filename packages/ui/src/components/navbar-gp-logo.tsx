import React from "react"
import Link from "next/link"

interface NavbarLogoProps {
  url?: string
}

export default function NavbarGpLogo({ url = "/" }: NavbarLogoProps) {
  return (
    <Link href={url} aria-label="Go to home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_6746_2041)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6372 11.1137C17.0208 11.1756 17.0984 11.0942 17.1493 10.7135C17.2325 10.1329 17.4308 9.1538 17.8943 8.15022C18.3962 7.06801 19.1954 5.87888 20.3132 5.08267C21.2547 4.42073 22.7979 3.68758 23.9926 3.42165C24.9699 3.20108 25.8855 3.15898 26.6712 3.23526C28.2858 3.38748 29.1789 3.87015 29.6272 4.49487C29.7935 4.72826 29.8844 5.01617 29.8882 5.20256C29.901 5.51329 29.7716 5.9188 29.346 6.31687C28.9317 6.70034 28.0482 7.18549 26.8432 7.61033C25.5925 8.04697 23.8833 8.50806 22.1796 8.91913C20.7531 9.26369 19.9414 9.55694 19.2636 9.79789C18.1363 10.1986 17.7966 11.3751 18.4991 11.7344C19.5143 12.2536 20.1494 12.7965 20.6905 13.2581C21.5023 13.9563 22.445 14.7778 23.6154 16.2595C24.6758 17.6181 26.4104 20.2112 27.0348 22.7283C27.7258 25.4916 27.294 28.1123 25.8034 28.8441C24.3419 29.5627 22.3942 28.5257 21.027 27.0386C19.7263 25.6273 18.8185 23.965 17.9649 21.4009C17.2245 19.1968 16.9245 16.0009 16.9257 14.329C16.9257 13.7721 16.9171 13.6532 16.9385 13.1502C16.9882 12.712 15.8616 12.3494 14.6507 13.1666C13.2728 14.0965 11.9228 15.7818 11.1259 16.7605C10.7792 17.1877 10.3092 17.8155 9.81121 18.4739C9.15472 19.3376 8.43006 20.237 7.76943 20.7399C6.77521 21.5 5.17787 21.8143 4.05902 20.9771C3.43708 20.5108 3.10602 19.6303 3.09562 18.7352C3.08635 18.105 3.23533 17.5348 3.53531 16.9725C3.9101 16.282 4.52716 15.5411 5.5054 14.6926C6.51697 13.8206 8.13179 12.8344 9.75001 12.1525C12.2184 11.1103 14.876 10.7824 16.6372 11.1137Z"
            fill="url(#paint0_linear_6746_2041)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_6746_2041"
            x="3.09521"
            y="3.2002"
            width="26.7937"
            height="25.8774"
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
            <feGaussianBlur stdDeviation="8.33343" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="plus-lighter"
              in2="shape"
              result="effect1_innerShadow_6746_2041"
            />
          </filter>
          <linearGradient
            id="paint0_linear_6746_2041"
            x1="26.6511"
            y1="25.6375"
            x2="-4.15292"
            y2="-1.37564"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0078CF" />
            <stop offset="1" stopColor="#5FBCFF" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  )
}
