import { Metadata } from 'next';
import HomeTestPage from '@/components/pages/HomeTestPage';

export const metadata: Metadata = {
  title: 'CSM Veterinária | Atendimento 24h em Curitiba - Teste',
  description: 'Clínica veterinária 24 horas em Curitiba. Emergências, consultas, cirurgias, exames e internação. Equipe especializada pronta para cuidar do seu pet.',
  keywords: ['veterinária 24h curitiba', 'emergência veterinária', 'clínica veterinária uberaba', 'csm vet'],
};

export default function HomeTest() {
  return <HomeTestPage />;
}
