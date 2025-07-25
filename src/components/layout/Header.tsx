'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, AlertTriangle, Home, Shield, Microscope, BookOpen, MessageCircle, Phone, MapPin } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { contact, address, clinic } from '@/lib/env';

const navigationItems = [
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
    title: 'Recursos',
    href: '/recursos',
    description: 'Guias, dicas e informações úteis',
    icon: BookOpen
  },
  {
    title: 'Contato',
    href: '/contato',
    description: 'Entre em contato conosco',
    icon: MessageCircle
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium">
          <div className="flex items-center">
            <span>🚨 PLANTÃO 24H ATIVO</span>
          </div>
          <div className="hidden lg:flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{address.full}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>EMERGÊNCIAS: {contact.phone.primary}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>WhatsApp: {contact.phone.secondary}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
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
            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-300 rounded-lg font-medium flex flex-row items-center gap-2 focus:outline-none",
                              item.isEmergency && "text-red-600 hover:text-red-700 font-semibold bg-red-50 hover:bg-red-100",
                              isActive && !item.isEmergency && "text-white bg-blue-600 hover:bg-blue-700 hover:text-white focus:bg-blue-600 focus:text-white",
                              isActive && item.isEmergency && "bg-red-600 text-white hover:bg-red-700 hover:text-white focus:bg-red-600 focus:text-white"
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


            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu className="w-5 h-5" />
                  </Button>
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
                  
                  <div className="mt-8 space-y-4">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-300 focus:outline-none",
                            item.isEmergency && "text-red-600 hover:text-red-700 bg-red-50",
                            isActive && !item.isEmergency && "text-white bg-blue-600 hover:bg-blue-700 hover:text-white focus:bg-blue-600 focus:text-white",
                            isActive && item.isEmergency && "bg-red-600 text-white hover:bg-red-700 hover:text-white focus:bg-red-600 focus:text-white"
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <IconComponent className={cn("w-5 h-5", isActive && "text-white")} />
                            <div className="font-medium">{item.title}</div>
                          </div>
                          <div className="text-sm text-slate-600 mt-2 ml-8">{item.description}</div>
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