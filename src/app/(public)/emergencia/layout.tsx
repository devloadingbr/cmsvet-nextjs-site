import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergência Veterinária 24h | CSM Clínica Veterinária Curitiba',
  description: 'Atendimento veterinário de emergência 24 horas em Curitiba. Triagem inteligente, equipe especializada e cuidado imediato para seu pet.',
  keywords: 'emergência veterinária, 24 horas, atendimento urgente, clínica veterinária Curitiba, cuidados pets',
};

export default function EmergenciaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
