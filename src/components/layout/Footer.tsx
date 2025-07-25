'use client';

import { clinic, contact, address, hours, stats } from '@/lib/env';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{clinic.name}</h3>
            <p className="text-slate-300">
              Cuidando dos seus pets com amor, dedicação e tecnologia de ponta há mais de {stats.yearsExperience} anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Emergência 24h</li>
              <li>Consultas</li>
              <li>Vacinas</li>
              <li>Exames</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-slate-300">
              <li>📍 {address.full}</li>
              <li>📞 {contact.phone.primary}</li>
              <li>🚨 {contact.phone.secondary} (Emergência)</li>
              <li>✉️ {contact.email.general}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horários</h4>
            <ul className="space-y-2 text-slate-300">
              <li>🌅 {hours.regular}</li>
              <li>🚨 Emergência: {hours.emergency}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>© 2024 {clinic.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}