import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Team' },
    { id: 'sprs', label: 'SPRS' },
    { id: 'ass', label: 'ASS' },
    { id: 'tocs', label: 'TOCS' },
    { id: 'eerts', label: 'EERTS' },
    { id: 'ibms', label: 'IBMS' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-dots">
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <div key={section.id} className="relative group">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 p-0 rounded-full border-2 transition-all hover:scale-125 ${
                activeSection === section.id
                  ? 'bg-primary border-primary shadow-lg'
                  : 'bg-transparent border-muted-foreground/40 hover:border-primary'
              }`}
            />
            
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-background border shadow-lg rounded px-2 py-1 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {section.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationDots;