'use client';

import { Calendar, Eye, Clock, ArrowRight, Mail } from 'lucide-react';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: 'Emergência',
      title: '10 Plantas Que Podem Intoxicar Seu Pet',
      excerpt: 'Saiba identificar os primeiros sintomas e como agir rapidamente para proteger seu animal.',
      date: '24 mai, 2025',
      readTime: '5 min',
      views: '1250 visualizações',
      image: 'bg-csm-blue',
      badge: 'Mais Lido',
      badgeVariant: 'yellow' as const
    },
    {
      id: 2,
      category: 'Vacinas',
      title: 'Cronograma Completo de Vacinas para Filhotes',
      excerpt: 'Guia definitivo para proteger seu pet desde cedo com o calendário vacinal correto.',
      date: '21 mai, 2025',
      readTime: '8 min',
      views: '890 visualizações',
      image: 'bg-csm-blue',
      badge: 'Essencial',
      badgeVariant: 'yellow' as const
    },
    {
      id: 3,
      category: 'Pets Idosos',
      title: 'Cuidados Especiais com Pets Idosos no Inverno',
      excerpt: 'Como adaptar a rotina dos pets mais velhos durante o período mais frio do ano.',
      date: '19 mai, 2025',
      readTime: '6 min',
      views: '720 visualizações',
      image: 'bg-csm-blue'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            Blog <span className="text-csm-blue">CSM</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Conteúdo Veterinário Atualizado<br />
            <span className="text-lg">Informações confiáveis para cuidar melhor do seu pet, escritas por veterinários especializados</span>
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden border border-csm-blue-light hover:shadow-md transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className={`h-48 ${post.image} flex items-center justify-center`}>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <BadgeCSM variant="blue">
                    {post.category}
                  </BadgeCSM>
                  {post.badge && (
                    <BadgeCSM variant={post.badgeVariant || 'blue'}>
                      {post.badge}
                    </BadgeCSM>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-csm-gray-dark mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-csm-gray leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-csm-gray mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-csm-gray">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                  
                  <ButtonCSM variant="secondary" size="sm">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </ButtonCSM>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-lg p-8 border border-csm-blue-light text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-csm-blue rounded-lg flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-csm-gray-dark mb-4">
              Receba Dicas Veterinárias Semanais
            </h3>
            <p className="text-csm-gray mb-6">
              *Enviamos apenas conteúdo útil, sem spam
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border-2 border-csm-blue-light rounded-lg focus:border-csm-blue focus:outline-none transition-colors duration-300"
              />
              <ButtonCSM variant="primary">
                Inscrever-se
              </ButtonCSM>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <ButtonCSM variant="primary" size="lg">
            Ver Todos os Artigos
            <ArrowRight className="w-5 h-5" />
          </ButtonCSM>
        </div>
      </div>
    </section>
  );
}