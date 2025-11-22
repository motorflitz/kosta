import React from 'react';
import { CONTACT_INFO, OPENING_HOURS } from '../constants';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const InfoSection: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-dark text-white py-24 relative overflow-hidden">
       {/* Texture Overlay */}
       <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')"}}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Info & Hours */}
          <div className="w-full lg:w-1/2">
            <SectionTitle title="Wir freuen uns auf Sie" subtitle="Kontakt" light align="left" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <MapPin size={14} /> Adresse
                </h4>
                <p className="text-lg font-serif leading-relaxed text-white/90">
                  {CONTACT_INFO.name}<br />
                  {CONTACT_INFO.address.split(',')[0]}<br />
                  {CONTACT_INFO.address.split(',')[1]}
                </p>
                <p className="text-stone-500 text-sm mt-2 font-light">
                  Im Herzen von {CONTACT_INFO.district}
                </p>
                <a 
                  href={CONTACT_INFO.mapsLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-brand-gold text-sm mt-4 hover:text-white transition-colors group"
                >
                  Route planen <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div>
                <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Phone size={14} /> Reservierung
                </h4>
                <p className="text-stone-400 text-sm mb-2 font-light">Tischreservierung empfohlen</p>
                <a 
                  href={CONTACT_INFO.phoneLink} 
                  className="text-2xl font-serif text-white hover:text-brand-gold transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-8 border border-white/10">
              <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <Clock size={14} /> Öffnungszeiten
              </h4>
              <ul className="space-y-3 text-sm font-light text-stone-300">
                {OPENING_HOURS.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                    <span className="font-medium text-white">{item.day}</span>
                    <span className="font-sans">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Map / Image Visual */}
          <div className="w-full lg:w-1/2 h-full min-h-[400px] relative group">
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-brand-gold/30 z-20"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-brand-gold/30 z-20"></div>
            
            <div className="w-full h-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
               <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                alt="Frankfurt Sachsenhausen" 
                className="w-full h-full object-cover min-h-[500px]"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;