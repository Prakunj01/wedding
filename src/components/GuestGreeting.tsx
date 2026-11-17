import React from 'react';
import { GuestInfo } from '../types';

interface GuestGreetingProps {
  guest: GuestInfo;
  variant?: 'hero' | 'inline' | 'compact' | 'formal';
  className?: string;
}

export const GuestGreeting: React.FC<GuestGreetingProps> = ({
  guest,
  variant = 'hero',
  className = '',
}) => {
  const isDefault = guest.slug === 'default' || !guest.hindiName;
  const displayName = isDefault ? 'अतिथि' : guest.hindiName;
  const title = guest.title || 'प्रिय';
  const honorific = guest.honorific || 'जी';
  const familyNote = guest.familyNote || 'सपरिवार';

  if (variant === 'hero') {
    return (
      <div className={`text-center space-y-2.5 ${className}`}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span>विशेष वैयक्तिक आमंत्रण</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-royalHindi font-bold text-burgundy tracking-wide leading-snug">
          {title}{' '}
          <span className="text-gold-dark font-extrabold px-1">
            {displayName}
          </span>{' '}
          {honorific} {familyNote && <span className="text-maroon/90 text-lg sm:text-xl font-normal block sm:inline">({familyNote})</span>}
        </h2>

        <div className="space-y-1 text-sm sm:text-base text-textDark/90 font-devanagari max-w-xl mx-auto leading-relaxed">
          <p className="font-medium text-burgundy">
            अर्पिता के शुभ विवाह समारोह में आपका हार्दिक स्वागत एवं अभिनंदन है।
          </p>
          <p className="text-xs sm:text-sm text-textDark/80">
            आपकी स्नेहिल उपस्थिति हमारे परिवार के लिए अत्यंत हर्ष का विषय होगी।
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'formal') {
    return (
      <span className={`inline-block font-bold text-burgundy ${className}`}>
        {title} {displayName} {honorific} {familyNote ? `(${familyNote})` : ''}
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <span className={`font-semibold text-gold-dark ${className}`}>
        {displayName} {honorific}
      </span>
    );
  }

  // inline
  return (
    <span className={`font-semibold text-burgundy ${className}`}>
      {title} {displayName} {honorific} {familyNote && `(${familyNote})`}
    </span>
  );
};
