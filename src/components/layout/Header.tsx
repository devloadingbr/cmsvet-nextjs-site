'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, AlertTriangle, Home, Shield, Microscope, BookOpen, MessageCircle, Phone, MapPin, Heart, Stethoscope, Briefcase } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { ButtonCSM } from '@/components/ui/button-csm';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { contact, address, clinic } from '@/lib/env';

interface NavItem {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isEmergency?: boolean;
}

const mainNavItems: NavItem[] = [
  {
    title: 'Início',
    href: '/',
    description: 'Página inicial da CSM Clínica Veterinária',
    icon: Home
  },
  {
    title: 'Emergência',
    href: '/emergencia',
    description: 'Atendimento 24h para emergências veterinárias',
    isEmergency: true,
    icon: AlertTriangle
  },
];

const serviceItems: NavItem[] = [
  {
    title: 'Vacinação',
    href: '/vacinacao',
    description: 'Cronograma completo de vacinas para seu pet',
    icon: Shield
  },
  {
    title: 'Exames',
    href: '/exames',
    description: 'Exames laboratoriais e de imagem',
    icon: Microscope
  },
  {
    title: 'Domiciliar',
    href: '/atendimento-domiciliar',
    description: 'Atendimento veterinário na sua casa',
    icon: Stethoscope
  },
];

const secondaryNavItems: NavItem[] = [
  {
    title: 'Convênios',
    href: '/convenios',
    description: 'Planos de saúde pet aceitos na CSM',
    icon: Heart
  },
  {
    title: 'Contato',
    href: '/contato',
    description: 'Entre em contato conosco',
    icon: MessageCircle
  },
  {
    title: 'Recursos',
    href: '/recursos',
    description: 'Guias, dicas e informações úteis',
    icon: BookOpen
  }
];

const allNavItems = [...mainNavItems, ...serviceItems, ...secondaryNavItems];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-[#E67E22] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs sm:text-sm">PLANTÃO 24H</span>
          </div>
          <div className="hidden lg:flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{address.full}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">EMERGÊNCIAS: </span>
            <span className="text-xs sm:text-sm">{contact.phone.primary}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-csm-blue-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/CMS-clinica-veterinaria-logo-lg-1.webp"
                    alt={clinic.name}
                    width={234}
                    height={78}
                    className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1 xl:gap-2">
                  {/* Main nav items (Início, Emergência) */}
                  {mainNavItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "px-3 xl:px-4 py-2 text-csm-gray-dark hover:text-csm-blue transition-colors duration-300 rounded-lg font-medium flex flex-row items-center gap-1.5 xl:gap-2 text-sm focus:outline-none",
                              item.isEmergency && !isActive && "text-[#E67E22] hover:text-[#D35400] font-semibold bg-orange-50 hover:bg-orange-100",
                              isActive && !item.isEmergency && "text-white bg-csm-blue hover:bg-csm-blue-hover hover:text-white focus:bg-csm-blue focus:text-white",
                              isActive && item.isEmergency && "!bg-[#E67E22] !text-white hover:!bg-[#D35400] hover:!text-white focus:!bg-[#E67E22] focus:!text-white data-[active=true]:hover:!bg-[#D35400] data-[active=true]:!bg-[#E67E22]"
                            )}
                          >
                            <IconComponent className={cn("w-4 h-4", isActive && "text-white")} />
                            <span className="whitespace-nowrap">{item.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}

                  {/* Serviços dropdown - client-only to avoid hydration mismatch */}
                  {mounted && <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "px-3 xl:px-4 py-2 text-csm-gray-dark hover:text-csm-blue transition-colors duration-300 rounded-lg font-medium flex flex-row items-center gap-1.5 xl:gap-2 text-sm bg-transparent hover:bg-accent focus:outline-none",
                        serviceItems.some(s => pathname === s.href) && "text-white bg-csm-blue hover:bg-csm-blue-hover hover:text-white focus:bg-csm-blue focus:text-white data-[state=open]:bg-csm-blue data-[state=open]:text-white"
                      )}
                    >
                      <Briefcase className={cn("w-4 h-4", serviceItems.some(s => pathname === s.href) && "text-white")} />
                      <span className="whitespace-nowrap">Serviços</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[280px]">
                      <ul className="grid gap-1 p-2">
                        {serviceItems.map((item) => {
                          const IconComponent = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-csm-blue-light focus:outline-none",
                                    isActive && "bg-csm-blue text-white hover:bg-csm-blue-hover"
                                  )}
                                >
                                  <IconComponent className={cn("w-5 h-5 mt-0.5 text-csm-blue shrink-0", isActive && "text-white")} />
                                  <div>
                                    <div className={cn("font-medium text-sm", isActive ? "text-white" : "text-csm-gray-dark")}>{item.title}</div>
                                    <p className={cn("text-xs mt-0.5 leading-snug", isActive ? "text-white/80" : "text-csm-gray")}>{item.description}</p>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>}

                  {/* Secondary nav items (Convênios, Contato, Recursos) */}
                  {secondaryNavItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "px-3 xl:px-4 py-2 text-csm-gray-dark hover:text-csm-blue transition-colors duration-300 rounded-lg font-medium flex flex-row items-center gap-1.5 xl:gap-2 text-sm focus:outline-none",
                              isActive && "text-white bg-csm-blue hover:bg-csm-blue-hover hover:text-white focus:bg-csm-blue focus:text-white"
                            )}
                          >
                            <IconComponent className={cn("w-4 h-4", isActive && "text-white")} />
                            <span className="whitespace-nowrap">{item.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <ButtonCSM variant="secondary" size="sm">
                    <Menu className="w-5 h-5" />
                  </ButtonCSM>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="text-left">
                      <Image
                        src="/CMS-clinica-veterinaria-logo-lg-1.webp"
                        alt={clinic.name}
                        width={150}
                        height={50}
                        className="h-10 w-auto"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-8 flex-1 overflow-y-auto space-y-1">
                    {/* All items flat in mobile */}
                    {allNavItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-3 rounded-lg text-csm-gray-dark hover:text-csm-blue hover:bg-csm-blue-light transition-colors duration-300 focus:outline-none",
                            item.isEmergency && "text-[#E67E22] hover:text-[#D35400] bg-orange-50",
                            isActive && !item.isEmergency && "text-white bg-csm-blue hover:bg-csm-blue-hover hover:text-white focus:bg-csm-blue focus:text-white",
                            isActive && item.isEmergency && "bg-[#E67E22] text-white hover:bg-[#D35400] hover:text-white focus:bg-[#E67E22] focus:text-white"
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <IconComponent className={cn("w-5 h-5", isActive && "text-white")} />
                            <div className="font-medium">{item.title}</div>
                          </div>
                          <div className={cn("text-sm mt-1 ml-8", isActive ? "text-white/80" : "text-csm-gray")}>{item.description}</div>
                        </Link>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}