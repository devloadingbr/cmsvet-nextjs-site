# 🐾 CSM Clínica Veterinária - Website

Site institucional moderno para a CSM Clínica Veterinária, desenvolvido com as mais recentes tecnologias web para oferecer uma experiência excepcional aos tutores de pets.

## 🎯 Objetivo do Projeto

Criar um site completo e profissional para a CSM Clínica Veterinária que:

- **Atraia novos clientes** com design moderno e responsivo
- **Comunique confiança** através de depoimentos e credenciais
- **Facilite o agendamento** via WhatsApp e formulários
- **Eduque os tutores** sobre cuidados veterinários
- **Destaque os diferenciais** da clínica (24h, equipe especializada)
- **Otimize para SEO local** em Curitiba/PR

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS v4** - Framework CSS utilitário
- **shadcn/ui** - Componentes reutilizáveis e acessíveis

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Git** - Controle de versão

### SEO e Performance
- **Metadados otimizados** - Open Graph, Twitter Cards
- **Schema.org** - Dados estruturados para SEO
- **Sitemap automático** - Geração dinâmica
- **Progressive Web App** - Manifest e service workers

## 📁 Estrutura do Projeto

```
src/
├── app/                          # App Router (Next.js 15)
│   ├── layout.tsx               # Layout principal com SEO
│   ├── page.tsx                 # Página inicial
│   ├── sitemap.ts              # Sitemap automático
│   ├── robots.ts               # Robots.txt
│   └── globals.css             # Estilos globais
│
├── components/                   # Componentes React
│   ├── layout/                  # Componentes de layout
│   │   ├── Header.tsx          # Cabeçalho navegação
│   │   └── Footer.tsx          # Rodapé com contatos
│   │
│   ├── pages/                   # Páginas completas
│   │   └── CSMHomepage.tsx     # Homepage principal
│   │
│   ├── sections/                # Seções da homepage
│   │   ├── HeroSection.tsx     # Seção principal
│   │   ├── StatsSection.tsx    # Estatísticas
│   │   ├── TriageSection.tsx   # Triagem inteligente
│   │   ├── ServicesSection.tsx # Serviços oferecidos
│   │   ├── WhyChooseSection.tsx # Diferenciais
│   │   ├── TeamSection.tsx     # Equipe veterinária
│   │   └── TestimonialsSection.tsx # Depoimentos
│   │
│   └── ui/                      # Componentes shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ...
│
├── lib/                         # Utilitários e configurações
│   ├── env.ts                  # Variáveis de ambiente
│   ├── seo.ts                  # Configurações de SEO
│   └── utils.ts                # Funções utilitárias
│
public/                          # Arquivos estáticos
├── site.webmanifest            # Manifest PWA
├── favicon.ico                 # Ícone do site
└── images/                     # Imagens e assets
```

## 🔧 Configuração de Ambiente

### Variáveis de Ambiente

O projeto utiliza um sistema centralizado de configuração através de variáveis de ambiente:

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local
```

### Categorias de Configuração

#### 📋 Informações da Clínica
```env
NEXT_PUBLIC_CLINIC_NAME="CSM Clínica Veterinária"
NEXT_PUBLIC_CLINIC_TAGLINE="Cuidado veterinário 24 horas com amor e dedicação"
NEXT_PUBLIC_CLINIC_DESCRIPTION="Descrição da clínica..."
```

#### 📞 Contato
```env
NEXT_PUBLIC_PHONE_PRIMARY="(41) 3077-0023"
NEXT_PUBLIC_PHONE_SECONDARY="(41) 99598-8646"
NEXT_PUBLIC_WHATSAPP="554130770023"
NEXT_PUBLIC_EMAIL="contato@csmvet.com.br"
```

#### 📍 Endereço
```env
NEXT_PUBLIC_ADDRESS_FULL="Rua Julio Wischral, 1099 - Uberaba, Curitiba/PR"
NEXT_PUBLIC_ADDRESS_CITY="Curitiba"
NEXT_PUBLIC_ADDRESS_STATE="PR"
```

#### 📊 Estatísticas
```env
NEXT_PUBLIC_STATS_PETS_CARED="15000"
NEXT_PUBLIC_STATS_YEARS_EXPERIENCE="7"
NEXT_PUBLIC_STATS_RATING="4.8"
```

#### 🔍 SEO
```env
NEXT_PUBLIC_SEO_TITLE="CSM Clínica Veterinária | Atendimento 24h em Curitiba"
NEXT_PUBLIC_SEO_DESCRIPTION="Descrição otimizada para SEO..."
NEXT_PUBLIC_SEO_KEYWORDS="clínica veterinária curitiba, veterinário 24h..."
```

#### 🔧 APIs e Serviços
```env
# OpenAI (triagem inteligente)
OPENAI_API_KEY="sk-exemplo-api-key"

# Supabase (banco de dados)
NEXT_PUBLIC_SUPABASE_URL="https://exemplo.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="exemplo-key"

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# WhatsApp Business API
WHATSAPP_ACCESS_TOKEN="exemplo-token"

# Stripe (pagamentos)
STRIPE_PUBLISHABLE_KEY="pk_test_exemplo"
```

### Helpers de Configuração

O arquivo `src/lib/env.ts` fornece acesso tipado e organizado às variáveis:

```typescript
import { clinic, contact, address, stats, urls } from '@/lib/env';

// Uso em componentes
<h1>{clinic.name}</h1>
<p>{contact.phone.primary}</p>
<a href={urls.whatsapp}>WhatsApp</a>
```

## 🎨 Sistema de Design

### Cores Principais
- **Azul**: `#2563eb` - Confiança e profissionalismo
- **Rosa**: `#ec4899` - Carinho e cuidado
- **Verde**: `#10b981` - Saúde e vitalidade
- **Âmbar**: `#f59e0b` - Energia e otimismo

### Componentes shadcn/ui
Utilizamos a biblioteca shadcn/ui para consistência e acessibilidade:
- **Card** - Containers de conteúdo
- **Button** - Botões de ação
- **Badge** - Marcadores e tags
- **Avatar** - Fotos de perfil
- **Sheet** - Menu mobile
- **NavigationMenu** - Navegação

## 🔍 SEO e Performance

### Metadados Otimizados
- **Title tags** dinâmicos e localizados
- **Meta descriptions** com palavras-chave
- **Open Graph** para redes sociais
- **Twitter Cards** para Twitter
- **Canonical URLs** para evitar duplicação

### Dados Estruturados (Schema.org)
```json
{
  "@type": "VeterinaryCare",
  "name": "CSM Clínica Veterinária",
  "address": { /* endereço estruturado */ },
  "telephone": "(41) 3077-0023",
  "openingHours": "Mo-Su 00:00-23:59"
}
```

### Funcionalidades SEO
- ✅ **Sitemap automático** (`/sitemap.xml`)
- ✅ **Robots.txt** (`/robots.txt`)
- ✅ **Manifest PWA** (`/site.webmanifest`)
- ✅ **FAQ Schema** para rich snippets
- ✅ **Review Schema** para avaliações
- ✅ **LocalBusiness** para SEO local

### Palavras-chave Foco
- `clínica veterinária curitiba`
- `veterinário 24h`
- `emergência veterinária`
- `consulta veterinária uberaba`
- `vacina pet curitiba`

## 🚀 Desenvolvimento

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]
cd csmvet-site

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas configurações

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run type-check   # Verificação de tipos TypeScript
```

### Comandos Git
```bash
# Desenvolvimento
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# Build e deploy
npm run build
npm run start
```

## 📱 Funcionalidades

### Homepage Completa
- **Hero Section** - Chamada principal com CTAs
- **Trust Badges** - Credenciais e estatísticas
- **Serviços** - Cards dos principais serviços
- **Diferenciais** - Por que escolher a CSM
- **Equipe** - Veterinários especializados
- **Depoimentos** - Casos de sucesso reais
- **Triagem** - Sistema inteligente de avaliação

### Integrações
- **WhatsApp** - Links diretos com mensagens pré-definidas
- **Google Maps** - Localização e direções
- **Calendário** - Agendamento online (futuro)
- **Analytics** - Rastreamento de conversões

### Responsividade
- **Mobile-first** - Otimizado para dispositivos móveis
- **Tablet** - Layout adaptado para tablets
- **Desktop** - Experiência completa em telas grandes

## 🔮 Próximas Funcionalidades

### Planejadas
- [ ] **Sistema de Agendamento** online
- [ ] **Portal do Cliente** com histórico
- [ ] **Blog** com dicas veterinárias
- [ ] **Galeria** de casos de sucesso
- [ ] **Chat** em tempo real
- [ ] **App Mobile** nativo

### Integrações Futuras
- [ ] **Calendly** - Agendamento
- [ ] **Stripe** - Pagamentos online
- [ ] **SendGrid** - E-mails transacionais
- [ ] **Pusher** - Notificações real-time

## 🤝 Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Padrões de Código
- **TypeScript** obrigatório
- **ESLint** + **Prettier** configurados
- **Conventional Commits** para mensagens
- **shadcn/ui** para novos componentes

## 📝 Licença

Este projeto é propriedade da CSM Clínica Veterinária. Todos os direitos reservados.

## 📞 Suporte

Para dúvidas sobre o projeto:
- **E-mail**: dev@csmvet.com.br
- **WhatsApp**: (41) 99598-8646
- **Site**: https://csmvet.com.br

---

**Desenvolvido com 💖 para a CSM Clínica Veterinária**