import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Camera,
  Award,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Bone as Drone,
  Video,
  ImageIcon,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Supprimé le badge "Vidéaste professionnel" */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Passionné par l'art de <span className="text-primary">capturer l'émotion</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Depuis plus de 5 ans, je transforme vos moments précieux en souvenirs inoubliables grâce à la magie de
                la vidéo aérienne par drone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Discutons de votre projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">Voir mes réalisations</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('/placeholder.svg?key=photographer-portrait')`,
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Événements filmés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">Mon parcours</h2>
            <p className="text-xl text-muted-foreground">Une passion devenue expertise professionnelle</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-primary text-lg font-semibold mb-2">2019</div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Les débuts</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground">
                  Tout a commencé par une passion pour la photographie et la vidéo. J'ai découvert l'univers du drone et
                  ses possibilités créatives infinies. Après avoir obtenu ma certification, j'ai réalisé mes premiers
                  projets pour des amis et la famille.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-primary text-lg font-semibold mb-2">2021</div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Professionnalisation</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground">
                  Face au succès de mes premières réalisations, j'ai décidé de me lancer professionnellement.
                  Investissement dans du matériel haut de gamme, formation continue et développement d'une approche
                  artistique unique.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-primary text-lg font-semibold mb-2">Aujourd'hui</div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Excellence reconnue</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground">
                  Plus de 500 événements filmés, des clients satisfaits dans toute la France, et une réputation
                  d'excellence qui me permet de collaborer avec les plus beaux projets. Ma mission : transformer chaque
                  moment en œuvre d'art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Equipment */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Mon expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un savoir-faire technique au service de votre créativité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <Drone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Pilotage expert</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Certification DGAC
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Assurance professionnelle
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Vol en zone urbaine
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Montage créatif</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Adobe Premiere Pro
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    DaVinci Resolve
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Étalonnage professionnel
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <ImageIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Post-production</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Retouche photo
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Effets visuels
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Livraison multi-format
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Equipment */}
          <div className="bg-card rounded-lg p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Matériel professionnel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <Drone className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">DJI Inspire 2</h4>
                <p className="text-sm text-muted-foreground">Caméra Zenmuse X5s 4K/60fps</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <Video className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">Station de montage</h4>
                <p className="text-sm text-muted-foreground">Mac Studio M2 Ultra</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <Award className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">Accessoires</h4>
                <p className="text-sm text-muted-foreground">Filtres ND, batteries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">Mes valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ce qui guide mon travail au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">Chaque projet mérite le meilleur de mon savoir-faire</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Écoute</h3>
              <p className="text-muted-foreground text-sm">Votre vision est au cœur de ma création</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Ponctualité</h3>
              <p className="text-muted-foreground text-sm">Respect des délais et des engagements pris</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Proximité</h3>
              <p className="text-muted-foreground text-sm">Disponible partout en France pour vos événements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Chaque histoire mérite d'être racontée avec passion et créativité
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
            <Link href="/contact">
              Contactez-moi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
