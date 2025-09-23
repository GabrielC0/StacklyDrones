import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { CheckCircle, ArrowRight, Heart, Camera, Clock, Users, MapPin, Download, Sparkles, Gift } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <ScrollReveal direction="fade" delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              Prestations <span className="text-secondary">mariage</span> sur-mesure
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12 text-pretty leading-relaxed">
              Chaque mariage est unique. C'est pourquoi nous créons des prestations personnalisées adaptées à vos
              souhaits, votre venue et votre budget.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 transition-transform text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
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
                className="w-full sm:w-auto hover:scale-105 transition-transform bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Link href="/portfolio">Voir nos réalisations</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wedding Services Features */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 sm:mb-6 text-balance">
                Ce qui est inclus dans nos prestations
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                Des services complets pour capturer chaque moment précieux de votre journée
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: Camera,
                title: "Captation complète",
                description: "Arrivée des mariés, cérémonie, cocktail et moments clés de votre journée",
                features: [
                  "Photos aériennes haute définition",
                  "Vidéos 4K stabilisées",
                  "Angles multiples",
                  "Captation discrète",
                ],
              },
              {
                icon: Sparkles,
                title: "Post-production premium",
                description: "Montage professionnel avec étalonnage couleur et musique sur-mesure",
                features: ["Montage créatif", "Étalonnage couleur", "Musique libre de droits", "Effets visuels"],
              },
              {
                icon: Gift,
                title: "Livrables personnalisés",
                description: "Formats adaptés à vos besoins : réseaux sociaux, projection, souvenirs",
                features: ["Vidéo longue durée", "Bande-annonce", "Photos retouchées", "Formats multiples"],
              },
              {
                icon: Clock,
                title: "Livraison rapide",
                description: "Vos souvenirs livrés dans les meilleurs délais après votre mariage",
                features: ["Aperçu 24h", "Livraison 3-5 jours", "Galerie en ligne", "Support USB personnalisé"],
              },
              {
                icon: MapPin,
                title: "Déplacement inclus",
                description: "Intervention dans toute la France avec matériel professionnel",
                features: ["France entière", "Matériel pro", "Assurance complète", "Autorisation vol"],
              },
              {
                icon: Users,
                title: "Accompagnement",
                description: "Conseil et accompagnement personnalisé tout au long de votre projet",
                features: ["Consultation pré-mariage", "Repérage venue", "Conseils créatifs", "Support client"],
              },
            ].map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-border h-full">
                  <CardContent className="p-6 sm:p-8 text-center flex flex-col h-full">
                    <div className="bg-primary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-card-foreground mb-3 text-balance">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-secondary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-center">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Tarification transparente
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
              Chaque mariage étant unique, nous établissons un devis personnalisé basé sur vos besoins spécifiques
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
            {[
              {
                icon: Clock,
                title: "Durée de prestation",
                description: "Demi-journée ou journée complète selon vos besoins",
                color: "text-secondary",
              },
              {
                icon: MapPin,
                title: "Lieu de réception",
                description: "Distance et accessibilité de votre venue",
                color: "text-primary",
              },
              {
                icon: Gift,
                title: "Options choisies",
                description: "Services additionnels et livrables souhaités",
                color: "text-orange-500",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <div className="text-center group">
                  <div className="bg-secondary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${item.color} group-hover:animate-bounce`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 text-balance">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={600}>
            <Card className="border-secondary/20 bg-secondary/5 hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
                  Devis gratuit instantané
                </h3>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                  Répondez à quelques questions simples et obtenez immédiatement une estimation personnalisée pour votre
                  mariage
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 transition-transform text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  <Link href="/devis">
                    Commencer mon devis
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 sm:mb-6 text-balance">
                Comment ça se passe ?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                Un processus simple et transparent pour des résultats exceptionnels
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                step: "01",
                title: "Devis en ligne",
                description: "Obtenez votre estimation personnalisée en quelques minutes",
                icon: Heart,
              },
              {
                step: "02",
                title: "Consultation",
                description: "Échange personnalisé sur votre projet et vos attentes",
                icon: Users,
              },
              {
                step: "03",
                title: "Jour J",
                description: "Captation professionnelle et discrète de votre mariage",
                icon: Camera,
              },
              {
                step: "04",
                title: "Livraison",
                description: "Réception de vos souvenirs montés et retouchés",
                icon: Download,
              },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-primary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon
                      className={`h-8 w-8 sm:h-10 sm:w-10 ${item.step === "01" ? "text-red-500" : "text-primary"} group-hover:animate-pulse`}
                    />
                  </div>
                  <div className="text-secondary font-bold text-lg sm:text-xl mb-2">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 text-balance">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                Questions fréquentes
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "Combien coûte une prestation mariage ?",
                answer:
                  "Nos tarifs varient selon la durée de prestation, le lieu et les options choisies. Utilisez notre devis en ligne pour obtenir une estimation personnalisée instantanément.",
              },
              {
                question: "Quand recevrons-nous nos vidéos et photos ?",
                answer:
                  "Vous recevrez un aperçu dans les 24h suivant votre mariage, puis l'ensemble des livrables finalisés sous 3 à 5 jours ouvrés.",
              },
              {
                question: "Que se passe-t-il en cas de mauvais temps ?",
                answer:
                  "La sécurité est notre priorité. En cas de conditions météo défavorables, nous adaptons notre approche ou reportons la prestation sans frais supplémentaires.",
              },
              {
                question: "Intervenez-vous partout en France ?",
                answer:
                  "Oui, nous nous déplaçons dans toute la France. Les frais de déplacement sont inclus dans votre devis personnalisé.",
              },
              {
                question: "Proposez-vous des révisions ?",
                answer:
                  "Oui, 2 révisions mineures sont incluses dans chaque prestation. Nous travaillons avec vous jusqu'à votre entière satisfaction.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="font-semibold text-card-foreground mb-3 text-sm sm:text-base lg:text-lg text-balance">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 sm:mb-6 text-balance">
              Prêts à découvrir nos tarifs ?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary-foreground/90 mb-6 sm:mb-8 max-w-4xl mx-auto text-pretty leading-relaxed">
              Obtenez votre devis personnalisé en quelques clics et planifions ensemble votre plus beau jour
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent hover:scale-105 transition-transform"
              >
                <Link href="/devis">
                  Devis gratuit instantané
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
              >
                <Link href="tel:+33660735361">Appeler maintenant</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
