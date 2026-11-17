import React from 'react';

// श्री गणेश जी का दिव्य मांगलिक प्रतीक (Lord Ganesha Auspicious Motif)
export const GaneshaIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-20 h-20 text-gold",
  size = 80
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    {/* Halo / Aura */}
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"/>
    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    
    {/* Mukut / Crown */}
    <path d="M42 22 L50 12 L58 22 L54 26 L46 26 Z" fill="currentColor" />
    <circle cx="50" cy="18" r="2" fill="#FFF8EC" />
    
    {/* Ganesha Mastak & Trunk (वक्रतुण्ड) */}
    <path
      d="M36 34 C36 26, 64 26, 64 34 C64 42, 58 48, 56 56 C54 64, 62 66, 63 72 C64 78, 56 82, 50 82 C44 82, 42 76, 44 72 C46 68, 51 68, 50 62 C48 54, 42 48, 38 42 C36 39, 36 36, 36 34 Z"
      fill="currentColor"
    />
    
    {/* Ears (कर्ण) */}
    <path d="M36 32 C28 32, 24 40, 32 46 C35 48, 37 46, 37 42 Z" fill="currentColor" opacity="0.85" />
    <path d="M64 32 C72 32, 76 40, 68 46 C65 48, 63 46, 63 42 Z" fill="currentColor" opacity="0.85" />
    
    {/* Tilak & Trishul Line */}
    <path d="M49 28 L51 28 L51 38 L49 38 Z" fill="#641C32" />
    <circle cx="50" cy="40" r="1.5" fill="#641C32" />
    
    {/* Modak in Trunk */}
    <circle cx="62" cy="72" r="3.5" fill="#FFE599" stroke="currentColor" strokeWidth="1" />
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
