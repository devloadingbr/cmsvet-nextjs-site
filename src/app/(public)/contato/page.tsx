import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | CSM Clínica Veterinária Curitiba',
  description: 'Entre em contato com a CSM Clínica Veterinária. Endereço, telefones, WhatsApp, horários e localização em Curitiba.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            📞 <span className="text-blue-600">Contato</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Entre em contato conosco
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">📍 Localização</h2>
              <div className="space-y-4 text-left">
                <p><strong>Endereço:</strong> Rua das Flores, 123 - Curitiba</p>
                <p><strong>Telefone:</strong> (41) 3333-3333</p>
                <p><strong>Emergência:</strong> (41) 9999-9999</p>
                <p><strong>WhatsApp:</strong> (41) 8888-8888</p>
                <p><strong>Email:</strong> contato@csmvet.com.br</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">⏰ Horários</h2>
              <div className="space-y-4 text-left">
                <p><strong>Segunda a Sexta:</strong> 7h às 20h</p>
                <p><strong>Sábado:</strong> 8h às 18h</p>
                <p><strong>Domingo:</strong> 8h às 12h</p>
                <p className="text-red-600 font-semibold"><strong>Emergência:</strong> 24h todos os dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}