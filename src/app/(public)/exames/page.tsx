import { Metadata } from 'next';
import ExamesPageContent from '@/components/pages/ExamesPageContent';

export const metadata: Metadata = {
  title: 'Exames Veterinários | Laboratoriais e Imagem | CSM Curitiba',
  description: 'Exames veterinários completos: hemograma, ultrassom, raio-X, ecocardiograma, check-up preventivo. Parceria com Bionostic. Diagnóstico preciso para seu pet em Curitiba.',
};

export default function ExamesPage() {
  return <ExamesPageContent />;
}