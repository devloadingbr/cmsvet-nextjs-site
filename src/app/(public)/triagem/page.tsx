'use client';

import { TriagemWizard } from '@/components/triagem/TriagemWizard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TriagemPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="flex items-center space-x-2 hover:bg-slate-50 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Button>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              🩺 <span className="text-violet-600">Triagem Inteligente</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sistema carinhoso que ajuda a entender como seu pet está se sentindo<br />
              <span className="text-lg">Responda algumas perguntas e receba orientações personalizadas</span>
            </p>
          </div>

          {/* Emergency Alert */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl p-6 text-center mb-12">
            <h2 className="text-xl font-bold mb-2">⚠️ Situação Crítica?</h2>
            <p className="text-red-100 mb-4">
              Se seu pet apresenta sintomas graves, procure atendimento imediato
            </p>
            <Button 
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer"
              onClick={() => router.push('/emergencia')}
            >
              🚨 EMERGÊNCIA 24H
            </Button>
          </div>
        </div>
      </section>

      {/* Triagem Wizard */}
      <section className="pb-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TriagemWizard 
            onComplete={() => {
              // Opcional: redirecionar após completar
              console.log('Triagem completada');
            }}
          />
        </div>
      </section>
    </div>
  );
}