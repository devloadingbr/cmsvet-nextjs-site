/**
 * Configurações de ambiente centralizadas
 * Este arquivo facilita o acesso às variáveis de ambiente em todo o projeto
 */

// Informações da clínica
export const clinic = {
  name: process.env.NEXT_PUBLIC_CLINIC_NAME || "CSM Clínica Veterinária",
  tagline: process.env.NEXT_PUBLIC_CLINIC_TAGLINE || "Cuidado veterinário 24 horas com amor e dedicação",
  description: process.env.NEXT_PUBLIC_CLINIC_DESCRIPTION || "Na CSM, cada pet é tratado com o amor e cuidado que ele merece.",
} as const;

// Contato
export const contact = {
  phone: {
    primary: process.env.NEXT_PUBLIC_PHONE_PRIMARY || "(41) 3242-3166",
    secondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "(41) 99999-9999",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5541999999999",
  },
  email: {
    general: process.env.NEXT_PUBLIC_EMAIL || "contato@csmvet.com.br",
    emergency: process.env.NEXT_PUBLIC_EMAIL_EMERGENCIA || "emergencia@csmvet.com.br",
  },
} as const;

// Endereço
export const address = {
  street: process.env.NEXT_PUBLIC_ADDRESS_STREET || "Rua das Flores, 123",
  neighborhood: process.env.NEXT_PUBLIC_ADDRESS_NEIGHBORHOOD || "Centro",
  city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Curitiba",
  state: process.env.NEXT_PUBLIC_ADDRESS_STATE || "PR",
  zip: process.env.NEXT_PUBLIC_ADDRESS_ZIP || "80010-000",
  full: process.env.NEXT_PUBLIC_ADDRESS_FULL || "Rua das Flores, 123 - Centro, Curitiba/PR",
} as const;

// Redes sociais
export const social = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "@csmvet",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || "csmvet",
  googleMaps: process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK || "https://goo.gl/maps/exemplo",
} as const;

// Horários
export const hours = {
  emergency: process.env.NEXT_PUBLIC_HOURS_EMERGENCY || "24 horas por dia, 7 dias por semana",
  regular: process.env.NEXT_PUBLIC_HOURS_REGULAR || "Segunda à Sexta: 8h às 18h | Sábado: 8h às 12h",
} as const;

// Estatísticas
export const stats = {
  petsCared: Number(process.env.NEXT_PUBLIC_STATS_PETS_CARED) || 15000,
  yearsExperience: Number(process.env.NEXT_PUBLIC_STATS_YEARS_EXPERIENCE) || 7,
  rating: Number(process.env.NEXT_PUBLIC_STATS_RATING) || 4.8,
  teamSize: Number(process.env.NEXT_PUBLIC_STATS_TEAM_SIZE) || 3,
} as const;

// URLs do site
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
} as const;

// APIs e serviços externos
export const apis = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL || "gpt-4",
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
  resend: {
    apiKey: process.env.RESEND_API_KEY,
  },
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  googleMaps: {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  whatsapp: {
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN,
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
} as const;

// Helpers para URLs comuns
export const urls = {
  whatsapp: `https://wa.me/${contact.phone.whatsapp}`,
  whatsappWithMessage: (message: string) => 
    `https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent(message)}`,
  googleMaps: social.googleMaps,
  instagram: `https://instagram.com/${social.instagram.replace('@', '')}`,
  facebook: `https://facebook.com/${social.facebook}`,
  phoneCall: `tel:${contact.phone.primary}`,
  emailContact: `mailto:${contact.email.general}`,
  emailEmergency: `mailto:${contact.email.emergency}`,
} as const;

// Mensagens pré-definidas para WhatsApp
export const whatsappMessages = {
  emergency: "🚨 EMERGÊNCIA: Preciso de atendimento veterinário urgente para meu pet!",
  appointment: "📅 Gostaria de agendar uma consulta para meu pet.",
  info: "ℹ️ Gostaria de mais informações sobre os serviços da CSM.",
  triage: "🩺 Meu pet não está bem, gostaria de orientação sobre o que fazer.",
} as const;