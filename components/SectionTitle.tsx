import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false, align = 'center' }) => {
  const textColor = light ? 'text-white' : 'text-brand-dark';
  const subColor = light ? 'text-brand-gold' : 'text-brand-gold';
  const alignment = align === 'left' ? 'text-left' : 'text-center';
  const margin = align === 'left' ? 'mr-auto' : 'mx-auto';

  return (
    <div className={`mb-16 ${alignment}`}>
      {subtitle && (
        <span className={`uppercase tracking-[0.25em] text-xs font-bold ${subColor} mb-4 block`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-serif ${textColor} leading-tight`}>
        {title}
      </h2>
      <div className={`w-16 h-[2px] mt-6 bg-brand-gold ${margin}`}></div>
    </div>
  );
};

export default SectionTitle;