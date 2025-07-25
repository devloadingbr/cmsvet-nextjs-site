'use client';

import { Calendar, Eye, Clock, ArrowRight, Mail } from 'lucide-react';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: '🚨 Emergência',
      categoryColor: 'bg-red-600 text-white',
      title: '10 Plantas Que Podem Intoxicar Seu Pet',
      excerpt: 'Saiba identificar os primeiros sintomas e como agir rapidamente para proteger seu animal.',
      date: '24 mai, 2025',
      readTime: '5 min',
      views: '1250 visualizações',
      image: 'bg-red-500'
    },
    {
      id: 2,
      category: '💉 Vacinas',
      categoryColor: 'bg-blue-600 text-white',
      title: 'Cronograma Completo de Vacinas para Filhotes',
      excerpt: 'Guia definitivo para proteger seu pet desde cedo com o calendário vacinal correto.',
      date: '21 mai, 2025',
      readTime: '8 min',
      views: '890 visualizações',
      image: 'bg-blue-600'
    },
    {
      id: 3,
      category: '👴 Pets Idosos',
      categoryColor: 'bg-violet-600 text-white',
      title: 'Cuidados Especiais com Pets Idosos no Inverno',
      excerpt: 'Como adaptar a rotina dos pets mais velhos durante o período mais frio do ano.',
      date: '19 mai, 2025',
      readTime: '6 min',
      views: '720 visualizações',
      image: 'bg-violet-600'
    }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            📖 Blog <span className="text-blue-600">CSM</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conteúdo Veterinário Atualizado<br />
            <span className="text-lg">Informações confiáveis para cuidar melhor do seu pet, escritas por veterinários especializados</span>
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Image Placeholder */}
              <div className={`h-48 ${post.image} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-6xl opacity-50">📝</div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
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
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1 transition-colors duration-300 cursor-pointer">
                    <span>Ler mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-blue-200">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              📧 Receba Dicas Veterinárias Semanais
            </h3>
            <p className="text-slate-600 mb-6">
              *Enviamos apenas conteúdo útil, sem spam
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 mx-auto cursor-pointer">
            <span>Ver Todos os Artigos</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}