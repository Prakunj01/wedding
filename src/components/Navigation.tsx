import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

interface NavigationProps {
  petalsActive: boolean;
  onTogglePetals: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  petalsActive,
  onTogglePetals,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'शुभ आमंत्रण', href: '#door-hero-section' },
    { label: 'मांगलिक कार्यक्रम', href: '#events-section' },
    { label: 'विवाह स्थल', href: '#venue-section' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-gold/40 shadow-sm py-2.5'
          : 'bg-ivory/90 backdrop-blur-sm border-b border-gold/25 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Couple Monogram */}
        <a
          href="#door-hero-section"
          className="flex items-center gap-2.5 font-royalHindi text-burgundy font-bold text-lg sm:text-xl tracking-wide group"
        >
          <span className="w-8 h-8 rounded-full bg-burgundy text-gold-light border border-gold flex items-center justify-center text-xs font-cinzel shadow-sm group-hover:scale-105 transition-transform shrink-0">
            अ•रो
          </span>
          <span className="tracking-wide">अर्पिता संग रोहित</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1.5 font-devanagari text-xs sm:text-sm">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-1.5 rounded-full text-textDark/85 hover:text-burgundy hover:bg-gold/20 font-medium transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action: Petals Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          {/* Petals Toggle */}
          <button
            onClick={onTogglePetals}
            className={`px-3 py-1.5 rounded-full border transition-all text-xs flex items-center gap-1.5 font-devanagari ${
              petalsActive
                ? 'bg-burgundy text-gold-light border-gold shadow-xs'
                : 'bg-white/80 text-textDark/75 border-gold/40 hover:bg-gold/15'
            }`}
            title={petalsActive ? 'गुलाब पंखुड़ियाँ बंद करें' : 'गुलाब पंखुड़ियाँ चालू करें'}
          >
            <Flower2
              className={`w-3.5 h-3.5 ${petalsActive ? 'text-gold-light animate-spin' : ''}`}
              style={{ animationDuration: '8s' }}
            />
            <span className="hidden sm:inline">
              {petalsActive ? 'पंखुड़ियाँ' : 'पंखुड़ियाँ'}
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/80 text-burgundy border border-gold/40 hover:bg-gold/15 transition-colors"
            aria-label="मेनू खोलें"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory/98 backdrop-blur-md border-b-2 border-gold/50 shadow-xl px-4 py-5 font-devanagari animate-in fade-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2.5 text-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="py-2.5 px-3 rounded-xl bg-white/80 border border-gold/30 text-burgundy text-xs font-semibold hover:bg-gold/20 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
