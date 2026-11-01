"use client"
import React, { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Language } from "@workspace/ui/lib/types"

interface LanguageSwitchProp {
  lang?: Language[]
  onLangChange?: (lang: Language) => void
}

export default function LanguageSwitch({
  lang,
  onLangChange,
}: LanguageSwitchProp) {
  const [active, setActive] = useState<Language>("ENG")

  const select = (selectedLang: Language) => {
    setActive(selectedLang)
    onLangChange?.(selectedLang)
  }

  const languageOptions = lang ?? ["ENG", "BAN"]
  return (
    <div
      className="flex items-center rounded-full border border-[#E3E8EF] bg-white p-0.5 font-medium text-black"
      role="group"
      aria-label="LanguageSwitch"
    >
      {languageOptions.map((item: Language) => (
        <button
          className={cn(
            "rounded-full px-3 py-1 transition-colors",
            active === item ? "bg-[#0171E2] text-white" : ""
          )}
          key={item}
          type="button"
          onClick={() => select(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
