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
    // Utilise l'optimisation d'images de Next.js
  },
}

export default nextConfig
