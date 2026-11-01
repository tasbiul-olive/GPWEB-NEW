export interface NavigationLink {
  label: string
  description: string
  href: string
  iconSrc: string
  iconAlt: string
}

export interface MegaMenuConfig {
  title: string
  size: "compact" | "standard" | "wide"
  columns: NavigationLink[][]
  promo?: {
    src: string
    alt: string
    href: string
  }
}

export interface PrimaryNavigationItem {
  id: string
  label: string
  href: string
  menu?: MegaMenuConfig
}

export interface AudienceNavigation {
  id: "personal" | "business" | "about"
  label: string
  href: string
  routePrefixes: string[]
  primaryItems: PrimaryNavigationItem[]
}

const personalPrimaryItems: PrimaryNavigationItem[] = [
  {
    id: "recharge",
    label: "Recharge",
    href: "/recharge",
    menu: {
      title: "Recharge",
      size: "compact",
      columns: [
        [
          {
            label: "Single Recharge",
            description: "Quick top-up anytime",
            href: "/recharge",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "Flexiplan",
            description: "Plans for every need",
            href: "/flexiplan",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
        ],
        [
          {
            label: "Bulk Recharge",
            description: "Recharge many at once",
            href: "/recharge",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
        ],
      ],
    },
  },
  {
    id: "offers",
    label: "Offers",
    href: "/offers",
    menu: {
      title: "Offers",
      size: "standard",
      promo: {
        src: "/images/innovation1.png",
        alt: "Grameenphone phone offer campaign",
        href: "/offers",
      },
      columns: [
        [
          {
            label: "Internet",
            description: "Data packs for all",
            href: "/internet-packs",
            iconSrc: "/images/internet-pack.png",
            iconAlt: "",
          },
          {
            label: "Bundles",
            description: "Special offer for you",
            href: "/offers",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
          {
            label: "Entertainment",
            description: "Exclusive Streaming Packs",
            href: "/offers",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
          {
            label: "Cashback Offers",
            description: "Data packs for all",
            href: "/offers",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
          {
            label: "Prepaid & Postpaid Packages",
            description: "Plans for every need",
            href: "/offers",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
        ],
        [
          {
            label: "Minutes",
            description: "Latest deals & packs",
            href: "/minute-packs",
            iconSrc: "/images/minute-packs.png",
            iconAlt: "",
          },
          {
            label: "My Offers",
            description: "Special offer for you",
            href: "/offers",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
          {
            label: "Roaming Offers",
            description: "Best Roaming packs for you",
            href: "/roaming",
            iconSrc: "/images/plane.png",
            iconAlt: "",
          },
          {
            label: "Rate Cutters",
            description: "Special offer for you",
            href: "/offers",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
          {
            label: "Flexiplan",
            description: "Make your own pack",
            href: "/flexiplan",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
        ],
      ],
    },
  },
  {
    id: "shop",
    label: "GP Shop",
    href: "/shop",
    menu: {
      title: "GP Shop",
      size: "standard",
      promo: {
        src: "/images/innovation1.png",
        alt: "Smartphone promotion from GP Shop",
        href: "/shop",
      },
      columns: [
        [
          {
            label: "gpfi",
            description: "Unlimited wireless internet",
            href: "/gpfi",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
          {
            label: "Buy SIM",
            description: "Order SIM online",
            href: "/shop",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "Alo",
            description: "Smart home security",
            href: "/shop",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
          {
            label: "Phones",
            description: "Latest smartphones",
            href: "/shop",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "Tablets",
            description: "Work & play tablets",
            href: "/shop",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
          {
            label: "Accessories",
            description: "Smart tools for every day",
            href: "/shop",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
        ],
        [
          {
            label: "Apparel & Accessories",
            description: "GP merch & gear",
            href: "/shop",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
          {
            label: "Wearables",
            description: "Fast Wi-Fi devices",
            href: "/shop",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
          {
            label: "Modems & Routers",
            description: "Fast Wi-Fi devices",
            href: "/shop",
            iconSrc: "/images/router.png",
            iconAlt: "",
          },
          {
            label: "Preorder",
            description: "GP merch & gear",
            href: "/shop",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "Track Order",
            description: "Check delivery status",
            href: "/shop",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
          {
            label: "Sale",
            description: "Exclusive discounts",
            href: "/shop",
            iconSrc: "/images/offers.png",
            iconAlt: "",
          },
        ],
      ],
    },
  },
  {
    id: "sim-services",
    label: "Sim Services",
    href: "/sim-services",
    menu: {
      title: "SIM Services",
      size: "wide",
      columns: [
        [
          {
            label: "Buy GP SIM",
            description: "Manage your SIM easily",
            href: "/sim-services",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "SIM Replacement",
            description: "Stay connected abroad",
            href: "/sim-services",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "Switch to GP (MNP)",
            description: "Superfast mobile internet",
            href: "/sim-services",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
        ],
        [
          {
            label: "SIM Ownership Transfer",
            description: "Simple bill payment",
            href: "/sim-services",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "eSIM Migration",
            description: "Mobile banking & more",
            href: "/sim-services",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
        ],
      ],
    },
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    menu: {
      title: "Services",
      size: "wide",
      columns: [
        [
          {
            label: "Roaming",
            description: "Manage your SIM easily",
            href: "/roaming",
            iconSrc: "/images/plane.png",
            iconAlt: "",
          },
          {
            label: "5G",
            description: "Stay connected abroad",
            href: "/services",
            iconSrc: "/images/internet-pack.png",
            iconAlt: "",
          },
          {
            label: "WiFi Calling",
            description: "Superfast mobile internet",
            href: "/services",
            iconSrc: "/images/internet-pack.png",
            iconAlt: "",
          },
        ],
        [
          {
            label: "VoLTE",
            description: "Simple bill payment",
            href: "/services",
            iconSrc: "/images/mobile-recharge.png",
            iconAlt: "",
          },
          {
            label: "4G",
            description: "Mobile banking & more",
            href: "/services",
            iconSrc: "/images/internet-pack.png",
            iconAlt: "",
          },
          {
            label: "VAS & Others",
            description: "HD calls over 4G",
            href: "/services",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
        ],
      ],
    },
  },
  { id: "career", label: "Career", href: "/career" },
  { id: "gp-star", label: "GP Star", href: "/gp-star" },
  { id: "support", label: "Support", href: "/support" },
]

const businessPrimaryItems: PrimaryNavigationItem[] = [
  {
    id: "business-solutions",
    label: "Solutions",
    href: "/business",
    menu: {
      title: "Business Solutions",
      size: "standard",
      columns: [
        [
          {
            label: "Connectivity",
            description: "Reliable connectivity for business",
            href: "/business/connectivity",
            iconSrc: "/images/internet-pack.png",
            iconAlt: "",
          },
          {
            label: "Mobile & Broadcasting",
            description: "Connect audiences and services",
            href: "/business/mobile-broadcasting",
            iconSrc: "/images/connect-people-1.png",
            iconAlt: "",
          },
        ],
        [
          {
            label: "Security & Cloud",
            description: "Digital tools for growing teams",
            href: "/business/security-cloud",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
          {
            label: "Smart Office",
            description: "Connected workplace solutions",
            href: "/business/smart-office",
            iconSrc: "/images/router.png",
            iconAlt: "",
          },
        ],
      ],
    },
  },
  {
    id: "business-connectivity",
    label: "Connectivity",
    href: "/business/connectivity",
  },
  { id: "business-shop", label: "GP Shop", href: "/business/shop" },
  { id: "business-support", label: "Support", href: "/business/support" },
]

const aboutPrimaryItems: PrimaryNavigationItem[] = [
  {
    id: "about-grameenphone",
    label: "About Grameenphone",
    href: "/about",
    menu: {
      title: "About Grameenphone",
      size: "standard",
      columns: [
        [
          {
            label: "Our Story",
            description: "Learn about Grameenphone",
            href: "/about",
            iconSrc: "/images/gpfi.png",
            iconAlt: "",
          },
          {
            label: "Social Impact",
            description: "Connecting people to possibilities",
            href: "/social-impact",
            iconSrc: "/images/connect-people-2.png",
            iconAlt: "",
          },
          {
            label: "Sustainability",
            description: "Our sustainability initiatives",
            href: "/sustainability",
            iconSrc: "/images/connect-people-3.png",
            iconAlt: "",
          },
        ],
        [
          {
            label: "Investor Relations",
            description: "Information for investors",
            href: "/investor-relations",
            iconSrc: "/images/awards1.png",
            iconAlt: "",
          },
          {
            label: "Board of Directors",
            description: "Meet our board",
            href: "/board-of-directors",
            iconSrc: "/images/awards2.png",
            iconAlt: "",
          },
          {
            label: "Careers",
            description: "Explore opportunities at GP",
            href: "/about/careers",
            iconSrc: "/images/awards3.png",
            iconAlt: "",
          },
        ],
      ],
    },
  },
  { id: "about-impact", label: "Social Impact", href: "/social-impact" },
  {
    id: "about-investors",
    label: "Investor Relations",
    href: "/investor-relations",
  },
  { id: "about-careers", label: "Careers", href: "/about/careers" },
]

export const audienceNavigation: AudienceNavigation[] = [
  {
    id: "personal",
    label: "Personal",
    href: "/",
    routePrefixes: ["/", "/personal"],
    primaryItems: personalPrimaryItems,
  },
  {
    id: "business",
    label: "Business",
    href: "/business",
    routePrefixes: ["/business"],
    primaryItems: businessPrimaryItems,
  },
  {
    id: "about",
    label: "About Us",
    href: "/about",
    routePrefixes: [
      "/about",
      "/investor-relations",
      "/board-of-directors",
      "/social-impact",
      "/sustainability",
      "/sponsorship",
    ],
    primaryItems: aboutPrimaryItems,
  },
]

export function getAudienceForPath(pathname: string): AudienceNavigation {
  const audience = audienceNavigation.find(({ routePrefixes }) =>
    routePrefixes.some((prefix) =>
      prefix === "/"
        ? pathname === "/"
        : pathname === prefix || pathname.startsWith(`${prefix}/`)
    )
  )

  return audience ?? audienceNavigation[0]!
}
