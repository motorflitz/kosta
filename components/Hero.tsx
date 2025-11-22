import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Parallax-like static fix */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop')",
          backgroundAttachment: 'fixed' 
        }}
      ></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark/90 z-0"></div>
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <div className="mb-6 overflow-hidden">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-xs md:text-sm font-medium animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            Frankfurt Sachsenhausen — Seit 1960
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]">
          <span className="block opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>Tradition trifft</span>
          <span className="block italic font-light text-brand-gold opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>Gastfreundschaft</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light opacity-0 animate-fade-in-up leading-relaxed" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          Deutsche Hausmannskost und griechische Spezialitäten in familiärer Atmosphäre. 
          Ein Stück Heimat mitten in Frankfurt.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
          <a 
            href="#menu" 
            className="group relative px-8 py-3 overflow-hidden rounded-sm bg-white text-brand-dark transition-all duration-300 hover:bg-gray-200 min-w-[160px]"
          >
            <span className="relative z-10 font-sans text-xs font-bold uppercase tracking-widest">Speisekarte</span>
          </a>
          <a 
            href="#contact" 
            className="group px-8 py-3 rounded-sm border border-white/30 text-white transition-all duration-300 hover:border-brand-gold hover:text-brand-gold min-w-[160px]"
          >
            <span className="font-sans text-xs font-bold uppercase tracking-widest">Reservieren</span>
          </a>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
        <span className="text-[10px] uppercase tracking-widest text-white/60 hidden md:block">Entdecken</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </div>
    </section>
  );
};

export default Hero;