'use client';

import { CardCSM, CardCsmContent, CardCsmHeader, CardCsmTitle } from '@/components/ui/card-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function TeamSection() {
  const clinicalDirector = {
    name: 'Dra. Catarina Gadelha',
    role: 'Diretora Clínica e Responsável Técnica',
    experience: '8+ anos de experiência',
    description: 'Responsável pela operação da clínica, protocolos médicos e coordenação de todas as cirurgias e decisões clínicas.',
    avatar: 'CG',
    color: 'bg-csm-blue'
  };

  const onCallVets = [
    { name: 'Dr. Bruno Steven Becker', avatar: 'BB' },
    { name: 'Dra. Carolina Grassi Warnecke', avatar: 'CW' },
    { name: 'Dra. Isabella Martins Pereira', avatar: 'IP' },
    { name: 'Dra. Thayana Martins Piber', avatar: 'TP' },
    { name: 'Dra. Fernanda Heofacker', avatar: 'FH' },
    { name: 'Dra. Thiely Vieira', avatar: 'TV' }
  ];

  return (
    <section className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-csm-gray-dark mb-6">
            Nossa Equipe <span className="text-csm-blue">Veterinária</span>
          </h2>
          <p className="text-xl text-csm-gray max-w-3xl mx-auto">
            Profissionais experientes e dedicados ao cuidado do seu pet
          </p>
        </div>

        {/* Two Column Layout: Dra. Catarina | Outros Veterinários */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Coluna Esquerda - Dra. Catarina */}
          <CardCSM variant="highlight">
            <CardCsmHeader className="text-center">
              <Avatar className={`w-24 h-24 ${clinicalDirector.color} mx-auto mb-4`}>
                <AvatarFallback className="text-2xl font-bold text-white bg-transparent">
                  {clinicalDirector.avatar}
                </AvatarFallback>
              </Avatar>
              
              <CardCsmTitle className="text-xl font-bold text-csm-gray-dark mb-2">
                {clinicalDirector.name}
              </CardCsmTitle>
              
              <BadgeCSM variant="yellow" className="text-sm mb-2">
                {clinicalDirector.role}
              </BadgeCSM>
              
              <BadgeCSM variant="blue" className="text-xs">
                {clinicalDirector.experience}
              </BadgeCSM>
            </CardCsmHeader>

            <CardCsmContent className="text-center">
              <p className="text-sm text-csm-gray leading-relaxed">
                {clinicalDirector.description}
              </p>
            </CardCsmContent>
          </CardCSM>

          {/* Coluna Direita - Equipe de Plantão */}
          <CardCSM variant="default">
            <CardCsmHeader className="text-center pb-4">
              <h3 className="text-xl font-bold text-csm-gray-dark mb-2">
                Equipe de <span className="text-csm-blue">Plantão 24h</span>
              </h3>
              <p className="text-sm text-csm-gray">
                Veterinários especializados disponíveis a qualquer momento
              </p>
            </CardCsmHeader>

            <CardCsmContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {onCallVets.map((vet, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-csm-blue-light transition-colors duration-200"
                  >
                    <Avatar className="w-10 h-10 bg-csm-blue flex-shrink-0">
                      <AvatarFallback className="text-xs font-bold text-white bg-transparent">
                        {vet.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-csm-gray-dark truncate">
                        {vet.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardCsmContent>
          </CardCSM>
        </div>
      </div>
    </section>
  );
}