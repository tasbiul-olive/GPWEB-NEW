import type { FeatureIconItem, RechargeItem } from "../../lib/types/icon-types"

import gpfi from "../images/gpfi.png"
import minutePacksImage from "../images/minute-packs.png"
import offersImage from "../images/offers.png"
import planeImage from "../images/plane.png"
import internetPack from "../images/internet-pack.png"
import mobileRecharge from "../images/mobile-recharge.png"

export const rechargeItems: RechargeItem[] = [
  {
    id: "recharge-balance",
    title: "Recharge Mobile Balance",
    ctaLabel: "Recharge Now",
    ctaHref: "/recharge",
    icon: {
      type: "image",
      src: mobileRecharge,
      alt: "Recharge mobile balance",
    },
  },
  {
    id: "recharge-bundle",
    title: "Bundle & Save on Data",
    ctaLabel: "View Bundles",
    ctaHref: "/bundles",
    icon: {
      type: "image",
      src: mobileRecharge,
      alt: "Bundle and save on data",
    },
  },
]

export const featureIconItems: FeatureIconItem[] = [
  {
    id: "1",
    label: "Roaming",
    href: "/roaming",
    icon: { type: "image", src: planeImage, alt: "Roaming" },
  },
  {
    id: "2",
    label: "Offers",
    href: "/offers",
    icon: { type: "image", src: offersImage, alt: "Offers" },
  },
  {
    id: "3",
    label: "Minute Packs",
    href: "/minute-packs",
    icon: { type: "image", src: minutePacksImage, alt: "Minute Packs" },
  },
  {
    id: "4",
    label: "Internet Packs",
    href: "/internet-packs",
    icon: { type: "image", src: internetPack, alt: "Internet Packs" },
  },
  {
    id: "5",
    label: "gpfi",
    href: "/gpfi",
    icon: { type: "image", src: gpfi, alt: "gpfi" },
  },
  {
    id: "6",
    label: "GP Points",
    href: "/gp-points",
    icon: { type: "image", src: internetPack, alt: "GP Points" },
  },
  {
    id: "7",
    label: "GP Star",
    href: "/gp-star",
    icon: { type: "image", src: offersImage, alt: "GP Star" },
  },
  {
    id: "8",
    label: "Store Locator",
    href: "/store-locator",
    icon: { type: "image", src: gpfi, alt: "Store Locator" },
  },
  {
    id: "9",
    label: "Flexiplan",
    href: "/flexiplan",
    icon: { type: "image", src: planeImage, alt: "Flexiplan" },
  },
  {
    id: "10",
    label: "See All Services",
    href: "/services",
    icon: { type: "image", src: gpfi, alt: "See All Services" },
  },
]
