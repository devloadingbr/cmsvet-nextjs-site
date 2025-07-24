import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Consulta | CSM Clínica Veterinária Curitiba',
  description: 'Agende uma consulta veterinária online na CSM. Horários disponíveis, especialistas qualificados e atendimento de qualidade em Curitiba.',
};

export default function AgendamentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            📅 <span className="text-blue-600">Agendar Consulta</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Agende sua consulta online de forma rápida e fácil
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Sistema de Agendamento
            </h2>
            <p className="text-slate-600 mb-8">
              Em breve disponibilizaremos nosso sistema de agendamento online integrado com IA.
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900">📞 Agendamento por Telefone</h3>
                <p className="text-blue-700">(41) 3333-3333</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900">📱 WhatsApp</h3>
                <p className="text-green-700">(41) 8888-8888</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}