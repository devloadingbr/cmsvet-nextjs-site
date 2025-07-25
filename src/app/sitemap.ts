import { MetadataRoute } from 'next';
import { site } from '@/lib/env';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  
  const routes = [
    '',
    '/emergencia',
    '/vacinacao', 
    '/exames',
    '/recursos',
    '/contato',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}