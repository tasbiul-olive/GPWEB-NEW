import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

interface CommonSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
}

export default function CommonSection({
  className,
  children,
  fullWidth = false,
  ...props
}: CommonSectionProps) {
  return (
    <div
      className={cn(
        fullWidth ? "w-full" : "mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
