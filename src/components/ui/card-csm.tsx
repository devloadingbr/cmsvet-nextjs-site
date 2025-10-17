/**
 * CARD CSM - Componente de Card Profissional
 * 
 * Cards seguindo o design system CSM com paleta restrita
 * Baseado em: docs/REDESIGN_MASTER_PLAN.md
 * 
 * Variantes:
 * - default: Card padrão (borda sutil)
 * - highlight: Card de destaque (borda azul forte)
 * 
 * Características:
 * - Sem gradientes
 * - Sombras apenas cinza
 * - Hover sutil (translateY)
 * - Bordas retas (rounded-lg)
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardCsmVariants = cva(
  // Base styles - aplicados a todos os cards
  'rounded-lg bg-white transition-all duration-300',
  {
    variants: {
      variant: {
        // Padrão: Borda sutil azul claro
        default:
          'border border-csm-blue-light shadow-sm hover:shadow-md hover:-translate-y-1',
        
        // Destaque: Borda azul forte
        highlight:
          'border-2 border-csm-blue shadow-md hover:shadow-lg hover:-translate-y-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardCsmProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardCsmVariants> {}

const CardCSM = React.forwardRef<HTMLDivElement, CardCsmProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardCsmVariants({ variant, className }))}
      {...props}
    />
  )
);
CardCSM.displayName = 'CardCSM';

const CardCsmHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardCsmHeader.displayName = 'CardCsmHeader';

const CardCsmTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight text-csm-gray-dark',
      className
    )}
    {...props}
  />
));
CardCsmTitle.displayName = 'CardCsmTitle';

const CardCsmDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-csm-gray', className)}
    {...props}
  />
));
CardCsmDescription.displayName = 'CardCsmDescription';

const CardCsmContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardCsmContent.displayName = 'CardCsmContent';

const CardCsmFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardCsmFooter.displayName = 'CardCsmFooter';

export {
  CardCSM,
  CardCsmHeader,
  CardCsmTitle,
  CardCsmDescription,
  CardCsmContent,
  CardCsmFooter,
  cardCsmVariants,
};
