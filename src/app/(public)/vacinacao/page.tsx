import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vacinação para Pets | Cronograma Completo | CSM Veterinária',
  description: 'Cronograma completo de vacinação para cães e gatos. Calculadora inteligente, preços transparentes e agendamento online em Curitiba.',
};

export default function VacinacaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            💉 <span className="text-blue-600">Vacinação</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Proteção completa para seu pet com cronograma personalizado
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">🐕 Cronograma Cães</h2>
              <p className="text-blue-700">V10, Antirrábica, Gripe canina</p>
            </div>
            <div className="bg-green-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-green-900 mb-4">🐱 Cronograma Gatos</h2>
              <p className="text-green-700">V4, FeLV, Antirrábica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}