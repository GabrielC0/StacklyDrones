"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, Download, Heart, MapPin, Clock, Camera, Users, Sparkles } from "lucide-react"

interface QuoteData {
  duration: string
  ceremony: string[]
  videoLength: string
  trailer: string
  extras: string[]
  location: string
  guestCount: string
  date: string
  contact: {
    names: string
    email: string
    phone: string
    message: string
  }
}

export default function DevisPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quoteData, setQuoteData] = useState<QuoteData>({
    duration: "",
    ceremony: [],
    videoLength: "",
    trailer: "",
    extras: [],
    location: "",
    guestCount: "",
    date: "",
    contact: {
      names: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const totalSteps = 7
  const progress = (currentStep / totalSteps) * 100

  const calculatePrice = () => {
    let basePrice = 0

    // Base price according to duration
    if (quoteData.duration === "half-day") basePrice = 800
    if (quoteData.duration === "full-day") basePrice = 1200

    // Add ceremony extras
    if (quoteData.ceremony.includes("arrival")) basePrice += 150
    if (quoteData.ceremony.includes("cocktail")) basePrice += 200
    if (quoteData.ceremony.includes("bouquet")) basePrice += 100

    // Video length pricing
    if (quoteData.videoLength === "8min") basePrice += 200
    if (quoteData.videoLength === "12min") basePrice += 400

    // Trailer
    if (quoteData.trailer === "yes") basePrice += 300

    // Extras
    if (quoteData.extras.includes("raw-footage")) basePrice += 200
    if (quoteData.extras.includes("drone-photos")) basePrice += 150
    if (quoteData.extras.includes("highlight-reel")) basePrice += 250

    return basePrice
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generatePDF = () => {
    // Simple PDF generation simulation
    const finalPrice = calculatePrice()
    const pdfContent = `
DEVIS VIDÉASTE MARIAGE

Futurs mariés: ${quoteData.contact.names}
Date du mariage: ${quoteData.date}
Lieu: ${quoteData.location}

PRESTATIONS:
- Durée: ${quoteData.duration === "half-day" ? "Demi-journée" : "Journée complète"}
- Vidéo finale: ${quoteData.videoLength} minutes
- Bande annonce: ${quoteData.trailer === "yes" ? "Oui" : "Non"}
- Captations supplémentaires: ${quoteData.ceremony.join(", ")}
- Options: ${quoteData.extras.join(", ")}

PRIX TOTAL: ${finalPrice}€ TTC

Ce devis est valable 30 jours.
    `

    // Create and download PDF (simplified)
    const blob = new Blob([pdfContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "devis-mariage-drone.txt"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-6 w-6 text-primary mr-2" />
                Durée de prestation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Combien de temps souhaitez-vous que nous soyons présents le jour J ?
              </p>
              <RadioGroup
                value={quoteData.duration}
                onValueChange={(value) => setQuoteData({ ...quoteData, duration: value })}
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="half-day" id="half-day" />
                  <Label htmlFor="half-day" className="flex-1 cursor-pointer">
                    <div className="font-medium">Demi-journée (4h)</div>
                    <div className="text-sm text-muted-foreground">Cérémonie + cocktail</div>
                  </Label>
                  <div className="text-primary font-semibold">À partir de 800€</div>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="full-day" id="full-day" />
                  <Label htmlFor="full-day" className="flex-1 cursor-pointer">
                    <div className="font-medium">Journée complète (8h)</div>
                    <div className="text-sm text-muted-foreground">Préparatifs + cérémonie + soirée</div>
                  </Label>
                  <div className="text-primary font-semibold">À partir de 1200€</div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-6 w-6 text-primary mr-2" />
                Moments à capturer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Quels moments spéciaux souhaitez-vous que nous filmions ? (plusieurs choix possibles)
              </p>
              <div className="space-y-4">
                {[
                  { id: "arrival", label: "Arrivée de la mariée", price: "+150€" },
                  { id: "cocktail", label: "Cocktail et vin d'honneur", price: "+200€" },
                  { id: "bouquet", label: "Jeté de bouquet", price: "+100€" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <Checkbox
                      id={item.id}
                      checked={quoteData.ceremony.includes(item.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setQuoteData({
                            ...quoteData,
                            ceremony: [...quoteData.ceremony, item.id],
                          })
                        } else {
                          setQuoteData({
                            ...quoteData,
                            ceremony: quoteData.ceremony.filter((c) => c !== item.id),
                          })
                        }
                      }}
                    />
                    <Label htmlFor={item.id} className="flex-1 cursor-pointer font-medium">
                      {item.label}
                    </Label>
                    <div className="text-primary font-semibold">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-6 w-6 text-primary mr-2" />
                Durée de la vidéo finale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">Quelle durée souhaitez-vous pour votre vidéo souvenir ?</p>
              <RadioGroup
                value={quoteData.videoLength}
                onValueChange={(value) => setQuoteData({ ...quoteData, videoLength: value })}
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="4min" id="4min" />
                  <Label htmlFor="4min" className="flex-1 cursor-pointer">
                    <div className="font-medium">4 minutes</div>
                    <div className="text-sm text-muted-foreground">Format court et dynamique</div>
                  </Label>
                  <div className="text-primary font-semibold">Inclus</div>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="8min" id="8min" />
                  <Label htmlFor="8min" className="flex-1 cursor-pointer">
                    <div className="font-medium">8 minutes</div>
                    <div className="text-sm text-muted-foreground">Plus de détails et d'émotion</div>
                  </Label>
                  <div className="text-primary font-semibold">+200€</div>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="12min" id="12min" />
                  <Label htmlFor="12min" className="flex-1 cursor-pointer">
                    <div className="font-medium">12 minutes</div>
                    <div className="text-sm text-muted-foreground">Version longue complète</div>
                  </Label>
                  <div className="text-primary font-semibold">+400€</div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-6 w-6 text-primary mr-2" />
                Bande annonce
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Souhaitez-vous une bande annonce courte (1-2 min) pour les réseaux sociaux ?
              </p>
              <RadioGroup
                value={quoteData.trailer}
                onValueChange={(value) => setQuoteData({ ...quoteData, trailer: value })}
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="yes" id="trailer-yes" />
                  <Label htmlFor="trailer-yes" className="flex-1 cursor-pointer">
                    <div className="font-medium">Oui, je veux une bande annonce</div>
                    <div className="text-sm text-muted-foreground">Parfait pour partager sur les réseaux</div>
                  </Label>
                  <div className="text-primary font-semibold">+300€</div>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="no" id="trailer-no" />
                  <Label htmlFor="trailer-no" className="flex-1 cursor-pointer">
                    <div className="font-medium">Non merci</div>
                    <div className="text-sm text-muted-foreground">Seulement la vidéo principale</div>
                  </Label>
                  <div className="text-primary font-semibold">Inclus</div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        )

      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                Informations pratiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="location" className="text-base font-medium">
                  Lieu de réception
                </Label>
                <Input
                  id="location"
                  placeholder="Ville ou adresse de votre mariage"
                  value={quoteData.location}
                  onChange={(e) => setQuoteData({ ...quoteData, location: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="guests" className="text-base font-medium">
                  Nombre d'invités (approximatif)
                </Label>
                <RadioGroup
                  value={quoteData.guestCount}
                  onValueChange={(value) => setQuoteData({ ...quoteData, guestCount: value })}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small">Moins de 50 invités</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">50 à 100 invités</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large">Plus de 100 invités</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="date" className="text-base font-medium">
                  Date du mariage
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={quoteData.date}
                  onChange={(e) => setQuoteData({ ...quoteData, date: e.target.value })}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>
        )

      case 6:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                Vos coordonnées
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="names" className="text-base font-medium">
                  Prénoms des futurs mariés
                </Label>
                <Input
                  id="names"
                  placeholder="Marie & Thomas"
                  value={quoteData.contact.names}
                  onChange={(e) =>
                    setQuoteData({
                      ...quoteData,
                      contact: { ...quoteData.contact, names: e.target.value },
                    })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-base font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={quoteData.contact.email}
                  onChange={(e) =>
                    setQuoteData({
                      ...quoteData,
                      contact: { ...quoteData.contact, email: e.target.value },
                    })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-base font-medium">
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  placeholder="06 12 34 56 78"
                  value={quoteData.contact.phone}
                  onChange={(e) =>
                    setQuoteData({
                      ...quoteData,
                      contact: { ...quoteData.contact, phone: e.target.value },
                    })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-base font-medium">
                  Message (optionnel)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Parlez-nous de votre projet, vos attentes particulières..."
                  value={quoteData.contact.message}
                  onChange={(e) =>
                    setQuoteData({
                      ...quoteData,
                      contact: { ...quoteData.contact, message: e.target.value },
                    })
                  }
                  className="mt-2"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 7:
        const finalPrice = calculatePrice()
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="h-8 w-8 text-secondary mr-3" />
                Votre devis personnalisé
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-center text-secondary mb-2">{finalPrice}€ TTC</h3>
                <p className="text-center text-muted-foreground">Prix estimé pour votre prestation mariage</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Récapitulatif de votre prestation :</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Durée :</span>
                    <span>{quoteData.duration === "half-day" ? "Demi-journée" : "Journée complète"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vidéo finale :</span>
                    <span>{quoteData.videoLength} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bande annonce :</span>
                    <span>{quoteData.trailer === "yes" ? "Oui" : "Non"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date :</span>
                    <span>{quoteData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lieu :</span>
                    <span>{quoteData.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={generatePDF} className="flex-1 bg-transparent" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le devis PDF
                </Button>
                <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Valider et réserver
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Ce devis est valable 30 jours. Les prix sont donnés à titre indicatif et peuvent être ajustés selon vos
                besoins spécifiques.
              </p>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Devis gratuit instantané</h1>
          <p className="text-muted-foreground">
            Répondez à quelques questions pour obtenir votre estimation personnalisée
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>
              Étape {currentStep} sur {totalSteps}
            </span>
            <span>{Math.round(progress)}% complété</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-8">{renderStep()}</div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center bg-transparent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Précédent
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !quoteData.duration) ||
                (currentStep === 3 && !quoteData.videoLength) ||
                (currentStep === 4 && !quoteData.trailer) ||
                (currentStep === 5 && (!quoteData.location || !quoteData.guestCount || !quoteData.date)) ||
                (currentStep === 6 &&
                  (!quoteData.contact.names || !quoteData.contact.email || !quoteData.contact.phone))
              }
              className="flex items-center"
            >
              Suivant
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
