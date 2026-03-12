import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, BookOpen, Calendar, Clock, Leaf, MessageCircle, Phone, Shield } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { CardCSM, CardCsmContent } from '@/components/ui/card-csm';
import { urls, whatsappMessages } from '@/lib/env';

export const metadata: Metadata = {
  title: 'Central de Recursos para Tutores | CSM Clínica Veterinária',
  description: 'Central de recursos com guias práticos para tutores: primeiros socorros, sinais de alerta, vacinação, exames e conteúdos do blog CSM.',
};

export default function RecursosPage() {
  const quickAccess = [
    {
      title: 'Primeiros Socorros',
      description: 'Condutas iniciais até chegar ao atendimento veterinário.',
      href: '/emergencia',
      icon: AlertTriangle,
      badge: 'Urgência',
      badgeVariant: 'yellow' as const,
      cta: 'Ver orientações',
    },
    {
      title: 'Plantas Tóxicas',
      description: 'Itens comuns em casa que podem intoxicar cães e gatos.',
      href: '/emergencia',
      icon: Leaf,
      badge: 'Prevenção',
      badgeVariant: 'blue' as const,
      cta: 'Consultar lista',
    },
    {
      title: 'Calendário de Vacinas',
      description: 'Protocolos por fase da vida para manter proteção contínua.',
      href: '/vacinacao',
      icon: Calendar,
      badge: 'Essencial',
      badgeVariant: 'yellow' as const,
      cta: 'Ver vacinação',
    },
    {
      title: 'Exames e Check-up',
      description: 'Exames para diagnóstico rápido e acompanhamento preventivo.',
      href: '/exames',
      icon: Shield,
      badge: 'Diagnóstico',
      badgeVariant: 'blue' as const,
      cta: 'Ver exames',
    },
    {
      title: 'Conteúdo do Blog',
      description: 'Artigos com orientações clínicas confiáveis para o dia a dia.',
      href: '/',
      icon: BookOpen,
      badge: 'Atualizado',
      badgeVariant: 'gray' as const,
      cta: 'Ler artigos',
    },
    {
      title: 'Contato e Agendamento',
      description: 'Fale com nossa equipe para dúvidas, retorno e orientações.',
      href: '/contato',
      icon: MessageCircle,
      badge: 'Atendimento',
      badgeVariant: 'blue' as const,
      cta: 'Entrar em contato',
    },
  ];

  const featuredGuides = [
    {
      category: 'Emergência',
      title: 'Sinais de alerta que exigem atendimento imediato',
      excerpt: 'Reconheça rapidamente os sintomas críticos para agir com segurança.',
      readTime: '4 min de leitura',
      href: '/emergencia',
    },
    {
      category: 'Prevenção',
      title: 'Como manter o calendário vacinal em dia sem erros',
      excerpt: 'Entenda as fases e reforços mais importantes para cães e gatos.',
      readTime: '5 min de leitura',
      href: '/vacinacao',
    },
    {
      category: 'Diagnóstico',
      title: 'Quando pedir exames laboratoriais no check-up do seu pet',
      excerpt: 'Veja quando os exames ajudam no diagnóstico precoce e na prevenção.',
      readTime: '6 min de leitura',
      href: '/exames',
    },
  ];

  const faqs = [
    {
      question: 'Meu pet ingeriu algo tóxico. O que devo fazer primeiro?',
      answer:
        'Mantenha a calma, evite medicar por conta própria e busque atendimento imediato. Se possível, leve informações sobre a substância ingerida para agilizar a conduta clínica.',
    },
    {
      question: 'Quando uma situação deixa de ser observação e vira urgência?',
      answer:
        'Dificuldade respiratória, convulsão, sangramento intenso, vômito persistente, dor intensa e prostração são sinais de alerta. Em caso de dúvida, trate como urgência.',
    },
    {
      question: 'Posso aguardar para vacinar depois?',
      answer:
        'Atrasos no protocolo vacinal podem reduzir a proteção do pet. O ideal é revisar o cronograma com a equipe e regularizar o quanto antes.',
    },
    {
      question: 'Exame preventivo é só para pet idoso?',
      answer:
        'Não. Filhotes, adultos e idosos se beneficiam de check-ups em periodicidades diferentes. A prevenção permite detectar alterações antes de agravarem.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-white to-csm-blue-light/10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <BadgeCSM variant="yellow">Conteúdo para tutores</BadgeCSM>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-csm-gray-dark">
                Central de <span className="text-csm-blue">Recursos para Tutores</span>
              </h1>
              <p className="text-lg sm:text-xl text-csm-gray leading-relaxed max-w-2xl">
                Guias práticos para prevenção, primeiros cuidados e decisões mais seguras no dia a dia do seu pet.
              </p>
              <div className="flex flex-wrap gap-3">
                <BadgeCSM variant="blue" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Conteúdo rápido
                </BadgeCSM>
                <BadgeCSM variant="gray" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Base clínica
                </BadgeCSM>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonCSM asChild variant="primary" size="lg">
                  <Link href="#acesso-rapido">
                    Ver guias agora
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </ButtonCSM>
                <ButtonCSM asChild variant="secondary" size="lg">
                  <a href={urls.whatsappWithMessage(whatsappMessages.info)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </ButtonCSM>
              </div>
            </div>

            <div className="relative">
              <CardCSM variant="highlight" className="p-8">
                <h2 className="text-2xl font-bold text-csm-gray-dark mb-4">Como usar esta central</h2>
                <ul className="space-y-3 text-csm-gray">
                  <li>Comece pelos tópicos de urgência quando houver sinais críticos.</li>
                  <li>Use os guias de prevenção para manter rotina de cuidado.</li>
                  <li>Em caso de dúvida, fale com nossa equipe imediatamente.</li>
                </ul>
              </CardCSM>
              <div className="absolute -top-5 -right-5 z-10">
                <CardCSM className="bg-csm-blue text-white border-csm-blue">
                  <CardCsmContent className="p-4 text-center">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-xs text-white/90">Pronto atendimento</div>
                  </CardCsmContent>
                </CardCSM>
              </div>
              <div className="absolute -bottom-5 -left-5 z-10">
                <CardCSM className="bg-csm-yellow text-csm-gray-dark border-csm-yellow">
                  <CardCsmContent className="p-4 text-center">
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-xs">Atendimentos</div>
                  </CardCsmContent>
                </CardCSM>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="acesso-rapido" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="blue" className="mb-4">Acesso rápido</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Recursos organizados por <span className="text-csm-blue">necessidade</span>
            </h2>
            <p className="text-lg text-csm-gray max-w-3xl mx-auto">
              Encontre rapidamente o que precisa para agir com mais segurança e clareza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccess.map((item) => {
              const Icon = item.icon;
              return (
                <CardCSM key={item.title} variant="default" className="h-full">
                  <CardCsmContent className="p-6 flex h-full flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-csm-blue-light flex items-center justify-center">
                        <Icon className="w-5 h-5 text-csm-blue" />
                      </div>
                      <BadgeCSM variant={item.badgeVariant}>{item.badge}</BadgeCSM>
                    </div>
                    <h3 className="text-xl font-bold text-csm-gray-dark mb-3">{item.title}</h3>
                    <p className="text-csm-gray leading-relaxed mb-6 flex-grow">{item.description}</p>
                    <ButtonCSM asChild variant="secondary" size="sm">
                      <Link href={item.href}>
                        {item.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </ButtonCSM>
                  </CardCsmContent>
                </CardCSM>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-csm-urgency">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-white text-sm font-semibold uppercase tracking-wide">Situação crítica</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">Seu pet está com sinais graves agora?</h2>
              <p className="text-white/90 mt-2">Acione nossa equipe imediatamente para orientação e atendimento.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <ButtonCSM asChild variant="secondary" size="md" className="bg-white text-csm-urgency border-0 hover:bg-white/90">
                <a href={urls.phoneCall}>
                  <Phone className="w-5 h-5" />
                  Ligar agora
                </a>
              </ButtonCSM>
              <ButtonCSM asChild variant="secondary" size="md" className="bg-white text-csm-urgency border-0 hover:bg-white/90">
                <a href={urls.whatsappWithMessage(whatsappMessages.emergency)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp emergência
                </a>
              </ButtonCSM>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-csm-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BadgeCSM variant="yellow" className="mb-4">Destaques da semana</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Conteúdo para <span className="text-csm-blue">tomar decisões melhores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <CardCSM key={guide.title} variant="default" className="h-full">
                <CardCsmContent className="p-6 flex h-full flex-col">
                  <BadgeCSM variant="blue" className="w-fit mb-4">{guide.category}</BadgeCSM>
                  <h3 className="text-xl font-bold text-csm-gray-dark mb-3">{guide.title}</h3>
                  <p className="text-csm-gray mb-5 leading-relaxed flex-grow">{guide.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-csm-gray">{guide.readTime}</span>
                    <ButtonCSM asChild variant="secondary" size="sm">
                      <Link href={guide.href}>
                        Ler agora
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </ButtonCSM>
                  </div>
                </CardCsmContent>
              </CardCSM>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <BadgeCSM variant="blue" className="mb-4">FAQ do tutor</BadgeCSM>
            <h2 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
              Dúvidas mais <span className="text-csm-blue">frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <CardCSM key={faq.question} variant="default">
                <details className="group">
                  <summary className="list-none cursor-pointer p-5 font-semibold text-csm-gray-dark flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-csm-blue group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-csm-gray border-t border-csm-blue-light leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </CardCSM>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-csm-blue-light/10 to-white rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-csm-gray-dark mb-4">
                  Quer um plano de cuidado para o seu <span className="text-csm-blue">pet</span>?
                </h2>
                <p className="text-lg text-csm-gray leading-relaxed">
                  Nossa equipe pode ajudar com orientações personalizadas de prevenção, diagnóstico e acompanhamento.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonCSM asChild variant="whatsapp" size="lg" className="flex-1">
                  <a href={urls.whatsappWithMessage(whatsappMessages.info)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </ButtonCSM>
                <ButtonCSM asChild variant="secondary" size="lg" className="flex-1">
                  <Link href="/contato">
                    <Phone className="w-5 h-5" />
                    Falar com a equipe
                  </Link>
                </ButtonCSM>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}