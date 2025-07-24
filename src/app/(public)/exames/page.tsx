import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exames Veterinários | Laboratoriais e Imagem | CSM Curitiba',
  description: 'Exames veterinários completos: hemograma, ultrassom, raio-X, check-up preventivo. Diagnóstico preciso para seu pet em Curitiba.',
};

export default function ExamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            🔬 <span className="text-purple-600">Exames</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Diagnóstico preciso para a saúde do seu pet
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-purple-100 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-purple-900 mb-4">🧪 Laboratoriais</h2>
              <p className="text-purple-700">Hemograma, Bioquímica, Sorologia</p>
            </div>
            <div className="bg-indigo-100 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-indigo-900 mb-4">📱 Imagem</h2>
              <p className="text-indigo-700">Ultrassom, Raio-X, Ecocardiograma</p>
            </div>
            <div className="bg-blue-100 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-blue-900 mb-4">💝 Check-up</h2>
              <p className="text-blue-700">Pacotes preventivos por idade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}