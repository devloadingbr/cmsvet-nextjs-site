import { Metadata } from 'next';
import AtendimentoDomiciliarPageContent from '@/components/pages/AtendimentoDomiciliarPageContent';

export const metadata: Metadata = {
  title: 'Atendimento Veterinário Domiciliar | Curitiba e Região | CSM',
  description: 'Atendimento veterinário em domicílio em Curitiba, São José dos Pinhais e Pinhais. Consultas, vacinas, coleta de exames, medicação e acompanhamento pós-operatório na sua casa.',
};

export default function AtendimentoDomiciliarPage() {
  return <AtendimentoDomiciliarPageContent />;
}
