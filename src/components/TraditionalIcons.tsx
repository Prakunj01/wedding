import React from 'react';

// श्री गणेश जी का दिव्य एवं अत्यंत नयनाभिराम मांगलिक स्वरूप (Divine Ornate Royal Lord Ganesha)
export const GaneshaIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-24 h-24 text-gold",
  size = 96
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <defs>
      <linearGradient id="ganeshaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ECC880" />
        <stop offset="50%" stopColor="#C6A15B" />
        <stop offset="100%" stopColor="#8A6726" />
      </linearGradient>
      <radialGradient id="ganeshaAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ECC880" stopOpacity="0.4" />
        <stop offset="70%" stopColor="#C6A15B" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
      </radialGradient>
      <filter id="ganeshaGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Divine Aura / Radiant Prabhavali Halo */}
    <circle cx="60" cy="58" r="54" fill="url(#ganeshaAura)" />
    <circle cx="60" cy="58" r="50" stroke="url(#ganeshaGoldGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="60" cy="58" r="46" stroke="url(#ganeshaGoldGrad)" strokeWidth="1.5" opacity="0.8" />
    
    {/* Sun Rays / Aura Petals */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <line
        key={deg}
        x1="60"
        y1="9"
        x2="60"
        y2="13"
        stroke="url(#ganeshaGoldGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform={`rotate(${deg} 60 58)`}
      />
    ))}

    {/* Royal Ornate Mukut (Crown) */}
    <path
      d="M48 30 L60 12 L72 30 L68 34 L52 34 Z"
      fill="url(#ganeshaGoldGrad)"
      filter="url(#ganeshaGlow)"
    />
    <path d="M54 26 L60 17 L66 26 Z" fill="#641C32" />
    <circle cx="60" cy="19" r="2" fill="#FFE599" />
    <circle cx="60" cy="27" r="1.5" fill="#FFE599" />
    {/* Crown Pearl Crest */}
    <circle cx="60" cy="11" r="2.5" fill="#FFE599" stroke="url(#ganeshaGoldGrad)" strokeWidth="0.8" />

    {/* Divine Ganesha Face & Slender Curved Trunk (वक्रतुण्ड) */}
    <path
      d="M42 42 C40 32, 80 32, 78 42 C77 52, 70 58, 67 68 C64 78, 74 81, 75 88 C76 96, 66 100, 58 100 C50 100, 48 93, 51 88 C54 83, 60 83, 59 75 C57 65, 49 58, 44 51 C42 47, 42 44, 42 42 Z"
      fill="url(#ganeshaGoldGrad)"
    />

    {/* Broad Royal Ears (कर्ण) with Golden Jewellery */}
    <path
      d="M43 40 C31 40, 26 50, 36 58 C41 61, 44 58, 44 52 Z"
      fill="url(#ganeshaGoldGrad)"
      opacity="0.9"
    />
    <path
      d="M77 40 C89 40, 94 50, 84 58 C79 61, 76 58, 76 52 Z"
      fill="url(#ganeshaGoldGrad)"
      opacity="0.9"
    />
    {/* Ear Kundal (Earrings) */}
    <circle cx="33" cy="56" r="2" fill="#FFE599" />
    <circle cx="87" cy="56" r="2" fill="#FFE599" />

    {/* Sacred Eyes (सौम्य नयन) */}
    <path d="M51 46 C53 45, 55 45, 57 47" stroke="#641C32" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M63 47 C65 45, 67 45, 69 46" stroke="#641C32" strokeWidth="1.5" strokeLinecap="round" />

    {/* Sacred Trishul & Chandrakala Tilak (तिलक) */}
    <path d="M58 35 L62 35 L62 48 L58 48 Z" fill="#641C32" />
    <path d="M55 38 C58 41, 62 41, 65 38" stroke="#FFE599" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="60" cy="50" r="2" fill="#641C32" />
    <circle cx="60" cy="50" r="0.8" fill="#FFE599" />

    {/* Golden Modak on Trunk Tip */}
    <circle cx="75" cy="88" r="4.5" fill="#FFE599" stroke="#8A6726" strokeWidth="1" />
    <path d="M73 86 L77 86 M73 88 L77 88 M73 90 L77 90" stroke="#8A6726" strokeWidth="0.5" />

    {/* Little Golden Lotus Petal Beneath */}
    <path
      d="M45 106 C52 101, 68 101, 75 106 C70 110, 50 110, 45 106 Z"
      fill="url(#ganeshaGoldGrad)"
      opacity="0.85"
    />
  </svg>
);

// मंगल कलश (Mangal Kalash with Coconut and Mango Leaves)
export const KalashIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-12 h-12 text-gold",
  size = 48
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    {/* Coconut */}
    <path d="M26 22 C26 14, 38 14, 38 22 Z" fill="currentColor" />
    <circle cx="32" cy="18" r="4.5" fill="currentColor" opacity="0.9" />
    
    {/* Mango Leaves (आम्रपल्लव) */}
    <path d="M18 20 C24 16, 28 20, 27 25 C22 25, 18 24, 18 20 Z" fill="currentColor" opacity="0.75" />
    <path d="M46 20 C40 16, 36 20, 37 25 C42 25, 46 24, 46 20 Z" fill="currentColor" opacity="0.75" />
    
    {/* Kalash Pot (कलश) */}
    <path
      d="M24 24 L40 24 L43 28 C47 34, 48 45, 43 52 C39 56, 25 56, 21 52 C16 45, 17 34, 21 28 Z"
      fill="currentColor"
    />
    
    {/* Kalash Base */}
    <path d="M26 53 L38 53 L40 56 L24 56 Z" fill="currentColor" />
    
    {/* Sacred Thread (मौली धागा) and Swastik dot */}
    <rect x="22" y="27" width="20" height="2" fill="#641C32" />
    <circle cx="32" cy="40" r="2.5" fill="#641C32" />
  </svg>
);

// शहनाई एवं ढोलक (Shehnai & Dholak Wedding Celebration Motif)
export const ShehnaiIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-12 h-12 text-gold",
  size = 48
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    {/* Shehnai Tube */}
    <path
      d="M12 12 L15 15 L38 38 L42 36 L52 50 L48 54 L34 44 L36 40 Z"
      fill="currentColor"
    />
    {/* Shehnai Bell (Flare) */}
    <path d="M45 42 C52 46, 56 50, 53 55 C49 57, 43 53, 38 46 Z" fill="currentColor" opacity="0.8" />
    
    {/* Dholak Body */}
    <path
      d="M14 42 C16 34, 28 32, 34 38 C40 44, 38 56, 30 58 C22 60, 12 50, 14 42 Z"
      fill="currentColor"
      opacity="0.9"
    />
    {/* Dholak Strings */}
    <path d="M16 38 L32 56 M20 34 L36 52 M24 33 L38 48" stroke="#FFF8EC" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// पवित्र मंडप (Sacred Mandap Icon)
export const MandapIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-12 h-12 text-gold",
  size = 48
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    {/* Mandap Canopy / Dome */}
    <path d="M32 10 L48 22 L16 22 Z" fill="currentColor" />
    <circle cx="32" cy="8" r="2.5" fill="currentColor" />
    
    {/* Pillars (चार स्तम्भ) */}
    <rect x="18" y="22" width="3" height="30" rx="1" fill="currentColor" />
    <rect x="43" y="22" width="3" height="30" rx="1" fill="currentColor" />
    
    {/* Floral Hanging Garland */}
    <path d="M18 24 Q32 30 46 24" fill="none" stroke="#FFE599" strokeWidth="2" strokeDasharray="2 2" />
    
    {/* Holy Fire Altar (हवन कुण्ड) */}
    <polygon points="26,48 38,48 36,54 28,54" fill="currentColor" />
    {/* Sacred Flame (अग्नि शिखा) */}
    <path d="M32 40 C34 43, 35 46, 32 48 C29 46, 30 43, 32 40 Z" fill="#E67E22" stroke="currentColor" strokeWidth="0.5" />
    <path d="M32 43 C33 45, 34 46, 32 48 C31 46, 31 45, 32 43 Z" fill="#F1C40F" />
  </svg>
);

// बारात एवं डोली (Barat & Royal Doli Icon)
export const DoliIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-12 h-12 text-gold",
  size = 48
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    {/* Doli Carrying Pole */}
    <rect x="6" y="24" width="52" height="3" rx="1.5" fill="currentColor" />
    
    {/* Doli Roof (राजसी पालकी) */}
    <path d="M20 24 L44 24 L40 18 L24 18 Z" fill="currentColor" />
    <circle cx="32" cy="15" r="2.5" fill="currentColor" />
    
    {/* Doli Body */}
    <path d="M22 27 L42 27 L39 44 L25 44 Z" fill="currentColor" opacity="0.95" />
    
    {/* Jharokha Window / Curtain in Doli */}
    <path d="M28 32 C28 30, 36 30, 36 32 L36 40 L28 40 Z" fill="#641C32" />
    
    {/* Golden Tassels */}
    <circle cx="23" cy="46" r="1.5" fill="currentColor" />
    <circle cx="32" cy="46" r="1.5" fill="currentColor" />
    <circle cx="41" cy="46" r="1.5" fill="currentColor" />
  </svg>
);

// राजसी तोरण एवं मेहराब विभाजन (Royal Ornamental Divider)
export const RoyalDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 w-full opacity-85 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold to-gold" />
    <div className="flex items-center gap-1.5 text-gold">
      <span className="text-xs">◆</span>
      <span className="text-base sm:text-lg">❖</span>
      <span className="text-xs">◆</span>
    </div>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-gold to-gold" />
  </div>
);

// कोने की नक्काशी (Corner Palace Mandala Filigree)
export const CornerOrnament: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const getTransforms = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0 rotate-90';
      case 'bottom-left':
        return 'bottom-0 left-0 -rotate-90';
      case 'bottom-right':
        return 'bottom-0 right-0 rotate-180';
    }
  };

  return (
    <div className={`absolute ${getTransforms()} pointer-events-none p-2 sm:p-4 z-10 opacity-70`}>
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-gold w-10 h-10 sm:w-16 sm:h-16">
        <path d="M0 0 L40 0 C30 15, 15 30, 0 40 Z" fill="currentColor" opacity="0.4" />
        <path d="M0 0 L90 0 C80 20, 50 20, 45 45 C20 50, 20 80, 0 90 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="25" cy="25" r="4" fill="currentColor" />
        <path d="M0 0 L60 0 C40 10, 10 40, 0 60 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      </svg>
    </div>
  );
};
