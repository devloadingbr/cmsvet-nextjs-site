import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergência Veterinária 24h | CSM Clínica Veterinária Curitiba',
  description: 'Atendimento veterinário de emergência 24 horas em Curitiba. Triagem inteligente, equipe especializada e cuidado imediato para seu pet.',
};

export default function EmergenciaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            🚨 <span className="text-red-600">Emergência Veterinária</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Atendimento 24 horas para situações que não podem esperar
          </p>
          
          <div className="bg-red-600 text-white p-8 rounded-2xl inline-block">
            <h2 className="text-3xl font-bold mb-4">PLANTÃO ATIVO 24H</h2>
            <p className="text-xl text-red-100 mb-6">
              Ligue agora para atendimento imediato
            </p>
            <div className="text-2xl font-bold">
              📞 (41) 9999-9999
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}