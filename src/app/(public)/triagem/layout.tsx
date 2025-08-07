import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Triagem Inteligente | CSM Clínica Veterinária',
  description: 'Sistema de triagem veterinária com inteligência artificial. Avalie os sintomas do seu pet e receba orientações personalizadas da CSM Clínica Veterinária.',
  keywords: [
    'triagem veterinária',
    'sintomas pet',
    'avaliação veterinária online',
    'clínica veterinária curitiba',
    'emergência veterinária',
    'diagnóstico pet',
    'veterinário online'
  ],
};

export default function TriagemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}