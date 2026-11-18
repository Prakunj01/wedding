import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GuestInfo } from '../types';
import { weddingData } from '../config/weddingData';
import { GaneshaIcon, CornerOrnament, RoyalDivider } from './TraditionalIcons';
import { GuestGreeting } from './GuestGreeting';
import { ChevronDown, Sparkles } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynthesizer';

interface DoorOpeningHeroProps {
  guest: GuestInfo;
  onOpenInvitation: () => void;
  isOpen: boolean;
}

export const DoorOpeningHero: React.FC<DoorOpeningHeroProps> = ({
  guest,
  onOpenInvitation,
  isOpen,
}) => {
  const [curtainsOpened, setCurtainsOpened] = useState(false);
  const [hasStartedAudio, setHasStartedAudio] = useState(false);

  // Auto-open royal curtains on landing + attempt audio playback
  useEffect(() => {
    // Open curtains after a brief cinematic dramatic pause (600ms)
    const openTimer = setTimeout(() => {
      setCurtainsOpened(true);
      onOpenInvitation();

      // Launch celebratory royal flower/gold confetti
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#C6A15B', '#ECC880', '#641C32', '#842B43', '#FFF8EC'],
        });
      } catch (e) {
        // ignore
      }

      // Try autoplaying Shehnai audio
      if (!hasStartedAudio) {
        weddingAudio.start().then((started) => {
          if (started) {
            setHasStartedAudio(true);
          }
        });
      }
    }, 600);

    // Also trigger audio on any first user touch/click as fallback for browser restrictions
    const handleFirstInteraction = () => {
      if (!weddingAudio.getIsPlaying()) {
        weddingAudio.start().then(() => setHasStartedAudio(true));
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      clearTimeout(openTimer);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ivory text-textDark px-3 sm:px-6 pt-24 sm:pt-28 pb-16">
      
      {/* ========================================================
          1. ROYAL VELVET CURTAINS (Open smoothly to left & right on land)
          ======================================================== */}
      <AnimatePresence>
        {!curtainsOpened && (
          <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Left Royal Velvet Curtain Door */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#360B17] via-[#641C32] to-[#4A1222] border-r-4 border-gold shadow-[10px_0_40px_rgba(0,0,0,0.6)] flex items-center justify-end pr-4 sm:pr-8"
            >
              {/* Golden Tassel & Filigree border */}
              <div className="absolute inset-y-0 right-2 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-80" />
              <div className="text-gold/40 text-4xl sm:text-7xl font-royalHindi select-none rotate-90 origin-right">
                शुभ
              </div>
            </motion.div>

            {/* Right Royal Velvet Curtain Door */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#360B17] via-[#641C32] to-[#4A1222] border-l-4 border-gold shadow-[-10px_0_40px_rgba(0,0,0,0.6)] flex items-center justify-start pl-4 sm:pl-8"
            >
              {/* Golden Tassel & Filigree border */}
              <div className="absolute inset-y-0 left-2 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-80" />
              <div className="text-gold/40 text-4xl sm:text-7xl font-royalHindi select-none -rotate-90 origin-left">
                विवाह
              </div>
            </motion.div>

            {/* Central Golden Emblem while closed */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-burgundy via-maroon to-burgundy border-2 border-gold shadow-2xl flex items-center justify-center p-3 animate-pulse">
                <GaneshaIcon className="w-full h-full text-gold" size={72} />
              </div>
              <p className="font-royalHindi text-gold text-lg sm:text-xl font-bold tracking-widest mt-3 drop-shadow-md">
                ॥ श्री गणेशाय नमः ॥
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          2. THE ONE SINGLE ULTRA-RICH ROYAL INVITATION CARD
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl w-full bg-[#FFFDF8] border-2 sm:border-3 border-gold/70 rounded-3xl p-5 sm:p-10 md:p-12 shadow-[0_15px_40px_rgba(100,28,50,0.12),0_0_50px_rgba(198,161,91,0.15)] text-center my-auto"
      >
        {/* Royal Corner Ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Inner double filigree border */}
        <div className="absolute inset-2 sm:inset-3 border border-gold/40 rounded-2xl pointer-events-none" />
        <div className="absolute inset-3 sm:inset-5 border border-gold/20 rounded-xl pointer-events-none" />

        {/* Lord Ganesha Divine Centerpiece */}
        <div className="mb-4 sm:mb-6 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <GaneshaIcon className="w-24 h-24 sm:w-28 sm:h-28 text-gold drop-shadow-md" size={100} />
          </motion.div>

          <p className="font-royalHindi text-gold-dark text-lg sm:text-xl md:text-2xl font-bold tracking-widest mt-2">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <p className="text-xs sm:text-sm text-textDark/75 max-w-md mx-auto whitespace-pre-line mt-1.5 font-devanagari italic leading-relaxed">
            {weddingData.couple.shlokaMain}
          </p>
        </div>

        <RoyalDivider className="my-3 sm:my-5" />

        {/* Personalized Guest Greeting */}
        <div className="my-4 sm:my-6">
          <GuestGreeting guest={guest} variant="hero" />
        </div>

        {/* Main Wedding Couple Title */}
        <div className="my-5 sm:my-7 space-y-2.5">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-royalHindi font-bold text-burgundy tracking-wide drop-shadow-xs">
            {weddingData.couple.title}
          </h1>

          <div className="flex items-center justify-center gap-2 text-gold-dark">
            <span className="text-xs text-gold">◆</span>
            <span className="font-royalHindi text-xl sm:text-2xl text-maroon font-semibold">
              {weddingData.couple.subTitle}
            </span>
            <span className="text-xs text-gold">◆</span>
          </div>

          <div className="inline-block mt-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-burgundy via-maroon to-burgundy text-gold-light border border-gold/70 font-devanagari text-sm sm:text-base md:text-lg font-bold shadow-royal">
            शुभ लग्न: {weddingData.couple.weddingDateFormatted} ({weddingData.couple.dayHindi})
          </div>
        </div>

        {/* Venue Teaser */}
        <div className="p-3 sm:p-4 rounded-xl bg-ivory-soft border border-gold/30 max-w-lg mx-auto text-xs sm:text-sm text-textDark/85 font-devanagari">
          <p className="font-semibold text-burgundy text-sm sm:text-base">
            शुभ विवाह स्थल: {weddingData.venue.name}
          </p>
          <p className="text-textDark/70 mt-0.5">
            {weddingData.venue.address}
          </p>
        </div>

        {/* Scroll Down CTA */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="#invitation-letter-section"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 hover:from-gold/30 hover:to-gold/40 text-burgundy text-xs sm:text-sm font-bold font-devanagari transition-all border border-gold/60 shadow-xs hover:shadow-gold-glow"
          >
            <Sparkles className="w-4 h-4 text-burgundy group-hover:rotate-12 transition-transform" />
            <span>संपूर्ण निमंत्रण पत्रिका देखें</span>
            <ChevronDown className="w-4 h-4 text-burgundy animate-bounce" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
