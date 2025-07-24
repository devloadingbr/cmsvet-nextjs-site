'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CSM Clínica Veterinária</h3>
            <p className="text-slate-300">
              Cuidando dos seus pets com amor, dedicação e tecnologia de ponta há mais de 7 anos.
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
              <li>📍 Rua das Flores, 123 - Curitiba</li>
              <li>📞 (41) 3333-3333</li>
              <li>🚨 (41) 9999-9999 (Emergência)</li>
              <li>✉️ contato@csmvet.com.br</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horários</h4>
            <ul className="space-y-2 text-slate-300">
              <li>🌅 Segunda a Sexta: 7h às 20h</li>
              <li>🌅 Sábado: 8h às 18h</li>
              <li>🌅 Domingo: 8h às 12h</li>
              <li>🚨 Emergência: 24h todos os dias</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>© 2024 CSM Clínica Veterinária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}