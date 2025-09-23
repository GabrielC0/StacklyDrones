"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import img1 from "@/public/DJI_0042_2.jpg"
import img2 from "@/public/DJI_00265.jpg"
import img3 from "@/public/DJI_0020_1.jpg"
import img4 from "@/public/DJI_0022_6.jpg"
import img5 from "@/public/DJI_0018_6.jpg"
import img6 from "@/public/DJI_0018_3.jpg"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play, X } from "lucide-react"

export function PortfolioPreviewGrid() {
  const images = [img1, img2, img3, img4, img5, img6]

  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const touchStartXRef = useRef<number | null>(null)
  const touchCurrentXRef = useRef<number | null>(null)
  const [isLoadingFull, setIsLoadingFull] = useState<boolean>(false)

  const selectedSrc = open ? images[currentIndex] : null

  const goPrev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setCurrentIndex((i) => (i + 1) % images.length)

  // Navigation clavier
  // Flèche gauche/droite pour naviguer, Échap géré par Dialog
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
    if (open) {
      setIsLoadingFull(true)
    } else {
      setIsLoadingFull(false)
    }
  }, [open, currentIndex])


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {images.map((src, index) => (
          <div key={src} className="group relative overflow-hidden rounded-lg aspect-video hover:shadow-xl transition-all duration-500">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Aperçu mariage ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2}
                placeholder="blur"
                loading={index < 2 ? undefined : "lazy"}
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <Button
                variant="secondary"
                size="sm"
                className="transform scale-75 group-hover:scale-100 transition-transform duration-300 text-xs sm:text-sm"
                onClick={() => {
                  setCurrentIndex(index)
                  setOpen(true)
                }}
              >
                Voir en grand
              </Button>
            </div>
          </div>
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
              if (deltaX > threshold) {
                goPrev()
              } else if (deltaX < -threshold) {
                goNext()
              }
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
            {!isLoadingFull ? null : (
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
                onLoadingComplete={() => setIsLoadingFull(false)}
              />)
            }
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


