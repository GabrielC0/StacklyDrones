import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stacklydrones.fr"
  const routes = ["/", "/about", "/services", "/portfolio", "/contact", "/devis"]
  const now = new Date().toISOString()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }))
}



