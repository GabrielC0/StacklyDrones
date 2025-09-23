"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, ImageIcon, Mail, Calculator, ChevronRight, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const pathname = usePathname()
  const hintTimerRef = useRef<NodeJS.Timeout | null>(null)
  const reappearTimerRef = useRef<NodeJS.Timeout | null>(null)

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/about", label: "À propos", icon: User },
    { href: "/services", label: "Prestations", icon: Briefcase },
    { href: "/portfolio", label: "Portfolio", icon: ImageIcon },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkTouchDevice()
    window.addEventListener("resize", checkTouchDevice)

    return () => window.removeEventListener("resize", checkTouchDevice)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX <= 100) {
        setIsVisible(true)
        setShowHint(false)
        if (reappearTimerRef.current) {
          clearTimeout(reappearTimerRef.current)
          reappearTimerRef.current = null
        }
      } else if (e.clientX > 200) {
        setIsVisible(false)
        if (reappearTimerRef.current) {
          clearTimeout(reappearTimerRef.current)
        }
        reappearTimerRef.current = setTimeout(() => {
          setShowHint(true)
        }, 10000)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    hintTimerRef.current = setTimeout(() => {
      setShowHint(false)
    }, 5000)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current)
      }
      if (reappearTimerRef.current) {
        clearTimeout(reappearTimerRef.current)
      }
    }
  }, [isTouchDevice])

  if (isTouchDevice) {
    return (
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-lg scale-110"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105"
                  }`}
                  onClick={handleNavClick}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}

            <div className="w-px h-6 bg-border/50 mx-2" />

            <Button
              asChild
              className="p-2 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 transition-all duration-300 hover:scale-110 shadow-lg rounded-full"
            >
              <Link href="/devis" onClick={handleNavClick}>
                <Calculator className="h-5 w-5 text-white" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <div className="fixed left-0 top-0 w-16 h-full z-40 hidden md:block" />

      {showHint && !isVisible && (
        <div className="fixed left-2 top-1/2 -translate-y-1/2 z-40 animate-pulse hidden md:block">
          <div className="bg-primary/90 backdrop-blur-sm text-white px-3 py-2 rounded-r-full shadow-lg flex items-center space-x-2 animate-bounce">
            <ChevronRight className="h-4 w-4" />
            <span className="text-sm font-medium">Menu</span>
          </div>
        </div>
      )}

      <div className="fixed left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent z-30 animate-pulse hidden md:block" />

      <nav
        className={`fixed left-4 top-1/2 -translate-y-1/2 w-20 bg-background/95 backdrop-blur-md border border-border/50 z-50 flex flex-col items-center py-6 shadow-2xl rounded-2xl transition-all duration-500 ease-out hidden md:flex ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        onMouseEnter={() => {
          setIsVisible(true)
          setShowHint(false)
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            const rect = document.elementFromPoint(50, window.innerHeight / 2)
            if (!rect?.closest("nav")) {
              setIsVisible(false)
            }
          }, 100)
        }}
      >
        <div className="flex flex-col space-y-3 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center group relative ${
                    isActive
                      ? "bg-primary text-white shadow-lg scale-110"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105"
                  }`}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={handleNavClick}
                >
                  <Icon className="h-5 w-5" />

                  {isActive && (
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-full"></div>
                  )}

                  {hoveredItem === item.href && (
                    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-in slide-in-from-left-2 duration-200">
                      {item.label}
                      <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground"></div>
                    </div>
                  )}
                </Link>
              </div>
            )
          })}
        </div>

        <div className="relative mt-4 space-y-3 flex flex-col items-center">
          <button
            aria-label="Basculer le thème"
            className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Button
            asChild
            className="p-3 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 transition-all duration-300 hover:scale-110 shadow-lg rounded-xl"
            onMouseEnter={() => setHoveredItem("cta")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/devis" className="flex items-center justify-center" onClick={handleNavClick}>
              <Calculator className="h-5 w-5 text-white" />
            </Link>
          </Button>

          {hoveredItem === "cta" && (
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-in slide-in-from-left-2 duration-200">
              Devis gratuit
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground"></div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
