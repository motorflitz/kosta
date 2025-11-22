import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-200/30 -skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Asymmetrical Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 ml-12">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" 
                alt="Innenraum Qualitätseck" 
                className="w-full max-w-md h-[500px] object-cover shadow-2xl grayscale-[20%]"
              />
            </div>
            <div className="absolute -bottom-12 -left-4 z-20 w-64 h-80 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" 
                alt="Außenterrasse" 
                className="w-full h-full object-cover shadow-2xl border-8 border-brand-cream"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute top-10 -right-8 bg-brand-dark text-white p-6 shadow-xl z-30 hidden lg:block">
              <span className="block text-4xl font-serif font-bold text-brand-gold mb-1">60+</span>
              <span className="block text-[10px] uppercase tracking-widest">Jahre<br/>Tradition</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-0">
            <SectionTitle title="Ehrliche Küche mit Anspruch" subtitle="Unsere Geschichte" align="left" />
            
            <div className="space-y-6 text-lg text-brand-gray/80 font-light leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-brand-gold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
                Das <strong>Qualitätseck</strong> ist mehr als nur ein Restaurant – es ist ein Stück Frankfurter Geschichte. Seit den 1960er-Jahren empfangen wir unsere Gäste in unserem traditionellen Eckhaus in der Hedderichstraße unweit des Südbahnhofs.
              </p>
              <p>
                Unser Inhaber <strong>Kosta Christakis</strong> führt das Lokal mit Leib und Seele. Seine Philosophie ist simpel aber anspruchsvoll: „Qualität“ steht an erster Stelle. Wir verbinden die Bodenständigkeit einer Frankfurter Eckkneipe mit der herzlichen Gastfreundschaft Griechenlands.
              </p>
              <p>
                Bei uns fühlen Sie sich wie zu Hause. Ob im gemütlichen, holzvertäfelten Gastraum oder im Sommer auf unserer Außenterrasse – wir laden Sie ein, Teil unserer Familie zu werden. Und vielleicht gibt es zum Abschluss ja noch einen Ouzo aufs Haus.
              </p>
              
              <div className="pt-8 mt-8 border-t border-brand-gold/20">
                <p className="font-serif italic text-2xl text-brand-dark">„Der Name ist Programm – und das spüren die Besucher in jedem Detail.“</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;