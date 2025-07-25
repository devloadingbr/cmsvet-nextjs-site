import { MetadataRoute } from 'next';
import { site } from '@/lib/env';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/private/'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}