import { Metadata } from 'next';
import ConveniosPageContent from '@/components/pages/ConveniosPageContent';

export const metadata: Metadata = {
  title: 'Convênios e Planos de Saúde Pet | CSM Clínica Veterinária',
  description: 'A CSM aceita os principais planos de saúde pet: Petlove, Petbee, Pet Veter e Dog Life. Atendimento 24h, exames, cirurgias e internação cobertos pelo seu convênio.',
};

export default function ConveniosPage() {
  return <ConveniosPageContent />;
}
