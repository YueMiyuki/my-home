import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://miyuki-yue.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}