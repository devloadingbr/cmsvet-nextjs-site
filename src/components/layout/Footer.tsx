'use client';

import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import { clinic, contact, address, hours, stats } from '@/lib/env';

export default function Footer() {
  return (
    <footer className="bg-csm-gray-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{clinic.name}</h3>
            <p className="text-white/80">
              Cuidando dos seus pets com amor, dedicação e tecnologia de ponta há mais de {stats.yearsExperience} anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>Emergência 24h</li>
              <li>Consultas</li>
              <li>Vacinas</li>
              <li>Exames</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{contact.phone.primary}</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 text-[#E67E22]" />
                <span>{contact.phone.secondary} (Emergência)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{contact.email.general}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horários</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{hours.regular}</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 text-[#E67E22]" />
                <span>Emergência: {hours.emergency}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© 2024 {clinic.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}