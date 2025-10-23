# STACK E FILOSOFIA DE DESENVOLVIMENTO

## CSMVet Club Landing Page - Guia Técnico Completo

---

## 🎯 **FILOSOFIA CENTRAL**

> "Simplicidade é a máxima sofisticação." - Leonardo da Vinci

Este projeto segue princípios rigorosos de **minimalismo técnico**, **clean code** e **eficiência máxima**. Cada linha de código deve ter propósito claro. Cada dependência deve ser justificável. Cada componente deve ser reutilizável.

### **Princípios Fundamentais**

**1. Minimalismo Radical**

- Menos código = menos bugs
- Menos dependências = menos vulnerabilidades
- Menos complexidade = mais manutenibilidade

**2. Performance First**

- Cada KB importa
- Lazy loading por padrão
- Otimização de imagens obrigatória
- Bundle size monitorado constantemente

**3. Reusabilidade Máxima**

- DRY (Don't Repeat Yourself) religiosamente
- Componentes atômicos e composíveis
- Hooks customizados para lógica compartilhada
- Utilitários centralizados

**4. Código Autodocumentado**

- Nomes descritivos > comentários
- TypeScript para contratos claros
- Estrutura de pastas intuitiva
- Componentes pequenos e focados

**5. Type Safety**

- TypeScript strict mode obrigatório
- Sem `any` (use `unknown` se necessário)
- Props sempre tipadas
- Validação em runtime com Zod

---

## 🏗️ **STACK TÉCNICA**

### **Core Stack**

```
Next.js 14.2+ (App Router)
├── React 18.3+
├── TypeScript 5+
└── Node.js 20+

Styling
├── TailwindCSS 3.4+
├── PostCSS
└── Autoprefixer

Components
├── shadcn/ui (copy-paste)
├── Lucide React (ícones)
└── Radix UI (primitivos)

Forms & Validation
├── React Hook Form 7+
└── Zod 3+

Development
├── ESLint
├── Prettier
└── TypeScript strict
```

### **Justificativa da Stack**

**Next.js 14 (App Router)**

- SSG nativo para landing page estática
- Otimização automática de imagens (WebP/AVIF)
- Deploy zero-config na Vercel
- SEO excelente out-of-the-box
- React Server Components

**TailwindCSS**

- Utility-first = menos CSS customizado
- Design system via config
- Purge automático = bundle mínimo
- Mobile-first nativo

**shadcn/ui**

- Componentes acessíveis (WCAG 2.1)
- Copy-paste = controle total
- Customizável via Tailwind
- Zero dependências ocultas

**TypeScript**

- Contratos claros
- Refatoração segura
- Bugs detectados em dev time
- Documentação viva

---

## 📐 **ARQUITETURA DO PROJETO**

```
csmvet-club-landingpage/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Layout raiz
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Tailwind + CSS global
│   └── api/contact/route.ts      # API formulário
│
├── components/
│   ├── sections/                 # Seções da landing
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── ...
│   ├── ui/                       # Componentes base (shadcn)
│   ├── shared/                   # Componentes reutilizáveis
│   └── forms/                    # Formulários
│
├── lib/                          # Utilitários
│   ├── utils.ts
│   ├── constants.ts
│   ├── plans.ts                  # Dados dos planos
│   └── validations.ts            # Schemas Zod
│
├── hooks/                        # Custom hooks
├── types/                        # TypeScript types
├── public/images/                # Assets otimizados
└── docs/                         # Documentação
```

---

## 🎨 **DESIGN SYSTEM NO TAILWIND**

### **tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        csm: {
          blue: { DEFAULT: '#1E5AA8', hover: '#164A8C', light: '#E8F4F8' },
          yellow: { DEFAULT: '#F2B749' },
          orange: { DEFAULT: '#E67E22', hover: '#D35400' },
          gray: { DEFAULT: '#7F8C8D' },
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        sans: ['var(--font-open-sans)'],
        montserrat: ['var(--font-montserrat)'],
      },
      spacing: {
        xs: '4px',
        s: '8px',
        m: '16px',
        l: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
    },
  },
}
```

---

## 🧩 **PADRÕES DE COMPONENTES**

### **Componente Ideal**

```typescript
// components/shared/PlanCard.tsx
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'
import type { Plan } from '@/types/plan'

interface PlanCardProps {
  plan: Plan
  isPopular?: boolean
  onSelect: (planId: string) => void
}

export function PlanCard({ plan, isPopular = false, onSelect }: PlanCardProps) {
  return (
    <Card className="relative p-xl border-2 hover:shadow-card-hover transition-all">
      {isPopular && <Badge className="absolute -top-3 right-4">Popular</Badge>}

      <h3 className="font-poppins text-2xl mb-m">{plan.name}</h3>

      <div className="mb-l">
        <span className="text-4xl font-bold">R$ {plan.priceAnnual}</span>
        <span className="text-sm text-csm-gray">/ano</span>
      </div>

      <ul className="space-y-s mb-xl">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-s">
            <Check className="w-5 h-5 text-green-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button onClick={() => onSelect(plan.id)} className="w-full">
        Escolher {plan.name}
      </Button>
    </Card>
  )
}
```

**Princípios aplicados:**

- ✅ Single Responsibility
- ✅ Props tipadas
- ✅ Composição de componentes base
- ✅ Acessibilidade
- ✅ Reutilizável

---

## 📊 **GERENCIAMENTO DE DADOS**

### **Centralização**

```typescript
// lib/plans.ts
import type { Plan } from '@/types/plan'

export const PLANS: Plan[] = [
  {
    id: 'familia',
    name: 'Plano Família',
    petsRange: '1-3 pets',
    priceAnnual: 590,
    features: ['Vacinas completas', 'Microchipagem', 'R$ 1.500 crédito'],
    isPopular: false,
  },
  // ... outros planos
]

export const getPlanById = (id: string) => PLANS.find(p => p.id === id)
export const getPopularPlan = () => PLANS.find(p => p.isPopular)
```

**Vantagens:**

- ✅ Single Source of Truth
- ✅ Type-safe
- ✅ Fácil manutenção
- ✅ Testável

---

## 🎣 **CUSTOM HOOKS**

```typescript
// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
```

---

## 🔐 **VALIDAÇÃO**

```typescript
// lib/validations.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email().toLowerCase(),
  phone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/),
  petsCount: z.enum(['1-3', '4-6', '7-10', '10+']),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

---

## ⚡ **OTIMIZAÇÕES**

### **1. Imagens**

```typescript
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Família com pets"
  width={1920}
  height={1080}
  priority
  quality={85}
/>
```

### **2. Lazy Loading**

```typescript
import dynamic from 'next/dynamic'

const FAQ = dynamic(() => import('@/components/sections/FAQ'))
```

### **3. Fonts**

```typescript
import { Poppins, Open_Sans } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})
```

---

## 📝 **CONVENÇÕES**

### **Nomenclatura**

```typescript
// ✅ BOM
const userEmail = 'user@example.com'
const MAX_PETS = 10
const isValid = true

function calculatePrice(count: number): number {}

// ❌ RUIM
const e = 'user@example.com'
const max = 10
function calc(n: any) {}
```

### **Estrutura de Componente**

```typescript
// 1. Imports
import { useState } from 'react'
import type { Props } from './types'

// 2. Types
interface ComponentProps extends Props {}

// 3. Componente
export function Component({ prop }: ComponentProps) {
  // 3.1 Hooks
  const [state, setState] = useState()

  // 3.2 Handlers
  const handleClick = () => {}

  // 3.3 Render
  return <div />
}
```

---

## 🚀 **WORKFLOW**

### **Setup**

```bash
npm install
cp .env.example .env.local
npm run dev
```

### **Desenvolvimento**

```bash
# Branch
git checkout -b feature/pricing

# Desenvolva
# - Componente em components/
# - Dados em lib/
# - Tipos em types/

# Valide
npm run lint
npm run type-check
npm run build

# Commit
git commit -m "feat: adiciona seção pricing"
```

### **Checklist Pré-Deploy**

- [ ] Build sem erros
- [ ] Lint sem warnings
- [ ] TypeScript sem erros
- [ ] Lighthouse > 90
- [ ] Mobile testado
- [ ] Imagens otimizadas
- [ ] SEO configurado

---

## 🎯 **MÉTRICAS DE QUALIDADE**

### **Performance**

- First Contentful Paint < 1s
- Largest Contentful Paint < 2.5s
- Bundle size < 200KB (gzipped)
- Lighthouse score > 95

### **Code Quality**

- TypeScript strict mode
- 0 ESLint warnings
- Componentes < 200 linhas
- Funções < 50 linhas
- Cobertura de tipos 100%

### **Acessibilidade**

- WCAG 2.1 AA mínimo
- Semântica HTML correta
- Alt text em todas imagens
- Contraste adequado
- Navegação por teclado

---

## 📚 **RECURSOS**

### **Documentação**

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)

### **Ferramentas**

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

## ✅ **RESUMO**

Este projeto prioriza:

**Minimalismo**: Apenas o essencial  
**Performance**: Cada byte otimizado  
**Reusabilidade**: DRY em tudo  
**Type Safety**: TypeScript strict  
**Acessibilidade**: WCAG 2.1 AA  
**Manutenibilidade**: Código limpo e documentado

**Stack final:**

```
Next.js 14 + TypeScript + TailwindCSS + shadcn/ui
```

**Resultado esperado:**

- 🚀 Lighthouse 95+
- 📦 Bundle < 200KB
- ♿ WCAG 2.1 AA
- 🎨 Design system consistente
- 🔧 Fácil manutenção
- 💰 Deploy gratuito (Vercel)

---

**Documento vivo. Atualizar conforme projeto evolui.**
