/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Assure les vérifications en build
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Échoue le build en cas d'erreurs TS
    ignoreBuildErrors: false,
  },
  images: {
    // Utilise l'optimisation d'images de Next.js et sert AVIF/WebP si supportés
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [256, 384, 640, 750, 828],
    minimumCacheTTL: 60 * 60 * 24,
  },
}

export default nextConfig
