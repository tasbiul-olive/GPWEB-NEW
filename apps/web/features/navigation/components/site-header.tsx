"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { FocusEvent, KeyboardEvent } from "react"

import NavbarAction from "@workspace/ui/components/navbar-action"
import NavbarGpLogo from "@workspace/ui/components/navbar-gp-logo"
import NavbarSearch from "@workspace/ui/components/navbar-search"
import LanguageSwitch from "@workspace/ui/components/language-switch"
import {
  SheetClose,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

import {
  audienceNavigation,
  getAudienceForPath,
  type AudienceNavigation,
  type MegaMenuConfig,
  type PrimaryNavigationItem,
} from "../config/navigation"

const CLOSE_DELAY_MS = 140
const PANEL_TRANSITION_MS = 180

export default function SiteHeader() {
  const pathname = usePathname()
  const activeAudience = getAudienceForPath(pathname)
  const [openItemId, setOpenItemId] = useState<string | null>(null)
  const [displayedItemId, setDisplayedItemId] = useState<string | null>(null)
  const [mobileOpenItemId, setMobileOpenItemId] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>())

  const activeItem = activeAudience.primaryItems.find(
    (item) => item.id === openItemId && item.menu
  )
  const retainedItem = activeAudience.primaryItems.find(
    (item) => item.id === displayedItemId && item.menu
  )
  const displayedItem = activeItem ?? retainedItem

  useEffect(() => {
    setOpenItemId(null)
    setMobileOpenItemId(null)
  }, [pathname])

  useEffect(() => {
    if (openItemId) {
      setDisplayedItemId(openItemId)
      return
    }

    const timer = setTimeout(
      () => setDisplayedItemId(null),
      PANEL_TRANSITION_MS
    )
    return () => clearTimeout(timer)
  }, [openItemId])

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    []
  )

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function scheduleClose() {
    if (openItemId) {
      const activeElement = document.activeElement
      const menuPanel = document.getElementById(`mega-menu-${openItemId}`)
      const focusedWithinMenu =
        activeElement &&
        (triggerRefs.current.get(openItemId)?.contains(activeElement) ||
          menuPanel?.contains(activeElement))

      if (focusedWithinMenu) return
    }

    cancelClose()
    closeTimer.current = setTimeout(() => setOpenItemId(null), CLOSE_DELAY_MS)
  }

  function closeMenu(restoreFocus = false) {
    const itemId = openItemId
    cancelClose()
    setOpenItemId(null)

    if (restoreFocus && itemId) {
      requestAnimationFrame(() => triggerRefs.current.get(itemId)?.focus())
    }
  }

  function handleHeaderKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && openItemId) {
      event.preventDefault()
      closeMenu(true)
    }
  }

  function handleHeaderBlur(event: FocusEvent<HTMLElement>) {
    const nextTarget = event.relatedTarget
    if (
      !(nextTarget instanceof Node) ||
      !event.currentTarget.contains(nextTarget)
    ) {
      closeMenu()
    }
  }

  return (
    <>
      {displayedItem && (
        <button
          type="button"
          aria-label="Close navigation menu"
          aria-hidden={!activeItem}
          inert={!activeItem}
          tabIndex={-1}
          onClick={() => closeMenu()}
          className={cn(
            "fixed inset-x-0 top-[var(--navbar-height)] z-40 h-[calc(100dvh-var(--navbar-height))] cursor-default bg-slate-950/20 backdrop-blur-[3px] transition-opacity duration-150 motion-reduce:backdrop-blur-none motion-reduce:transition-none",
            activeItem ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        />
      )}

      <header
        className="sticky top-0 z-50 bg-white"
        onPointerEnter={cancelClose}
        onPointerLeave={scheduleClose}
        onKeyDown={handleHeaderKeyDown}
        onBlur={handleHeaderBlur}
      >
        <div className="hidden bg-[#F8FAFC] xl:block">
          <div className="mx-auto flex h-14 max-w-306 items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <NavbarGpLogo />
              <nav aria-label="Audience" className="flex items-center">
                {audienceNavigation.map((audience) => (
                  <AudienceLink
                    key={audience.id}
                    audience={audience}
                    active={audience.id === activeAudience.id}
                  />
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href="/download"
                className="text-sm font-semibold text-[#0171E2] transition-colors hover:text-[#005bb8] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0171E2]"
              >
                Download MyGP
              </Link>
              <span className="h-6 w-px bg-[#D9E2EC]" aria-hidden="true" />
              <LanguageSwitch />
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-16 max-w-306 items-center justify-between px-4 md:px-6">
          <nav
            aria-label={`${activeAudience.label} navigation`}
            className="hidden items-center gap-1 xl:flex"
          >
            {activeAudience.primaryItems.map((item) => {
              const isOpen = openItemId === item.id
              const isCurrent = isPrimaryItemActive(item, pathname)

              if (!item.menu) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm text-[#364152] transition-colors duration-150 hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0171E2]",
                      isCurrent && "bg-[#F1F5F9] font-medium"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <button
                  key={item.id}
                  ref={(element) => {
                    if (element) triggerRefs.current.set(item.id, element)
                    else triggerRefs.current.delete(item.id)
                  }}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={isOpen ? `mega-menu-${item.id}` : undefined}
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "touch") {
                      cancelClose()
                      setOpenItemId(item.id)
                    }
                  }}
                  onFocus={() => setOpenItemId(item.id)}
                  onClick={() => {
                    cancelClose()
                    setOpenItemId(item.id)
                  }}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm text-[#364152] transition-colors duration-150 hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0171E2]",
                    (isOpen || isCurrent) && "bg-[#F1F5F9] font-medium"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-3.5 transition-transform duration-200 motion-reduce:transition-none",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              )
            })}
          </nav>

          <div className="hidden items-center gap-5 text-sm xl:flex">
            <NavbarSearch />
            <NavbarAction />
          </div>

          <div className="flex w-full items-center justify-between xl:hidden">
            <Sheet>
              <SheetTrigger
                aria-label="Open navigation"
                className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-[#0171E2]"
              >
                <Menu aria-hidden="true" className="size-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[min(88vw,24rem)] p-0">
                <SheetHeader className="border-b border-[#E3E8EF] px-5 py-5">
                  <SheetTitle>Explore Grameenphone</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="overflow-y-auto">
                  <div className="flex gap-2 border-b border-[#E3E8EF] p-4">
                    {audienceNavigation.map((audience) => (
                      <AudienceLink
                        key={audience.id}
                        audience={audience}
                        active={audience.id === activeAudience.id}
                        closeOnSelect
                      />
                    ))}
                  </div>
                  {activeAudience.primaryItems.map((item) => {
                    const isExpanded = mobileOpenItemId === item.id

                    if (!item.menu) {
                      return (
                        <SheetClose asChild key={item.id}>
                          <Link
                            href={item.href}
                            className="flex min-h-12 items-center border-b border-[#E3E8EF] px-5 text-sm text-[#202939] hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-[#0171E2]"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      )
                    }

                    return (
                      <div key={item.id} className="border-b border-[#E3E8EF]">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={
                            isExpanded ? `mobile-menu-${item.id}` : undefined
                          }
                          onClick={() =>
                            setMobileOpenItemId((current) =>
                              current === item.id ? null : item.id
                            )
                          }
                          className="flex min-h-12 w-full items-center justify-between px-5 text-left text-sm text-[#202939] hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-[#0171E2]"
                        >
                          {item.label}
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              "size-4 transition-transform motion-reduce:transition-none",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </button>
                        <div
                          id={`mobile-menu-${item.id}`}
                          hidden={!isExpanded}
                          className="bg-[#F8FAFC] px-4 pb-3"
                        >
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="block rounded-lg px-2 py-3 text-sm font-semibold text-[#0171E2] focus-visible:outline-2 focus-visible:outline-[#0171E2]"
                            >
                              View all {item.label}
                            </Link>
                          </SheetClose>
                          <MobileMenuLinks menu={item.menu} />
                        </div>
                      </div>
                    )
                  })}
                  <div className="p-5">
                    <NavbarSearch showOnMobile />
                    <div className="mt-4">
                      <NavbarAction />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <NavbarGpLogo />
            <NavbarAction />
          </div>
        </div>

        {displayedItem?.menu && (
          <div
            id={`mega-menu-${displayedItem.id}`}
            aria-hidden={!activeItem}
            inert={!activeItem}
            onPointerEnter={cancelClose}
            className={cn(
              "absolute inset-x-0 top-full hidden px-6 pt-3 transition-[opacity,transform] duration-150 motion-reduce:transition-none xl:block",
              activeItem
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            )}
          >
            <div className="mx-auto max-w-306">
              <MegaMenuPanel
                key={displayedItem.id}
                item={displayedItem}
                menu={displayedItem.menu}
              />
            </div>
          </div>
        )}
      </header>
    </>
  )
}

function AudienceLink({
  audience,
  active,
  closeOnSelect = false,
}: {
  audience: AudienceNavigation
  active: boolean
  closeOnSelect?: boolean
}) {
  const link = (
    <Link
      href={audience.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full px-3 py-1.5 text-sm text-[#536176] transition-colors duration-150 hover:bg-white hover:text-[#0171E2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0171E2]",
        active && "font-semibold text-[#0171E2]"
      )}
    >
      {audience.label}
    </Link>
  )

  return closeOnSelect ? <SheetClose asChild>{link}</SheetClose> : link
}

function isPrimaryItemActive(
  item: PrimaryNavigationItem,
  pathname: string
): boolean {
  const links = item.menu?.columns.flat() ?? []
  return [item.href, ...links.map((link) => link.href)].some(
    (href) => pathname === href || pathname.startsWith(`${href}/`)
  )
}

function MegaMenuPanel({
  item,
  menu,
}: {
  item: PrimaryNavigationItem
  menu: MegaMenuConfig
}) {
  return (
    <section
      aria-labelledby={`mega-menu-heading-${item.id}`}
      className={cn(
        "w-full animate-in rounded-3xl bg-white p-6 text-[#0C1026] shadow-[0_16px_48px_rgba(16,24,40,0.18)] ring-1 ring-black/5 duration-150 fade-in slide-in-from-top-1 motion-reduce:animate-none",
        menu.size === "compact" && "max-w-[34rem]",
        menu.size === "standard" && "max-w-[50rem]",
        menu.size === "wide" && "max-w-[60rem]"
      )}
    >
      <div className="mb-5 flex items-center justify-between border-b border-[#E3E8EF] pb-4">
        <h2
          id={`mega-menu-heading-${item.id}`}
          className="text-sm font-semibold tracking-wide text-[#697586] uppercase"
        >
          {menu.title}
        </h2>
        <Link
          href={item.href}
          className="text-sm font-medium text-[#0171E2] transition-colors hover:text-[#005bb8] focus-visible:outline-2 focus-visible:outline-[#0171E2]"
        >
          View all
        </Link>
      </div>
      <div
        className={cn(
          "grid gap-x-4 gap-y-1",
          menu.promo
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(15rem,0.9fr)]"
            : "md:grid-cols-2"
        )}
      >
        {menu.columns.map((column, columnIndex) => (
          <div
            key={`${item.id}-column-${columnIndex}`}
            className="grid content-start gap-1"
          >
            {column.map((entry) => (
              <MenuLink key={`${entry.href}-${entry.label}`} entry={entry} />
            ))}
          </div>
        ))}
        {menu.promo && (
          <Link
            href={menu.promo.href}
            className="group relative mt-3 hidden min-h-48 overflow-hidden rounded-2xl bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-[#0171E2] lg:block"
          >
            <Image
              src={menu.promo.src}
              alt={menu.promo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 0px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          </Link>
        )}
      </div>
    </section>
  )
}

function MobileMenuLinks({ menu }: { menu: MegaMenuConfig }) {
  return (
    <div className="grid gap-1">
      {menu.columns.flat().map((entry) => (
        <MenuLink
          key={`${entry.href}-${entry.label}`}
          entry={entry}
          compact
          closeOnSelect
        />
      ))}
    </div>
  )
}

function MenuLink({
  entry,
  compact = false,
  closeOnSelect = false,
}: {
  entry: MegaMenuConfig["columns"][number][number]
  compact?: boolean
  closeOnSelect?: boolean
}) {
  const link = (
    <Link
      href={entry.href}
      className={cn(
        "group flex min-h-17 items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-150 hover:bg-[#F1F5F9] focus-visible:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-[#0171E2]",
        compact && "min-h-14 px-2"
      )}
    >
      <span className="relative flex size-9 shrink-0 items-center justify-center">
        <Image
          src={entry.iconSrc}
          alt={entry.iconAlt}
          fill
          sizes="36px"
          className="object-contain"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm leading-5 font-medium text-[#0C1026]">
          {entry.label}
        </span>
        <span className="mt-0.5 block text-xs leading-4 text-[#697586]">
          {entry.description}
        </span>
      </span>
    </Link>
  )

  return closeOnSelect ? <SheetClose asChild>{link}</SheetClose> : link
}
