"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Heart,
  Building2,
  Trophy,
  Camera,
  MessageCircle,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    eventDate: "",
    location: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Message envoyé !</h1>
          <p className="text-muted-foreground mb-6">
            Merci pour votre demande. Je vous recontacterai dans les 24 heures pour discuter de votre projet.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Envoyer un autre message</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Parlons de votre <span className="text-primary">projet</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty">
            Que ce soit pour un mariage, un événement d'entreprise ou tout autre projet, je suis là pour vous
            accompagner. Contactez-moi pour un devis personnalisé et gratuit.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Demande de devis</CardTitle>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et je vous recontacterai rapidement pour discuter de votre projet.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="06 60 73 53 61"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Type de projet *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => handleInputChange("projectType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mariage">
                            <div className="flex items-center space-x-2">
                              <Heart className="h-4 w-4" />
                              <span>Mariage</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="entreprise">
                            <div className="flex items-center space-x-2">
                              <Building2 className="h-4 w-4" />
                              <span>Événement entreprise</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="sport">
                            <div className="flex items-center space-x-2">
                              <Trophy className="h-4 w-4" />
                              <span>Événement sportif</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="immobilier">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>Immobilier</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="montage">
                            <div className="flex items-center space-x-2">
                              <Camera className="h-4 w-4" />
                              <span>Montage seul</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Date de l'événement</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Lieu de l'événement</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Ville, région"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget approximatif</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une fourchette" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="300-500">300€ - 500€</SelectItem>
                          <SelectItem value="500-800">500€ - 800€</SelectItem>
                          <SelectItem value="800-1200">800€ - 1200€</SelectItem>
                          <SelectItem value="1200-2000">1200€ - 2000€</SelectItem>
                          <SelectItem value="2000+">Plus de 2000€</SelectItem>
                          <SelectItem value="non-defini">Non défini</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Parlez-moi de votre événement, vos attentes, vos idées créatives..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">gabriel.changrenier@icloud.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Téléphone</p>
                    <p className="text-muted-foreground">06 60 73 53 61</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Zone d'intervention</p>
                    <p className="text-muted-foreground">France entière</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Disponibilité</p>
                    <p className="text-muted-foreground">7j/7 sur rendez-vous</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick FAQ */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Questions fréquentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-card-foreground mb-1">Délai de réponse ?</p>
                  <p className="text-sm text-muted-foreground">Je réponds à toutes les demandes dans les 24h.</p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">Devis gratuit ?</p>
                  <p className="text-sm text-muted-foreground">Oui, tous mes devis sont gratuits et sans engagement.</p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">Déplacement ?</p>
                  <p className="text-sm text-muted-foreground">
                    Je me déplace partout en France. Frais inclus dans un rayon de 50km.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">Assurance ?</p>
                  <p className="text-sm text-muted-foreground">
                    Pilote certifié DGAC avec assurance professionnelle complète.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-card-foreground">Projet urgent ?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Pour les demandes urgentes (moins de 48h), appelez-moi directement.
                </p>
                <Button asChild className="w-full">
                  <a href="tel:+33660735361">
                    <Phone className="h-4 w-4 mr-2" />
                    Appeler maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
