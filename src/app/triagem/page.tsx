/**
 * Página da triagem veterinária
 */

import { Metadata } from 'next';
import { TriagemWizard } from '@/components/triagem/TriagemWizard';

export const metadata: Metadata = {
  title: 'Triagem Veterinária com IA | CSM Clínica Veterinária',
  description: 'Sistema inteligente de triagem veterinária. Analise os sintomas do seu pet com nossa IA especializada e receba orientações personalizadas sobre cuidados e urgência.',
  keywords: 'triagem veterinária, IA veterinária, sintomas pet, diagnóstico online, emergência veterinária, CSM clínica',
};

export default function TriagemPage() {
  return (
    <main>
      <TriagemWizard />
    </main>
  );
}