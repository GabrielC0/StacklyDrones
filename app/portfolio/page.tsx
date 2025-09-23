"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Play, Heart, Building2, Trophy, MapPin, Camera, ArrowRight, ExternalLink, Calendar, Eye } from "lucide-react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "Tous les projets", icon: Camera },
    { id: "mariage", label: "Mariages", icon: Heart },
    { id: "entreprise", label: "Entreprise", icon: Building2 },
    { id: "sport", label: "Sport", icon: Trophy },
    { id: "immobilier", label: "Immobilier", icon: MapPin },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Mariage Sarah & Antoine",
      category: "mariage",
      location: "Château de Versailles",
      date: "Septembre 2024",
      image: "/beautiful-aerial-wedding-ceremony-drone-shot-with-.jpg",
      videoUrl: "https://youtube.com/watch?v=example1",
      description: "Captation complète d'un mariage de rêve dans les jardins du château",
      tags: ["4K", "Montage cinéma", "Photos aériennes"],
      views: "12.5K",
    },
    {
      id: 2,
      title: "Lancement Produit TechCorp",
      category: "entreprise",
      location: "Paris La Défense",
      date: "Octobre 2024",
      image: "/corporate-drone-footage-of-modern-office-building-.jpg",
      videoUrl: "https://youtube.com/watch?v=example2",
      description: "Vidéo promotionnelle pour le lancement d'un nouveau produit tech",
      tags: ["Corporate", "Motion design", "Branding"],
      views: "8.2K",
    },
    {
      id: 3,
      title: "Championnat de Trail",
      category: "sport",
      location: "Chamonix",
      date: "Août 2024",
      image: "/dynamic-aerial-sports-event-drone-footage-with-ath.jpg",
      videoUrl: "https://youtube.com/watch?v=example3",
      description: "Captation dynamique d'une course de trail en montagne",
      tags: ["Sport extrême", "Slow motion", "Paysages"],
      views: "15.7K",
    },
    {
      id: 4,
      title: "Villa Moderne Cannes",
      category: "immobilier",
      location: "Cannes",
      date: "Juillet 2024",
      image: "/placeholder.svg?key=luxury-villa-cannes",
      videoUrl: "https://youtube.com/watch?v=example4",
      description: "Présentation d'une villa de luxe avec vue mer exceptionnelle",
      tags: ["Immobilier de luxe", "Visite virtuelle", "Vue mer"],
      views: "6.3K",
    },
    {
      id: 5,
      title: "Mariage Emma & Lucas",
      category: "mariage",
      location: "Provence",
      date: "Juin 2024",
      image: "/stunning-aerial-drone-shot-of-wedding-venue-at-sun.jpg",
      videoUrl: "https://youtube.com/watch?v=example5",
      description: "Mariage champêtre dans les lavandes de Provence",
      tags: ["Provence", "Golden hour", "Romantique"],
      views: "9.8K",
    },
    {
      id: 6,
      title: "Inauguration Usine",
      category: "entreprise",
      location: "Lyon",
      date: "Mai 2024",
      image: "/placeholder.svg?key=factory-inauguration",
      videoUrl: "https://youtube.com/watch?v=example6",
      description: "Captation de l'inauguration d'une nouvelle usine automobile",
      tags: ["Industrie", "Événement", "Institutionnel"],
      views: "4.1K",
    },
    {
      id: 7,
      title: "Compétition de Surf",
      category: "sport",
      location: "Biarritz",
      date: "Avril 2024",
      image: "/placeholder.svg?key=surf-competition",
      videoUrl: "https://youtube.com/watch?v=example7",
      description: "Championnat de surf avec des conditions exceptionnelles",
      tags: ["Surf", "Océan", "Compétition"],
      views: "11.2K",
    },
    {
      id: 8,
      title: "Domaine Viticole",
      category: "immobilier",
      location: "Bordeaux",
      date: "Mars 2024",
      image: "/placeholder.svg?key=vineyard-estate",
      videoUrl: "https://youtube.com/watch?v=example8",
      description: "Présentation d'un domaine viticole historique",
      tags: ["Vignoble", "Patrimoine", "Terroir"],
      views: "7.5K",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

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

      {/* Filter Tabs */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden"
              >
                <div className="relative">
                  {/* Thumbnail */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-primary/90 hover:bg-primary">
                      <Play className="h-6 w-6 mr-2" />
                      Voir la vidéo
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {categories.find((cat) => cat.id === item.category)?.label}
                  </Badge>

                  {/* Views */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{item.views}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir sur YouTube
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Charger plus de projets
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">Quelques chiffres</h2>
            <p className="text-xl text-muted-foreground">Le résultat de plusieurs années de passion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Événements filmés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Vues sur YouTube</div>
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
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="text-6xl text-primary mb-4">"</div>
            <p className="text-xl text-card-foreground mb-6 italic">
              Un travail exceptionnel ! Les images de notre mariage sont absolument magnifiques. Nous revivons notre
              jour J à chaque visionnage. Merci pour ces souvenirs inoubliables.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div
                className="w-12 h-12 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url('/placeholder.svg?key=client-testimonial')`,
                }}
              />
              <div>
                <div className="font-semibold text-card-foreground">Marie & Thomas</div>
                <div className="text-sm text-muted-foreground">Mariage Château de Versailles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
