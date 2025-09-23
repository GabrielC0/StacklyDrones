"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

type PortfolioGridProps = {
  images: string[]
}

export function PortfolioGrid({ images }: PortfolioGridProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isLoadingFull, setIsLoadingFull] = useState<boolean>(false)
  const touchStartXRef = useRef<number | null>(null)
  const touchCurrentXRef = useRef<number | null>(null)

  const selectedSrc = open ? images[currentIndex] : null

  const goPrev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setCurrentIndex((i) => (i + 1) % images.length)

  // clavier
  if (typeof window !== "undefined" && open) {
    window.onkeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goPrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goNext()
      }
    }
  } else if (typeof window !== "undefined") {
    window.onkeydown = null
  }

  useEffect(() => {
    if (open) setIsLoadingFull(true)
    else setIsLoadingFull(false)
  }, [open, currentIndex])

  return (
    <>
      {/** Generic tiny blur placeholder */}
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {(() => null)()}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, idx) => (
          <Card key={src} className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={src}
                alt={src}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={idx < 3}
                loading={idx < 3 ? undefined : "lazy"}
                decoding="async"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground truncate mr-2">{src.split("/").pop()}</p>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    setCurrentIndex(idx)
                    setOpen(true)
                  }}
                >
                  Voir en grand
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-none w-screen h-screen p-0 bg-black border-none rounded-none">
          <div
            className="relative w-full h-full"
            onTouchStart={(e) => {
              touchStartXRef.current = e.touches[0].clientX
              touchCurrentXRef.current = e.touches[0].clientX
            }}
            onTouchMove={(e) => {
              touchCurrentXRef.current = e.touches[0].clientX
            }}
            onTouchEnd={() => {
              if (touchStartXRef.current == null || touchCurrentXRef.current == null) return
              const deltaX = touchCurrentXRef.current - touchStartXRef.current
              const threshold = 50
              if (deltaX > threshold) goPrev()
              else if (deltaX < -threshold) goNext()
              touchStartXRef.current = null
              touchCurrentXRef.current = null
            }}
          >
            <button
              aria-label="Fermer"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="absolute top-4 left-4 z-10 px-2 py-1 rounded bg-black/60 text-white text-xs sm:text-sm">
              {currentIndex + 1} / {images.length}
            </div>
            {isLoadingFull && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="h-8 w-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span className="text-xs opacity-80">Chargement…</span>
                </div>
              </div>
            )}
            {images.length > 1 && (
              <>
                <button
                  aria-label="Précédente"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                  onClick={goPrev}
                >
                  &#8592;
                </button>
                <button
                  aria-label="Suivante"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                  onClick={goNext}
                >
                  &#8594;
                </button>
              </>
            )}
            {selectedSrc && (
              <Image
                src={selectedSrc}
                alt="Aperçu en grand"
                fill
                sizes="100vw"
                className={`object-contain transition-opacity duration-300 ${isLoadingFull ? "opacity-0" : "opacity-100"}`}
                priority
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                onLoadingComplete={() => setIsLoadingFull(false)}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


