# CLAUDE.md - CSM Clínica Veterinária

## 📋 Project Overview

### 🏥 About the Project
**CSM Clínica Veterinária** - Modern enterprise website for a 24/7 veterinary clinic in Curitiba, Brazil. Professional-grade application built with Next.js 15, featuring AI-powered pet triage system and comprehensive veterinary services.

### 🎯 Business Context
- **Client**: CSM Clínica Veterinária (7+ years experience)
- **Location**: Curitiba/PR, Brazil (Uberaba neighborhood)
- **Services**: 24/7 emergency care, consultations, surgeries, diagnostics
- **Team**: Specialized veterinarians (Catarina Gadelha, Sabine Hilbert, Marcelo Tavares)
- **Differentials**: Real 24h presence, modern equipment, ambulance service

### 🚀 Tech Stack
- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcd/ui components
- **Icons**: Lucide React, React Icons (WhatsApp)
- **State**: Zustand stores
- **Forms**: React Hook Form + Zod validation
- **AI**: OpenAI integration for pet triage
- **Deployment**: Ready for Vercel/production

### 📁 Key Project Files
- `src/app/layout.tsx` - Global layout with unified background
- `src/components/sections/HeroSection.tsx` - Main landing section
- `src/lib/env.ts` - Centralized environment configuration
- `docs/site/design-principles.md` - Complete design system
- `.env.local` - Environment variables (clinic info, APIs, SEO)

### 🌟 Core Features
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **AI Triage System**: Intelligent pet symptom analysis
- **WhatsApp Integration**: Direct contact with pre-filled messages
- **SEO Optimized**: Schema.org, meta tags, sitemap
- **24/7 Emphasis**: Clear emergency contact and availability
- **Trust Building**: Statistics, testimonials, team showcase

## 🎨 Design System & Visual Identity

### Logo Analysis & Brand Colors
- **Primary Brand Colors** (extracted from logo):
  - Azul Royal: `#2563EB` (rgb(37, 99, 235)) - Profissionalismo, confiança, medicina
  - Amarelo/Dourado: `#F59E0B` (rgb(245, 158, 11)) - Cuidado, carinho, calor humano

### Vibrant Accent Colors
- **Rosa Vibrante**: `#EC4899` (Pink-500) - Badges especiais, elementos femininos
- **Verde Esmeralda**: `#10B981` (Emerald-500) - WhatsApp, sucesso, saúde
- **Laranja Energético**: `#F97316` (Orange-500) - Energia, ação, urgência suave
- **Roxo Profundo**: `#8B5CF6` (Violet-500) - Premium, tecnologia, diferenciação
- **Ciano Brilhante**: `#06B6D4` (Cyan-500) - Informação, tecnologia, elementos frescos
- **Vermelho Coral**: `#EF4444` (Red-500) - Emergência, alerta, elementos críticos

### Background System
- **Global Background**: `bg-gradient-to-br from-rose-50 via-blue-50 to-amber-50`
- **Background Pattern**: Geometric shapes with vibrant colors at 5% opacity
  - Shapes: Squares (rotated), rectangles, circles
  - Colors: cyan-500, orange-500, violet-500, pink-500
  - Position: Fixed across entire site

### Typography Scale
- **H1**: `text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl`
- **Body**: `text-base sm:text-lg md:text-xl lg:text-2xl`
- **Small**: `text-xs sm:text-sm`

### Component Color Applications

#### HeroSection
- **Title Hierarchy**: 
  - "Seu Pet Precisa de Cuidado?" → `text-blue-600` (autoridade)
  - "CSM Clínica Veterinária 24 Horas" → `text-amber-500` (cuidado)
- **Badges**:
  - "+15k pets" → `bg-cyan-500` (informação/tech)
  - "Plantão 24h" → `bg-pink-500` (destaque especial)
  - "4.8 estrelas" → `bg-orange-500` (energia/ação)
  - "Equipe especializada" → `bg-violet-500` (premium/diferenciado)
- **Buttons**:
  - WhatsApp → `bg-emerald-500 hover:bg-emerald-600` (sucesso/saúde)
  - Ligação → `bg-blue-600 hover:bg-blue-700` (CTA primário)
  - Triagem → `bg-violet-500 hover:bg-violet-600` (tecnologia/premium)

### Design Principles (from logo analysis)
1. **Cores Chapadas**: Solid colors without gradients
2. **Linhas Retas e Simplicidade**: Clean geometric forms
3. **Minimalismo Funcional**: Essential elements only
4. **Geometria Consistente**: Uniform proportions and alignments

### Spacing System
- **Micro**: 4px, 8px (elementos pequenos)
- **Pequeno**: 12px, 16px (componentes)
- **Médio**: 24px, 32px (seções)
- **Grande**: 48px, 64px (layout principal)

### Button System
- All buttons use solid colors (no gradients)
- Hover states: Darker shade of same color
- `cursor-pointer` for clear interactivity
- Consistent padding: `px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7`

### Global Layout Structure
```
<body className="bg-gradient-to-br from-rose-50 via-blue-50 to-amber-50">
  <!-- Fixed Global Background Pattern -->
  <div className="fixed inset-0 opacity-5 pointer-events-none">
    <!-- Geometric shapes with vibrant colors -->
  </div>
  
  <div className="relative z-10">
    <Header />
    {children} <!-- All sections with transparent backgrounds -->
    <Footer />
  </div>
</body>
```

## 📁 Key Design Files
- `/docs/site/design-principles.md` - Complete design system documentation
- `/public/CMS-clinica-veterinaria-logo-lg-1.webp` - Brand logo reference

## 🎯 Design Consistency Rules
1. **No section-specific backgrounds** - Use global background only
2. **Vibrant colors for hierarchy** - Use accent colors strategically
3. **Brand colors for authority** - Blue for professional, amber for care
4. **Solid colors only** - No gradients on buttons/badges
5. **Consistent spacing** - Follow defined spacing system
6. **Mobile-first responsive** - All elements scale properly

## 📂 Project Structure & Important Files

### 📁 Main Directories
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Global layout + background system
│   ├── page.tsx           # Homepage entry point  
│   └── (routes)/          # Route groups (public pages)
├── components/
│   ├── sections/          # Homepage sections (Hero, Stats, etc.)
│   ├── layout/            # Header, Footer components
│   ├── ui/                # shadcn/ui components
│   └── triagem/           # AI triage system components
├── lib/
│   ├── env.ts             # Environment variables manager
│   ├── seo.ts             # SEO configuration
│   └── triagem/           # AI triage logic
└── stores/                # Zustand state management

docs/
├── site/                  # Site documentation
│   ├── design-principles.md    # Complete design system
│   └── csm-*.md               # Feature specifications
└── features/              # Feature documentation
```

### 🔧 Configuration Files
- **`.env.local`** - Environment variables (clinic info, contact, SEO)
- **`src/lib/env.ts`** - Typed environment access
- **`components.json`** - shadcn/ui configuration
- **`tailwind.config.*`** - Tailwind CSS setup
- **`tsconfig.json`** - TypeScript configuration

### 📱 Core Components
- **`HeroSection.tsx`** - Main landing with CTAs and branding
- **`TriagemWizard.tsx`** - AI-powered pet symptom analysis
- **`Header.tsx`** - Navigation with emergency contact
- **`Footer.tsx`** - Contact info and business details

## 🌐 Environment & Configuration

### 📋 Business Information (from .env.local)
```bash
NEXT_PUBLIC_CLINIC_NAME="CSM Clínica Veterinária"
NEXT_PUBLIC_PHONE_PRIMARY="(41) 3077-0023"
NEXT_PUBLIC_WHATSAPP="554130770023"
NEXT_PUBLIC_ADDRESS_FULL="Rua Julio Wischral, 1099 - Uberaba, Curitiba/PR"
NEXT_PUBLIC_STATS_PETS_CARED="15000"
NEXT_PUBLIC_STATS_YEARS_EXPERIENCE="7"
```

### 🔗 Key URLs & Links
- **WhatsApp**: Generated from `urls.whatsappWithMessage()`
- **Phone Call**: Generated from `urls.phoneCall`
- **Google Maps**: Configured in environment
- **Social Media**: Instagram (@csmvet), Facebook (csmvet)

### 🎯 SEO Strategy
- **Target Keywords**: `clínica veterinária curitiba`, `veterinário 24h`
- **Schema.org**: VeterinaryCare structured data
- **Local SEO**: Curitiba/Uberaba geographic targeting
- **Rich Snippets**: Reviews, FAQ, Business info

## 🚀 Development Commands

### 📦 Installation & Setup
```bash
npm install                    # Install dependencies
cp .env.example .env.local    # Setup environment
npm run dev                   # Start development server
```

### 🔨 Build & Deploy
```bash
npm run build                 # Production build
npm run start                 # Production server
npm run lint                  # Code linting
```

## 🔄 Recent Design Changes
- Removed gradients from buttons and badges (solid colors only)
- Implemented global background pattern across entire site
- Removed individual section backgrounds for consistency
- Applied vibrant accent colors to badges for better hierarchy
- Established clear color roles (blue=authority, amber=care, etc.)

## 🎨 Color Usage Guidelines
- **Blue (#2563EB)**: Main CTAs, professional elements, titles
- **Amber (#F59E0B)**: Secondary elements, care/warmth messaging
- **Emerald (#10B981)**: WhatsApp, success states, health-related
- **Violet (#8B5CF6)**: Technology features, premium services
- **Pink (#EC4899)**: Special highlights, feminine elements
- **Orange (#F97316)**: Action items, energy, ratings
- **Cyan (#06B6D4)**: Information, tech elements
- **Coral (#EF4444)**: Emergencies, alerts, critical actions

## 📚 Reference Documents
- **`README.md`** - Complete project documentation
- **`docs/site/design-principles.md`** - Design system specification
- **`docs/sistema_clinica_veterinaria_completo.md`** - Business requirements
- **`docs/features/triagem_ia_concept.md`** - AI triage system specs