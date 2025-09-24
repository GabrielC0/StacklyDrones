## Composants internes – API rapide

Cette page documente brièvement les composants internes clés et comment les utiliser.

### `ScrollReveal`
- **Props**: `children`, `className?`, `delay?: number` (ms), `direction?: "up" | "down" | "left" | "right" | "fade"` (par défaut: `"up"`).
- **Usage**:
```tsx
<ScrollReveal delay={300} direction="up">
  <h2>Section</h2>
  {/* contenu */}
</ScrollReveal>
```

### `PortfolioPreviewGrid`
- Grille d'aperçus d'images statiques importées via `next/image` (statiques).
- **Comportement**: zoom au survol, ouverture plein écran avec navigation (clavier, swipe), chargement prioritaire sur les 2 premiers items.
- **Accessibilité**: boutons avec `aria-label` et focus visibles.

### `PortfolioGrid`
- **Props**: `{ images: string[] }` (chemins publics `/portfolio/...`).
- **Comportement**: grilles responsives, `sizes` configuré pour réduire le poids réseau, modal plein écran avec swipe/clavier.

### Hooks utilitaires
- Source canonique: `hooks/`
  - `useIsMobile()`: renvoie `boolean` selon un breakpoint de 768px. À importer depuis `@/hooks/use-mobile`.
  - `useToast()`: gestion légère des toasts; importer depuis `@/hooks/use-toast` et utiliser avec `components/ui/toaster.tsx`.

### Bonnes pratiques `next/image`
- Toujours définir `sizes` avec des valeurs spécifiques:
  - Grilles 3 colonnes: `(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw`
  - Grilles 2 colonnes: `(min-width: 768px) 50vw, 100vw`
- Utiliser `priority` uniquement sur le contenu Above-The-Fold.
- Préférer `placeholder="blur"` pour grandes images perçues.


