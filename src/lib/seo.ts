/**
 * Configurações de SEO centralizadas
 * Este arquivo facilita o gerenciamento de metadados em todo o projeto
 */

import { clinic, contact, address, stats, site } from './env';

// Configurações básicas de SEO
export const seo = {
  title: process.env.NEXT_PUBLIC_SEO_TITLE || `${clinic.name} | Atendimento 24h em ${address.city}`,
  description: process.env.NEXT_PUBLIC_SEO_DESCRIPTION || clinic.description,
  keywords: process.env.NEXT_PUBLIC_SEO_KEYWORDS || `clínica veterinária ${address.city.toLowerCase()}, veterinário 24h, emergência veterinária, consulta veterinária, vacina pet, exame veterinário`,
  
  // Open Graph
  openGraph: {
    title: process.env.NEXT_PUBLIC_OG_TITLE || `${clinic.name} - Cuidado 24h para seu Pet em ${address.city}`,
    description: process.env.NEXT_PUBLIC_OG_DESCRIPTION || clinic.description,
    image: process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image-csmvet.jpg',
    imageAlt: process.env.NEXT_PUBLIC_OG_IMAGE_ALT || `${clinic.name} - Cuidado veterinário 24h em ${address.city}`,
    type: 'website',
    locale: 'pt_BR',
    siteName: clinic.name,
  },
  
  // Twitter Cards
  twitter: {
    card: process.env.NEXT_PUBLIC_TWITTER_CARD || 'summary_large_image',
    site: process.env.NEXT_PUBLIC_TWITTER_SITE || '@csmvet',
    creator: process.env.NEXT_PUBLIC_TWITTER_CREATOR || '@csmvet',
  },
  
  // Canonical URL
  canonical: site.url,
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
} as const;

// Schema.org para dados estruturados
export const generateVeterinaryClinicSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: clinic.name,
    description: clinic.description,
    url: site.url,
    telephone: contact.phone.primary,
    email: contact.email.general,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: process.env.NEXT_PUBLIC_BUSINESS_LATITUDE || '-25.4808',
      longitude: process.env.NEXT_PUBLIC_BUSINESS_LONGITUDE || '-49.3044',
    },
    openingHours: [
      'Mo-Su 00:00-23:59' // 24/7
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: stats.rating,
      ratingCount: Math.floor(stats.petsCared / 10), // Estimativa baseada nos pets atendidos
    },
    hasMap: process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK,
    sameAs: [
      `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM?.replace('@', '') || 'csmvet'}`,
      `https://facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK || 'csmvet'}`,
    ],
    potentialAction: [
      {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `https://wa.me/${contact.phone.whatsapp}?text=Gostaria%20de%20agendar%20uma%20consulta`,
        },
        result: {
          '@type': 'Reservation',
          name: 'Agendamento de Consulta Veterinária',
        },
      },
    ],
    department: [
      {
        '@type': 'MedicalOrganization',
        name: 'Emergência 24h',
        telephone: contact.phone.primary,
        medicalSpecialty: 'Emergency Medicine',
      },
      {
        '@type': 'MedicalOrganization', 
        name: 'Clínica Geral',
        medicalSpecialty: 'General Practice',
      },
      {
        '@type': 'MedicalOrganization',
        name: 'Cirurgia',
        medicalSpecialty: 'Surgery',
      },
    ],
  };
};

// Schema para perguntas frequentes (FAQ)
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

// Schema para reviews/testimonials
export const generateReviewSchema = (reviews: Array<{review: string; rating: number; name: string}>) => {
  return reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: review.review,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    itemReviewed: {
      '@type': 'VeterinaryCare',
      name: clinic.name,
    },
  }));
};

// Metadados para páginas específicas
export const pageMetadata = {
  home: {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  },
  
  emergencia: {
    title: `Emergência Veterinária 24h | ${clinic.name} - ${address.city}`,
    description: `Atendimento de emergência veterinária 24 horas em ${address.city}. Veterinários especializados prontos para cuidar do seu pet em situações críticas. Ligue: ${contact.phone.primary}`,
    keywords: `emergência veterinária, veterinário 24h ${address.city.toLowerCase()}, pronto socorro animal, urgência pet`,
  },
  
  vacinacao: {
    title: `Vacinação para Pets | ${clinic.name} - ${address.city}`,
    description: `Cronograma completo de vacinas para cães e gatos em ${address.city}. Proteja seu pet contra doenças com nosso programa de vacinação. Agende sua consulta.`,
    keywords: `vacinação pet, vacina cão, vacina gato, cronograma vacinas, ${address.city.toLowerCase()}`,
  },
  
  exames: {
    title: `Exames Veterinários | ${clinic.name} - ${address.city}`,
    description: `Exames laboratoriais e de imagem para pets em ${address.city}. Ultrassom, raio-X, exames de sangue e mais. Diagnósticos precisos para seu pet.`,
    keywords: `exames veterinários, ultrassom pet, raio-x animal, laboratório veterinário, ${address.city.toLowerCase()}`,
  },
  
  contato: {
    title: `Contato | ${clinic.name} - ${address.city}`,
    description: `Entre em contato com a ${clinic.name}. Endereço: ${address.full}. Telefone: ${contact.phone.primary}. WhatsApp: ${contact.phone.secondary}`,
    keywords: `contato veterinário, endereço clínica veterinária, telefone veterinário ${address.city.toLowerCase()}`,
  },
} as const;