/**
 * BADGE CSM - Componente de Badge Profissional
 * 
 * Badges seguindo o design system CSM com paleta restrita
 * Baseado em: docs/REDESIGN_MASTER_PLAN.md
 * 
 * Variantes:
 * - blue: Azul CSM (padrão, informativo)
 * - yellow: Amarelo CSM (destaque, popular)
 * - gray: Cinza (secundário, neutro)
 * 
 * Características:
 * - Sem cores proibidas (rosa, roxo, ciano)
 * - Border-radius 16px (não full)
 * - Uppercase
 * - Tamanhos consistentes
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeCsmVariants = cva(
  // Base styles - aplicados a todos os badges
  'inline-flex items-center rounded-2xl px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-csm-blue focus:ring-offset-2',
  {
    variants: {
      variant: {
        // Azul: Padrão, informativo
        blue: 'bg-csm-blue text-white',
        
        // Amarelo: Destaque, popular
        yellow: 'bg-csm-yellow text-csm-gray-dark',
        
        // Cinza: Secundário, neutro
        gray: 'bg-csm-gray text-white',
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  }
);

export interface BadgeCsmProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeCsmVariants> {}

function BadgeCSM({ className, variant, ...props }: BadgeCsmProps) {
  return (
    <div className={cn(badgeCsmVariants({ variant }), className)} {...props} />
  );
}

export { BadgeCSM, badgeCsmVariants };
