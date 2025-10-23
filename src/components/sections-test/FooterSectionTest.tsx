'use client';

import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function FooterSectionTest() {
  return (
    <section id="footer" className="fullpage-section footer-section bg-csm-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Coluna 1: Logo e Contato */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-csm-yellow">CSM Veterinária</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(41) 3077-0023</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(41) 99598-8646</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@csmvet.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Rua Manoel Ribas, 5641<br />Uberaba, Curitiba - PR</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-csm-yellow transition-colors">Início</a></li>
              <li><a href="#club" className="hover:text-csm-yellow transition-colors">CSMVet Club</a></li>
              <li><a href="#consultas" className="hover:text-csm-yellow transition-colors">Consultas</a></li>
              <li><a href="#equipe" className="hover:text-csm-yellow transition-colors">Nossa Equipe</a></li>
              <li><a href="#cta" className="hover:text-csm-yellow transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#consultas" className="hover:text-csm-yellow transition-colors">Consultas</a></li>
              <li><a href="#vacinas" className="hover:text-csm-yellow transition-colors">Vacinas</a></li>
              <li><a href="#exames" className="hover:text-csm-yellow transition-colors">Exames</a></li>
              <li><a href="#cirurgias" className="hover:text-csm-yellow transition-colors">Cirurgias</a></li>
              <li><a href="#internamento" className="hover:text-csm-yellow transition-colors">Internamento</a></li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/csmvet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-csm-yellow hover:text-csm-gray-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/csmvet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-csm-yellow hover:text-csm-gray-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p className="mb-2">CNPJ: 00.000.000/0001-00</p>
          <p className="mb-4">
            <a href="/privacidade" className="hover:text-csm-yellow transition-colors">Política de Privacidade</a>
            {' • '}
            <a href="/termos" className="hover:text-csm-yellow transition-colors">Termos de Uso</a>
          </p>
          <p>© 2025 CSM Clínica Veterinária - Todos os direitos reservados</p>
        </div>

      </div>
    </section>
  );
}
