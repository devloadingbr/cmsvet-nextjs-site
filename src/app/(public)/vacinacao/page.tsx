import { Metadata } from 'next';
import VacinacaoPageContent from '@/components/pages/VacinacaoPageContent';

export const metadata: Metadata = {
  title: 'Vacinação Veterinária | Cães e Gatos | CSM Curitiba',
  description: 'Vacinação completa para cães e gatos: V10, V4, V5, antirrábica, giardia, gripe canina. Vacinas MSD, Boehringer Ingelheim e Zoetis. Protocolo seguro em Curitiba.',
};

export default function VacinacaoPage() {
  return <VacinacaoPageContent />;
}