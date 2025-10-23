'use client';

import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ButtonCSM } from '@/components/ui/button-csm';
import { BadgeCSM } from '@/components/ui/badge-csm';
import { urls, whatsappMessages, address, contact } from '@/lib/env';

export default function CTASectionTest() {
  return (
    <section id="cta" className="fullpage-section relative bg-gradient-csm-blue flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Informações */}
          <div className="text-white space-y-8">
            <div>
              <BadgeCSM variant="yellow" className="mb-4 text-base">
                Entre em Contato
              </BadgeCSM>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Seu Pet Merece o<br />
                <span className="text-csm-yellow">Melhor Cuidado</span>
              </h2>
              <p className="text-xl text-white/90">
                Atendimento 24 horas, 7 dias por semana.<br />
                Estamos prontos para cuidar do seu pet.
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Telefone 24h</p>
                  <p className="text-white/90">{contact.phone.primary}</p>
                  <p className="text-white/90">{contact.phone.secondary}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Endereço</p>
                  <p className="text-white/90">
                    {address.street}<br />
                    {address.neighborhood}, {address.city} - {address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold">E-mail</p>
                  <p className="text-white/90">contato@csmvet.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Horário</p>
                  <p className="text-white/90">24 horas por dia, 7 dias por semana</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonCSM 
                variant="urgency"
                size="lg" 
                className="flex-1"
                onClick={() => window.open(urls.whatsappWithMessage(whatsappMessages.emergency), '_blank')}
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Agora
              </ButtonCSM>
              <ButtonCSM 
                variant="primary"
                size="lg" 
                className="flex-1 bg-white text-csm-blue hover:bg-gray-100"
                onClick={() => window.open(urls.phoneCall, '_self')}
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </ButtonCSM>
            </div>
          </div>

          {/* Right Content - Mapa */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0234567890123!2d-49.2345678!3d-25.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzI0LjQiUyA0OcKwMTQnMDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização CSM Veterinária"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
