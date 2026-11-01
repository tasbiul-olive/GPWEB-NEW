import type { ReactNode } from "react"

export interface FaqItem {
  value: string
  trigger: string
  content: ReactNode
}

export interface FaqAction {
  label: string
  variant: "primary" | "secondary"
  href?: string
  icon?: ReactNode
}
