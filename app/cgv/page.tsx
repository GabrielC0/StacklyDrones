export default function CGVPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Conditions Générales de Vente</h1>
          <div className="prose prose-invert:prose lg:prose-lg text-muted-foreground">
            <p>Un devis est émis pour chaque prestation. Un acompte peut être demandé pour valider la date.</p>
            <p>En cas d'annulation par le client à moins de 7 jours de l'événement, l'acompte reste dû.</p>
            <p>Les livrables sont fournis selon les modalités précisées dans le devis (formats, délais, révisions).</p>
          </div>
        </div>
      </section>
    </div>
  )
}


