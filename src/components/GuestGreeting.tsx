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
      <div className={`text-center space-y-2.5 ${className}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-burgundy animate-ping" />
          <span className="font-devanagari">विशेष वैयक्तिक आमंत्रण</span>
        </div>

        {/* Guest name */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-royalHindi font-bold text-burgundy tracking-wide leading-snug">
          {title}{' '}
          <span className="text-burgundy font-extrabold px-1 drop-shadow-sm">
            {displayName}
          </span>{' '}
          {honorific} {familyNote && <span className="text-maroon text-lg sm:text-xl font-normal block sm:inline">({familyNote})</span>}
        </h2>
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
