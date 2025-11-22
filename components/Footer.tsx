import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-stone-500 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-serif font-bold text-lg mb-1">Qualitätseck</h4>
            <p className="text-xs tracking-wide uppercase">Frankfurt am Main</p>
          </div>

          <div className="flex gap-8">
             <a href="#" className="hover:text-brand-gold transition-colors transform hover:scale-110" aria-label="Facebook">
               <Facebook size={20} strokeWidth={1.5} />
             </a>
             <a href="#" className="hover:text-brand-gold transition-colors transform hover:scale-110" aria-label="Instagram">
               <Instagram size={20} strokeWidth={1.5} />
             </a>
          </div>

          <div className="text-center md:text-right text-[10px] uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Qualitätseck.</p>
            <p className="mt-1 text-stone-600">
              Designed with precision.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;