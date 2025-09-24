import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import fs from "node:fs"
import path from "node:path"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const dir = path.join(process.cwd(), "public", "portfolio")
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
    .sort()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Mes <span className="text-primary">réalisations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty">
            Découvrez une sélection de mes projets récents. Chaque vidéo raconte une histoire unique, capturée avec
            passion et créativité depuis les airs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Voir mes prestations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filtrage supprimé */}

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid images={files.map((n) => `/portfolio/${n}`)} />

          {/* Load More retiré */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card min-h-[70vh] flex items-center justify-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">Quelques chiffres</h2>
            <p className="text-xl text-muted-foreground">Le résultat de plusieurs années de passion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Événements filmés</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="text-6xl text-primary mb-4">"</div>
            <p className="text-xl text-card-foreground mb-6 italic">
              Un travail exceptionnel ! Les images de notre mariage sont absolument magnifiques. Nous revivons notre
              jour J à chaque visionnage. Merci pour ces souvenirs inoubliables.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?key=client-testimonial"
                  alt="Photo du client"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Marie & Thomas</div>
                <div className="text-sm text-muted-foreground">Mariage Château de Versailles</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Votre projet mérite le même niveau d'excellence
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contactez-moi dès aujourd'hui pour discuter de votre vision et créer ensemble des images inoubliables
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
            <Link href="/contact">
              Démarrer mon projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
