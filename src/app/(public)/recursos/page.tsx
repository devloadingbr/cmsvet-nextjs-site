import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recursos e Guias | Dicas para Pets | CSM Veterinária',
  description: 'Recursos úteis para tutores: plantas tóxicas, primeiros socorros, calculadoras, guias e dicas veterinárias especializadas.',
};

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            💡 <span className="text-green-600">Recursos</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Guias, dicas e informações úteis para cuidar melhor do seu pet
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-green-100 p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-green-900 mb-3">🌿 Plantas Tóxicas</h2>
              <p className="text-green-700 text-sm">Lista completa de plantas perigosas</p>
            </div>
            <div className="bg-red-100 p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-red-900 mb-3">🚨 Primeiros Socorros</h2>
              <p className="text-red-700 text-sm">Guia de emergência para tutores</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-blue-900 mb-3">📖 Blog</h2>
              <p className="text-blue-700 text-sm">Artigos e dicas especializadas</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-purple-900 mb-3">🧮 Calculadoras</h2>
              <p className="text-purple-700 text-sm">Ferramentas úteis para seu pet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}