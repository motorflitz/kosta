import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über uns', href: '#about' },
    { name: 'Speisekarte', href: '#menu' },
    { name: 'Gästebuch', href: '#reviews' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-3' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="group relative z-50">
            <div className={`font-serif font-bold text-2xl md:text-3xl tracking-tighter transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
              Qualitäts<span className="text-brand-gold">eck</span>
            </div>
            <div className={`text-[10px] uppercase tracking-[0.3em] font-sans mt-1 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-gray-400' : 'text-gray-300'}`}>
              Frankfurt
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-brand-gold transition-colors duration-300 relative group ${
                  isScrolled ? 'text-white/80' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={CONTACT_INFO.phoneLink}
              className="border border-brand-gold text-brand-gold px-6 py-2 rounded-sm font-sans text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300"
            >
              Reservieren
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-50 relative hover:text-brand-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-dark z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-3xl font-serif text-white hover:text-brand-gold italic transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-white/20 mx-auto my-4"></div>
          <a 
            href={CONTACT_INFO.phoneLink}
            className="text-brand-gold font-sans text-sm uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            +49 69 61 66 44
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;