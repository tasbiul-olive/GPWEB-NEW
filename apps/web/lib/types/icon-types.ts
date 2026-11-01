import type { StaticImageData } from "next/image"

export interface ImageIcon {
  type: "image"
  src: StaticImageData
  alt: string
}

export interface RechargeItem {
  id: string
  title: string
  ctaLabel: string
  ctaHref: string
  icon: ImageIcon
}

export interface FeatureIconItem {
  id: string
  label: string
  href: string
  icon: ImageIcon
}
