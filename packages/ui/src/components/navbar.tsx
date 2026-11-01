import React from "react"
import NavbarTop from "@workspace/ui/components/navbar-top"
import NavbarMain from "@workspace/ui/components/navbar-main"

interface NavBarProp {
  activeTopUrl?: string
  activeMainUrl?: string
}

export default function Navbar({ activeMainUrl }: NavBarProp) {
  return (
    <div className="sticky top-0 z-50">
      <NavbarTop></NavbarTop>
      <NavbarMain activeUrl={activeMainUrl}></NavbarMain>
    </div>
  )
}
