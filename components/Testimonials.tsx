import React from 'react';
import SectionTitle from './SectionTitle';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
         <div className="absolute -top-10 -left-10 text-[250px] md:text-[400px] lg:text-[500px] font-serif leading-none text-brand-dark">“</div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="Was unsere Gäste sagen" subtitle="Rezensionen" />

        {/* Staggered Grid Layout - Responsive: 1 col mobile/tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className={`
                bg-white p-8 md:p-10 shadow-xl shadow-stone-200/60 
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/10
                flex flex-col justify-between min-h-[auto] lg:min-h-[340px] border border-stone-100
                ${idx === 1 ? 'lg:mt-16' : 'lg:mt-0'} 
              `}
            >
              <div>
                {/* Stars */}
                <div className="flex text-brand-gold mb-6 md:mb-8 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-serif text-brand-dark leading-snug mb-8 italic relative">
                  <span className="text-brand-gold absolute -left-4 -top-2 text-xl opacity-50">"</span>
                  {review.text}
                  <span className="text-brand-gold absolute -right-2 bottom-0 text-xl opacity-50">"</span>
                </blockquote>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-stone-100/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-brand-gold font-serif font-bold text-lg md:text-xl shadow-inner flex-shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-bold text-xs uppercase tracking-widest text-brand-dark block">
                    {review.author}
                  </cite>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider mt-1 block">
                    Via {review.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges / Summary */}
        <div className="mt-20 md:mt-32 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-center md:text-left">
            
            {/* Google Badge */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 group cursor-default opacity-80 hover:opacity-100 transition-opacity duration-300">
                <span className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">4.6</span>
                <div className="flex flex-col justify-center items-center md:items-start">
                    <div className="flex text-brand-gold text-xs gap-0.5 mb-2">
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor" className="text-brand-gold/30"/>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 group-hover:text-brand-dark transition-colors">
                      Google Reviews
                    </span>
                    <span className="text-[10px] text-stone-400 mt-0.5">300+ Bewertungen</span>
                </div>
            </div>

            {/* Divider - Responsive */}
            <div className="hidden md:block w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-stone-300 to-transparent"></div>
            <div className="md:hidden w-16 h-px bg-stone-200"></div>

             {/* TripAdvisor Badge */}
             <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 group cursor-default opacity-80 hover:opacity-100 transition-opacity duration-300">
                <span className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">4.4</span>
                <div className="flex flex-col justify-center items-center md:items-start">
                    <div className="flex text-brand-gold text-xs gap-0.5 mb-2">
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor"/>
                        <Star size={16} fill="currentColor" className="text-brand-gold/30"/>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 group-hover:text-brand-dark transition-colors">
                      TripAdvisor
                    </span>
                    <span className="text-[10px] text-stone-400 mt-0.5">Zertifikat für Exzellenz</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;