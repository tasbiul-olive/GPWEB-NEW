import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { NotoSansBengali, Telenor } from "@workspace/ui/lib/fonts"
import type { ReactNode } from "react"
import SiteHeader from "@/features/navigation/components/site-header"
import Footer from "@workspace/ui/components/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", NotoSansBengali.variable, Telenor.variable)}
    >
      <body>
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
