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
  const title = guest.title || 'श्रीमान/ श्रीमती';
  const honorific = guest.honorific || 'जी';
  const familyNote = guest.familyNote || 'सपरिवार';

  if (variant === 'hero') {
    return (
      <div className={`text-center space-y-3 ${className}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-pale text-xs sm:text-sm font-medium tracking-wider backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span className="font-devanagari">विशेष वैयक्तिक आमंत्रण</span>
        </div>

        {/* Guest name */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-royalHindi font-bold text-gold tracking-wide leading-snug">
          {title}{' '}
          <span className="text-gold font-extrabold px-1 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
            {displayName}
          </span>{' '}
          {honorific} {familyNote && <span className="text-gold-pale/80 text-lg sm:text-xl font-normal block sm:inline">({familyNote})</span>}
        </h2>

        {/* Welcome text */}
        <div className="space-y-1.5 text-sm sm:text-base text-gold-pale font-devanagari max-w-xl mx-auto leading-relaxed">
          <p className="font-medium text-gold-pale">
            अर्पिता के शुभ विवाह समारोह में आपका हार्दिक स्वागत एवं अभिनंदन है।
          </p>
          <p className="text-xs sm:text-sm text-gold-pale/70">
            आपकी स्नेहिल उपस्थिति हमारे परिवार के लिए अत्यंत हर्ष का विषय होगी।
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'formal') {
    return (
      <span className={`inline-block font-bold text-gold ${className}`}>
        {title} {displayName} {honorific} {familyNote ? `(${familyNote})` : ''}
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <span className={`font-semibold text-gold-light ${className}`}>
        {displayName} {honorific}
      </span>
    );
  }

  // inline
  return (
    <span className={`font-semibold text-gold ${className}`}>
      {title} {displayName} {honorific} {familyNote && `(${familyNote})`}
    </span>
  );
};
