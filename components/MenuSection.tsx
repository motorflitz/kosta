import React from 'react';
import SectionTitle from './SectionTitle';
import { MENU_HIGHLIGHTS } from '../constants';

const MenuSection: React.FC = () => {
  const germanDishes = MENU_HIGHLIGHTS.filter(item => item.category === 'german');
  const greekDishes = MENU_HIGHLIGHTS.filter(item => item.category === 'greek');
  const others = MENU_HIGHLIGHTS.filter(item => item.category === 'starter' || item.category === 'dessert');

  // Helper component for a single menu line item
  const MenuItemLine = ({ item }: { item: any }) => (
    <div className="mb-6 md:mb-8 group w-full">
      <div className="flex items-baseline justify-between relative mb-1 md:mb-2">
        <h4 className="bg-white pr-3 md:pr-4 text-base md:text-lg font-serif font-bold text-brand-dark relative z-10 group-hover:text-brand-gold transition-colors max-w-[70%] sm:max-w-[80%] leading-snug">
          {item.name}
        </h4>
        <div className="absolute bottom-1.5 md:bottom-2 left-0 w-full border-b border-dotted border-stone-300 z-0"></div>
        {item.price && (
          <span className="bg-white pl-3 md:pl-4 font-sans text-xs md:text-sm font-bold text-brand-dark relative z-10 flex-shrink-0">
            {item.price}
          </span>
        )}
      </div>
      <p className="text-stone-500 text-xs md:text-sm font-light italic leading-relaxed max-w-md">
        {item.description}
      </p>
    </div>
  );

  return (
    <section id="menu" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <SectionTitle title="Kulinarische Highlights" subtitle="Speisekarte" />
        
        <p className="text-center max-w-2xl mx-auto text-stone-500 mb-12 md:mb-20 font-light text-base md:text-lg">
          Unser kulinarisches Konzept vereint das Beste aus zwei Welten: <br className="hidden md:block" />
          Deftige Frankfurter Hausmannskost trifft auf mediterrane Frische.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 lg:gap-y-16">
          
          {/* Left Column: German & Starters */}
          <div>
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-brand-gold text-3xl md:text-4xl opacity-30">01</span> Deutsche Klassiker
              </h3>
              {germanDishes.map((dish, idx) => (
                <MenuItemLine key={idx} item={dish} />
              ))}
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-brand-gold text-3xl md:text-4xl opacity-30">02</span> Für den kleinen Hunger
              </h3>
              {others.filter(i => i.category === 'starter').map((dish, idx) => (
                <MenuItemLine key={idx} item={dish} />
              ))}
            </div>
          </div>

          {/* Right Column: Greek & Desserts */}
          <div>
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-brand-gold text-3xl md:text-4xl opacity-30">03</span> Griechische Spezialitäten
              </h3>
              {greekDishes.map((dish, idx) => (
                <MenuItemLine key={idx} item={dish} />
              ))}
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-brand-gold text-3xl md:text-4xl opacity-30">04</span> Süßer Abschluss
              </h3>
              {others.filter(i => i.category === 'dessert').map((dish, idx) => (
                <MenuItemLine key={idx} item={dish} />
              ))}
            </div>
          </div>

        </div>

        <div className="text-center mt-12 md:mt-16">
          <a href="#contact" className="inline-block border-b border-brand-gold text-brand-gold font-serif italic text-lg md:text-xl hover:text-brand-dark transition-colors pb-1">
            Reservieren Sie Ihren Tisch für heute Abend &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;