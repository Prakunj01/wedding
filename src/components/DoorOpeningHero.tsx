import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GuestInfo } from '../types';
import { weddingData } from '../config/weddingData';
import { GaneshaIcon, CornerOrnament, RoyalDivider } from './TraditionalIcons';
import { GuestGreeting } from './GuestGreeting';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';

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
  const [doorsOpening, setDoorsOpening] = useState(false);

  const handleOpenClick = () => {
    setDoorsOpening(true);

    // Launch celebratory gold and rose confetti burst
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C6A15B', '#ECC880', '#641C32', '#842B43', '#EAD5CF'],
    });

    setTimeout(() => {
      onOpenInvitation();
      // Scroll smoothly to invitation letter section
      const nextSection = document.getElementById('invitation-letter-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 850);
  };

  const isDefaultGuest = guest.slug === 'default' || !guest.hindiName;
  const guestDisplayName = isDefaultGuest ? 'अतिथि' : guest.hindiName;

  return (
    <>
      {/* 1. Full-Screen Royal Preloader / Welcome Curtain Overlay (Visible until opened) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#360B17] via-[#641C32] to-[#4A1222] select-none"
          >
            {/* Sliding Left Palace Gate */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: doorsOpening ? '-100%' : 0 }}
              transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#2A0812] to-[#501626] border-r border-gold/40 shadow-2xl flex items-center justify-end pr-3 sm:pr-6 pointer-events-none"
            >
              <div className="h-3/4 w-12 sm:w-20 border-y-2 border-l-2 border-gold/30 rounded-l-full flex items-center justify-center opacity-40">
                <span className="text-gold text-2xl sm:text-4xl font-cinzel">ॐ</span>
              </div>
            </motion.div>

            {/* Sliding Right Palace Gate */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: doorsOpening ? '100%' : 0 }}
              transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#2A0812] to-[#501626] border-l border-gold/40 shadow-2xl flex items-center justify-start pl-3 sm:pl-6 pointer-events-none"
            >
              <div className="h-3/4 w-12 sm:w-20 border-y-2 border-r-2 border-gold/30 rounded-r-full flex items-center justify-center opacity-40">
                <span className="text-gold text-2xl sm:text-4xl font-cinzel">श्री</span>
              </div>
            </motion.div>

            {/* Central Welcome Card on Preloader */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: doorsOpening ? 1.05 : 1, opacity: doorsOpening ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-w-lg w-[92%] bg-[#FFFDF8]/95 backdrop-blur-md border-2 border-gold rounded-3xl p-6 sm:p-10 shadow-2xl text-center text-textDark"
            >
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              {/* Divine Ganesha Icon with Golden Aura */}
              <div className="flex flex-col items-center mb-3">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                >
                  <GaneshaIcon className="w-16 h-16 sm:w-20 sm:h-20 text-burgundy" />
                </motion.div>
                <p className="font-royalHindi text-gold-dark text-base sm:text-lg font-bold tracking-widest mt-1">
                  ॥ श्री गणेशाय नमः ॥
                </p>
                <p className="text-[11px] sm:text-xs text-textDark/70 font-devanagari mt-1 max-w-xs mx-auto">
                  वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
                </p>
              </div>

              {/* Invitation Sub-badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs font-semibold font-devanagari mb-3">
                <span>✿ वधू पक्ष की ओर से सादर आमंत्रण ✿</span>
              </div>

              {/* Couple Title */}
              <h1 className="text-3xl sm:text-4xl font-royalHindi font-bold text-burgundy tracking-wide mb-1">
                {weddingData.couple.title}
              </h1>
              <p className="font-royalHindi text-maroon text-base sm:text-lg font-semibold mb-3">
                शुभ मंगल परिणय
              </p>

              {/* Personalized Guest Badge */}
              <div className="bg-ivory-soft border border-gold/30 rounded-2xl p-3 my-4 space-y-1 font-devanagari">
                <p className="text-xs text-gold-dark font-medium">विशेष वैयक्तिक आमंत्रण</p>
                <p className="text-base sm:text-lg font-bold text-burgundy">
                  {guest.title || 'प्रिय'} {guestDisplayName} {guest.honorific || 'जी'}{' '}
                  {guest.familyNote && (
                    <span className="text-maroon font-normal text-sm">({guest.familyNote})</span>
                  )}
                </p>
                <p className="text-xs text-textDark/75">
                  अर्पिता के शुभ विवाह समारोह में आपका हार्दिक स्वागत एवं अभिनंदन है।
                </p>
              </div>

              <div className="text-xs sm:text-sm font-devanagari text-maroon font-semibold mb-6">
                शुभ लग्न: {weddingData.couple.weddingDateFormatted} ({weddingData.couple.dayHindi})
              </div>

              {/* Grand Open Button */}
              <div className="flex flex-col items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleOpenClick}
                  disabled={doorsOpening}
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 rounded-full bg-gradient-to-r from-burgundy via-maroon to-burgundy text-gold-pale font-royalHindi text-base sm:text-lg font-bold shadow-royal hover:shadow-gold-glow transition-all duration-300 border-2 border-gold overflow-hidden"
                >
                  <Sparkles className="w-5 h-5 text-gold-light group-hover:rotate-12 transition-transform" />
                  <span>पावन आमंत्रण खोलें</span>
                  <Heart className="w-5 h-5 text-gold-light fill-gold-light/40 group-hover:scale-125 transition-transform" />

                  {/* Shimmer Light Bar */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </motion.button>

                <p className="text-[11px] text-textDark/60 mt-2.5 font-devanagari">
                  (क्लिक करने पर पावन शहनाई संगीत एवं संपूर्ण पत्रिका का अनावरण होगा)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Hero Section (Clean, unobstructed, no middle lines) */}
      <section
        id="door-hero-section"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ivory text-textDark px-4 pt-24 pb-16"
      >
        {/* Royal Corner Ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Main Royal Card Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-md border-2 border-gold/50 rounded-3xl p-6 sm:p-10 shadow-card-royal text-center"
        >
          {/* Inner filigree border */}
          <div className="absolute inset-2 border border-gold/30 rounded-2xl pointer-events-none" />

          {/* Shloka Ganesha */}
          <div className="mb-4 flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <GaneshaIcon className="w-16 h-16 sm:w-20 sm:h-20 text-burgundy" />
            </motion.div>
            <p className="font-royalHindi text-gold-dark text-base sm:text-lg font-bold tracking-widest mt-1">
              {weddingData.couple.shlokaGanesha}
            </p>
            <p className="text-xs sm:text-sm text-textDark/70 max-w-md mx-auto whitespace-pre-line mt-1 font-devanagari">
              {weddingData.couple.shlokaMain}
            </p>
          </div>

          <RoyalDivider className="my-3 sm:my-5" />

          {/* Personalized Guest Greeting */}
          <div className="my-5">
            <GuestGreeting guest={guest} variant="hero" />
          </div>

          {/* Main Wedding Title */}
          <div className="my-6 space-y-2">
            <p className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-gold-dark">
              — कन्या पक्ष की ओर से सादर आमंत्रण —
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-royalHindi font-bold text-burgundy tracking-wide drop-shadow-sm">
              {weddingData.couple.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-gold-dark">
              <span className="text-xs text-gold">◆</span>
              <span className="font-royalHindi text-xl sm:text-2xl text-maroon font-semibold">
                {weddingData.couple.subTitle}
              </span>
              <span className="text-xs text-gold">◆</span>
            </div>

            <div className="inline-block mt-3 px-5 py-2 rounded-xl bg-burgundy text-gold-light border border-gold font-devanagari text-base sm:text-lg font-semibold shadow-md">
              शुभ लग्न: {weddingData.couple.weddingDateFormatted} ({weddingData.couple.dayHindi})
            </div>
          </div>

          {/* Venue Teaser */}
          <p className="text-xs sm:text-sm text-textDark/80 font-devanagari mt-2">
            शुभ विवाह स्थल:{' '}
            <span className="font-semibold text-burgundy">{weddingData.venue.name}</span>,{' '}
            {weddingData.venue.city} ({weddingData.venue.district})
          </p>

          {/* Scroll Down Indicator */}
          <div className="mt-8 flex flex-col items-center">
            <a
              href="#invitation-letter-section"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold/15 hover:bg-gold/25 text-burgundy text-xs sm:text-sm font-semibold font-devanagari transition-colors border border-gold/40 shadow-xs"
            >
              <span>संपूर्ण पत्रिका संदेश देखें</span>
              <ChevronDown className="w-4 h-4 text-burgundy animate-bounce" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};
