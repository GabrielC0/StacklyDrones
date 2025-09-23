import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "StacklyDrones - Vidéaste Drone Professionnel",
    template: "%s | StacklyDrones",
  },
  description:
    "Vidéaste professionnel spécialisé dans la captation aérienne par drone pour mariages, événements et entreprises. Images 4K, montage de qualité.",
  metadataBase: new URL("https://stacklydrones.fr"),
  openGraph: {
    title: "StacklyDrones - Vidéaste Drone Professionnel",
    description:
      "Vidéaste professionnel spécialisé dans la captation aérienne par drone pour mariages, événements et entreprises. Images 4K, montage de qualité.",
    url: "https://stacklydrones.fr",
    siteName: "StacklyDrones",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/stunning-aerial-drone-shot-of-wedding-venue-at-sun.jpg",
        width: 1200,
        height: 630,
        alt: "StacklyDrones - Vidéaste Drone Professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StacklyDrones - Vidéaste Drone Professionnel",
    description:
      "Vidéaste professionnel spécialisé dans la captation aérienne par drone pour mariages, événements et entreprises. Images 4K, montage de qualité.",
    images: ["/stunning-aerial-drone-shot-of-wedding-venue-at-sun.jpg"],
  },
  icons: {
    icon: "/placeholder-logo.png",
    shortcut: "/placeholder-logo.png",
    apple: "/placeholder-logo.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
