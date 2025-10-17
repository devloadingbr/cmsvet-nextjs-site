/**
 * BUTTON CSM - Componente de Botão Profissional
 * 
 * Botões seguindo o design system CSM com paleta restrita
 * Baseado em: docs/REDESIGN_MASTER_PLAN.md
 * 
 * Variantes:
 * - primary: Azul CSM (ações principais)
 * - secondary: Outline Azul (ações secundárias)
 * - urgency: Laranja (apenas urgência/conversão)
 * 
 * Tamanhos:
 * - sm: Pequeno (px-4 py-2)
 * - md: Médio (px-6 py-3) - padrão
 * - lg: Grande (px-8 py-4)
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonCsmVariants = cva(
  // Base styles - aplicados a todos os botões
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-csm-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primário: Azul CSM - Ações principais
        primary:
          'bg-csm-blue text-white hover:bg-csm-blue-hover shadow-sm hover:shadow-md',
        
        // Secundário: Outline Azul - Ações secundárias
        secondary:
          'border-2 border-csm-blue text-csm-blue bg-transparent hover:bg-csm-blue-light',
        
        // Urgência: Laranja - Apenas urgência/conversão
        urgency:
          'bg-csm-orange text-white hover:bg-csm-orange-hover shadow-sm hover:shadow-md',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonCsmProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCsmVariants> {
  asChild?: boolean;
}

const ButtonCSM = React.forwardRef<HTMLButtonElement, ButtonCsmProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonCsmVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonCSM.displayName = 'ButtonCSM';

export { ButtonCSM, buttonCsmVariants };
