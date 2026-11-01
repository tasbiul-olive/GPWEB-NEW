export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterTab {
  label: string
  href: string
}

export const footerTabs: FooterTab[] = [
  { label: "Personal", href: "/" },
  { label: "Business", href: "/" },
]

export const footerColumns: FooterColumn[] = [
  {
    title: "Story of GrameenPhone",
    links: [
      { label: "About GP", href: "/about" },
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "Board of Directors", href: "/board-of-directors" },
      { label: "Social Impact", href: "/social-impact" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Sponsorship", href: "/sponsorship" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Help & Support", href: "/help-support" },
      { label: "Track GP Shop Order", href: "/track-order" },
      { label: "Contact us", href: "/contact" },
      { label: "Find a store", href: "/find-a-store" },
      { label: "ISD Tariff", href: "/isd-tariff" },
      { label: "SignLine", href: "/signline" },
    ],
  },
  {
    title: "More from GP",
    links: [
      { label: "Suppliers and Partners", href: "/suppliers-partners" },
      { label: "Infrastructure Sharings", href: "/infrastructure-sharings" },
      { label: "Digital Services", href: "/digital-services" },
      { label: "BTRC Directives", href: "/btrc-directives" },
      { label: "GP STAR", href: "/gp-star" },
      { label: "4G", href: "/4g" },
    ],
  },
]

export interface SocialLink {
  id: string
  label: string
  href: string
}

export const SocialLinks: SocialLink[] = [
  { id: "1", label: "Facebook", href: "/" },
  { id: "2", label: "YouTube", href: "/" },
  { id: "3", label: "LinkedIn", href: "/" },
  { id: "4", label: "X", href: "/" },
  { id: "5", label: "Instagram", href: "/" },
]

export interface StoreBadge {
  id: string
  label: string
  href: string
}

export const StoreBadges: StoreBadge[] = [
  { id: "1", label: "Get it on Google Play", href: "/" },
  { id: "2", label: "Download on the App Store", href: "/" },
]

export const mygpApp = {
  title: "MyGP App",
  qrAlt: "Scan to download the MyGP app",
}
