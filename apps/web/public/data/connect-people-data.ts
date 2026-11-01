// connective people section
import connectPeople1 from "../images/connect-people-1.png"
import connectPeople2 from "../images/connect-people-2.png"
import connectPeople3 from "../images/connect-people-3.png"
import connectPeople4 from "../images/connect-people-4.png"

// awards and recognition section
import award1 from "../images/awards1.png"
import award2 from "../images/awards2.png"
import award3 from "../images/awards3.png"

// business teaser section
import businessTeaser from "../images/business-teaser1.png"
import type { StaticImageData } from "next/image"

//innovation
import innovation1 from "../images/innovation1.png"

//impact connectivity
import impact1 from "../images/impact1.png"
import impact2 from "../images/impact2.png"
import impact3 from "../images/impact3.png"

// Built with you
import router from "../images/router.png"
import CardBackGround from "../images/card-background.gif"

// connective people section
export const connectPeopleData = [
  {
    id: "1",
    category: "STREAM, GAME, WIN",
    title: "Top network for video, gaming & streaming",
    image: connectPeople1,
    background: "#081B67",
  },
  {
    id: "2",
    category: "NETWORK COVERAGE",
    title: "23,000+ Towers Nationwide",
    image: connectPeople2,
    background: "#FDE49C",
  },
  {
    id: "3",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Dynamic AI network capacity",
    image: connectPeople3,
    background: "#DCECF9",
  },
  {
    id: "4",
    category: "SPEED LEADERSHIP",
    title: "Bangladesh's Fastest Mobile Network",
    image: connectPeople4,
    background: "#081B67",
  },
  {
    id: "5",
    category: "SPEED LEADERSHIP",
    title: "Bangladesh's 1st Fastest Mobile Network",
    image: connectPeople3,
    background: "#DCECF9",
  },
]

export const InnovationSlideData = [
  {
    id: 1,
    image: innovation1,
    badge: "",
    title: "",
    cta: "Learn More",
  },
  {
    id: 2,
    image: innovation1,
    badge: "",
    title: "১ নাম্বার নেটওয়ার্কে থাকলেই কিস্তিতে ফোন",
    cta: "Learn More",
  },
  {
    id: 3,
    image: innovation1,
    badge: "",
    title: "Now in Bangladesh",
    cta: "Learn More",
  },
  {
    id: 4,
    image: innovation1,
    badge: "",
    title: "১ নাম্বার নেটওয়ার্কে থাকলেই কিস্তিতে ফোন",
    cta: "Learn More",
  },
  {
    id: 5,
    image: innovation1,
    badge: "",
    title: "Now in Bangladesh",
    cta: "Learn More",
  },
]

// awards and recognition section
export interface AwardRecognitionItem {
  id: string
  imageUrl: StaticImageData
}

export const AwardsRecognitionData: AwardRecognitionItem[] = [
  {
    id: "1",
    imageUrl: award1,
  },
  {
    id: "2",
    imageUrl: award2,
  },
  {
    id: "3",
    imageUrl: award3,
  },
  {
    id: "4",
    imageUrl: award1,
  },
  {
    id: "5",
    imageUrl: award2,
  },
  {
    id: "6",
    imageUrl: award3,
  },
]

export interface BusinessTeaserItem {
  id: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  imageUrl: StaticImageData
  bgColor: string
}

export interface BusinessTeaserSection {
  title: string
  description: string
  data: BusinessTeaserItem[]
}

export const BusinessTeaserData: BusinessTeaserSection[] = [
  {
    title: "Built-in Security",
    description:
      "From smart tracking to cloud tools, GP helps small businesses scale with confidence and care.",
    data: [
      {
        id: "1",
        title: "Mobile & Broadcasting",
        description:
          "Find solutions for media, broadcasting, and mobile operators to deliver seamless connectivity and engaging content experiences.",
        ctaText: "Learn More",
        ctaLink: "#",
        imageUrl: businessTeaser,
        bgColor: "#0F2461",
      },
      {
        id: "2",
        title: "Connectivity",
        description:
          "Power your business with fast, reliable data and M2M connectivity for seamless operations and real-time visibility.",
        ctaText: "Learn More",
        ctaLink: "#",
        imageUrl: businessTeaser,
        bgColor: "#5d0ec0",
      },
      {
        id: "3",
        title: "Security & Cloud Solutions",
        description:
          "Protect and scale your business with GP Shield’s enterprise security and mCentrex’s cloud collaboration platform.",
        ctaText: "Learn More",
        ctaLink: "#",
        imageUrl: businessTeaser,
        bgColor: "#016630",
      },
      {
        id: "4",
        title: "Smart Office Devices (Alo)",
        description:
          "Automate and monitor your workplace with ALO’s IoT-powered devices for smarter, safer, and more efficient operations.",
        ctaText: "Learn More",
        ctaLink: "#",
        imageUrl: businessTeaser,
        bgColor: "#460809",
      },
    ],
  },
]

export interface ImpactConnectivityItem {
  id: string
  imgUrl: StaticImageData
  /** Bold lead sentence shown on the card + in the modal title */
  title: string
  /** Remaining description text */
  subtitle: string
  /** Optional story video source; falls back to the image when absent */
  video?: string
  buttonText: string
  href: string
}

export const ImpactConnectivityData: ImpactConnectivityItem[] = [
  {
    id: "1",
    title: "Empowering marginal women.",
    subtitle:
      "Women in 2000 unions are learning the usage of internet with Grameenphone and its partners.",
    imgUrl: impact1,
    buttonText: "Read the Story",
    href: "#",
  },
  {
    id: "2",
    title: "A digital learning hub",
    subtitle: "built for the fourth industrial revolution.",
    imgUrl: impact2,
    buttonText: "Read the Story",
    href: "#",
  },
  {
    id: "3",
    title: "A digital learning hub",
    subtitle: "built for the fourth industrial revolution.",
    imgUrl: impact3,
    buttonText: "Read the Story",
    href: "#",
  },
  {
    id: "4",
    title: "Empowering marginal women.",
    subtitle:
      "Women in 2000 unions are learning the usage of internet with Grameenphone and its partners.",
    imgUrl: impact1,
    buttonText: "Read the Story",
    href: "#",
  },
  {
    id: "5",
    title: "A digital learning hub",
    subtitle: "built for the fourth industrial revolution.",
    imgUrl: impact2,
    buttonText: "Read the Story",
    href: "#",
  },
  {
    id: "6",
    title: "A digital learning hub",
    subtitle: "built for the fourth industrial revolution.",
    imgUrl: impact3,
    buttonText: "Read the Story",
    href: "#",
  },
]

export interface BuildWithYouDataProps {
  id: string
  title: string
  description: string
  video?: boolean
  buttonText?: string
  ctaHref: string
  imgUrl: StaticImageData
  fullBackground: boolean
  cardWidth: "half" | "full"
  contentAlign: "left" | "center"
  bgColor: string
}

export const BuildWithYouData: BuildWithYouDataProps[] = [
  {
    id: "1",
    title: "Smart Wireless Broadband - gpfi",
    description:
      "Fast, Reliable, and Flexible internet devices for every need.",
    buttonText: "Order Now",
    ctaHref: "#",
    imgUrl: router,
    bgColor: "#F1F5F9",
    video: false,
    contentAlign: "center",
    cardWidth: "half",
    fullBackground: false,
  },
  {
    id: "2",
    title: "GP Alo",
    description:
      "Alo IoT devices make your home and vehicle connected, safer, and smarter.",
    buttonText: "Explore Alo",
    ctaHref: "#",
    imgUrl: CardBackGround,
    bgColor: "#F1F5F9",
    video: false,
    contentAlign: "center",
    cardWidth: "half",
    fullBackground: true,
  },
  {
    id: "3",
    title: "GP Shop",
    description:
      "From phones to wearables, GP Shop delivers trusted tech to connect, protect, and perform.",
    buttonText: "Order Now",
    ctaHref: "#",
    imgUrl: CardBackGround,
    bgColor: "#F1F5F9",
    video: false,
    contentAlign: "left",
    cardWidth: "full",
    fullBackground: false,
  },
  {
    id: "4",
    title: "Smart Wireless Broadband - gpfi",
    description:
      "Fast, Reliable, and Flexible internet devices for every need.",
    buttonText: "Order Now",
    ctaHref: "#",
    imgUrl: router,
    bgColor: "#F1F5F9",
    video: false,
    contentAlign: "center",
    cardWidth: "half",
    fullBackground: false,
  },
  {
    id: "5",
    title: "GP Alo",
    description:
      "Alo IoT devices make your home and vehicle connected, safer, and smarter.",
    buttonText: "Explore Alo",
    ctaHref: "#",
    imgUrl: CardBackGround,
    bgColor: "#F1F5F9",
    video: false,
    contentAlign: "center",
    cardWidth: "half",
    fullBackground: true,
  },
]
