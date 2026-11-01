import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

interface CardContentProps {
  title: string
  description: string
  buttonText?: string
  ctaHref: string
  contentAlign?: "left" | "center"
  className?: string
}

export default function CardContent({
  title,
  description,
  buttonText,
  ctaHref,
  contentAlign = "left",
  className,
}: CardContentProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col gap-4",
        contentAlign === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      <div className="space-y-2 text-black">
        <h3 className={cn("text-2xl leading-tight font-bold sm:text-3xl")}>
          {title}
        </h3>
        <p className={cn("text-sm sm:text-base")}>{description}</p>
      </div>
      {buttonText && (
        <Button asChild className="rounded-full bg-blue-600 px-6 py-5">
          <Link href={ctaHref}>{buttonText}</Link>
        </Button>
      )}
    </div>
  )
}
