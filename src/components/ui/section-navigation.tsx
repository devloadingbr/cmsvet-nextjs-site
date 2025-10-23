'use client';

interface SectionNavigationProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function SectionNavigation({ sections, activeSection, onNavigate }: SectionNavigationProps) {
  return (
    <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index
              ? 'bg-csm-blue scale-125'
              : 'bg-csm-gray-light hover:bg-csm-blue/50'
          }`}
          aria-label={`Ir para ${section}`}
        >
          {/* Tooltip */}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-csm-gray-dark text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section}
          </span>
        </button>
      ))}
    </nav>
  );
}
