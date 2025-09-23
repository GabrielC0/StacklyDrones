import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Play,
  Award,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Quote,
  Phone,
  Heart,
  Sparkles,
  Gift,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full animate-ken-burns">
            <Image
              src="/stunning-aerial-drone-shot-of-wedding-venue-at-sun.jpg"
              alt="Vue aérienne de mariage au coucher du soleil"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <ScrollReveal direction="fade" delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
              Votre mariage <span className="text-secondary">vu du ciel</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={400}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto text-pretty leading-relaxed">
              Vidéos & photos aériennes d'exception pour immortaliser le plus
              beau jour de votre vie
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 max-w-2xl mx-auto">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <Link href="/devis">
                  Devis gratuit instantané
                  <Heart className="ml-2 h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-transform"
              >
                <Link href="/portfolio">
                  Voir nos mariages
                  <Play className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Key Features */}
          <ScrollReveal direction="up" delay={800}>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-white max-w-4xl mx-auto">
              {[
                { icon: Award, text: "Certifié drone" },
                { icon: Camera, text: "Qualité 4K" },
                { icon: Clock, text: "Livraison 48h" },
                { icon: MapPin, text: "France entière" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group hover:scale-110 transition-transform duration-300 p-2"
                >
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mb-2 group-hover:animate-bounce" />
                  <span className="text-xs sm:text-sm font-medium text-center">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wedding Services Preview */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                Pourquoi choisir nos services ?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                Une approche unique et personnalisée pour capturer la magie de
                votre union
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: Sparkles,
                title: "Perspective unique",
                description:
                  "Des angles aériens spectaculaires que seul le drone peut offrir pour sublimer votre venue et vos invités",
                color: "text-secondary",
              },
              {
                icon: Heart,
                title: "Moments d'émotion",
                description:
                  "Captation discrète et professionnelle des instants les plus précieux de votre journée",
                color: "text-red-500",
              },
              {
                icon: Gift,
                title: "Service personnalisé",
                description:
                  "Chaque prestation est adaptée à vos souhaits et au style de votre mariage",
                color: "text-orange-500",
              },
            ].map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-border text-center h-full">
                  <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                    <div className="bg-secondary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon
                        className={`h-8 w-8 sm:h-10 sm:w-10 ${service.color} group-hover:animate-pulse`}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-card-foreground mb-4 text-balance">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={600}>
            <div className="text-center mt-12 sm:mt-16">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 transition-transform text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Link href="/devis">
                  Obtenir mon devis gratuit
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 sm:mb-6 text-balance">
                Nos plus beaux mariages
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                Découvrez quelques-uns de nos mariages récents capturés avec
                passion
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ScrollReveal key={item} direction="up" delay={index * 100}>
                <div className="group relative overflow-hidden rounded-lg aspect-video hover:shadow-xl transition-all duration-500">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('/beautiful-aerial-wedding-ceremony-drone-shot-with-.jpg')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="transform scale-75 group-hover:scale-100 transition-transform duration-300 text-xs sm:text-sm"
                    >
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Voir la vidéo
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={600}>
            <div className="text-center mt-12 sm:mt-16">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto hover:scale-105 transition-transform bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Link href="/portfolio">
                  Voir tous nos mariages
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                L'avis de nos mariés
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                name: "Marie & Thomas",
                event: "Mariage au Château de Bourgogne",
                text: "Des images absolument magnifiques ! Le rendu final nous a fait revivre notre mariage sous un angle totalement nouveau. Merci pour ces souvenirs inoubliables.",
                rating: 5,
              },
              {
                name: "Sophie & Alexandre",
                event: "Mariage en Provence",
                text: "Professionnel, discret et créatif. Les vidéos aériennes ont sublimé notre venue provençale. Nos invités étaient émerveillés !",
                rating: 5,
              },
              {
                name: "Emma & Julien",
                event: "Mariage en bord de mer",
                text: "Un travail d'exception ! Les prises de vues aériennes ont capturé la beauté de notre mariage face à l'océan. Parfait !",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full">
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mb-4 animate-pulse" />
                    <p className="text-muted-foreground mb-6 italic text-sm sm:text-base leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-semibold text-card-foreground text-sm sm:text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {testimonial.event}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 hover:animate-spin"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-primary">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 text-balance">
              Prêts à immortaliser votre plus beau jour ?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-4xl mx-auto text-pretty leading-relaxed">
              Obtenez votre devis personnalisé en quelques clics et découvrez
              nos tarifs transparents
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform"
              >
                <Link href="/devis">
                  Devis gratuit instantané
                  <Heart className="ml-2 h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-105 transition-transform"
              >
                <Link href="tel:+33660735361">
                  Appeler maintenant
                  <Phone className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
