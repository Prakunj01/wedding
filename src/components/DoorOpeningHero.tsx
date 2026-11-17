import React, { useState, useEffect } from 'react';
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

// Floating particle component
const FloatingParticle: React.FC<{ delay: number; x: number; size: number; symbol: string }> = ({ delay, x, size, symbol }) => (
  <motion.div
    className="absolute text-gold/30 select-none pointer-events-none"
    style={{ left: `${x}%`, fontSize: size, bottom: '-10%' }}
    animate={{ y: [0, -120, -240], opacity: [0, 0.6, 0] }}
    transition={{ duration: 4 + Math.random() * 3, delay, repeat: Infinity, ease: 'easeOut' }}
  >
    {symbol}
  </motion.div>
);

export const DoorOpeningHero: React.FC<DoorOpeningHeroProps> = ({
  guest,
  onOpenInvitation,
  isOpen,
}) => {
  const [doorsOpening, setDoorsOpening] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideStarted, setSlideStarted] = useState(false);

  // Auto-advance slides every 3.5s after first render
  useEffect(() => {
    if (isOpen) return;
    const timer = setTimeout(() => setSlideStarted(true), 400);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!slideStarted || doorsOpening || isOpen) return;
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slideStarted, doorsOpening, isOpen]);

  const slides = [
    {
      bg: 'from-[#360B17] via-[#641C32] to-[#4A1222]',
      icon: '🪔',
      line1: '॥ श्री गणेशाय नमः ॥',
      line2: 'शुभ मंगल परिणय',
      line3: 'अर्पिता संग रोहित',
    },
    {
      bg: 'from-[#1A0A30] via-[#3B1F6A] to-[#2A0E50]',
      icon: '💐',
      line1: 'कन्या पक्ष की ओर से',
      line2: 'सादर आमंत्रण',
      line3: 'विश्वकर्मा परिवार, खुरई',
    },
    {
      bg: 'from-[#0D2318] via-[#1B4332] to-[#0D2318]',
      icon: '✨',
      line1: 'शुभ विवाह',
      line2: '२५ नवंबर २०२६ — बुधवार',
      line3: 'चंद्रलोक मैरिज गार्डन, बिजावर',
    },
  ];

  const handleOpenClick = () => {
    setDoorsOpening(true);

    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#C6A15B', '#ECC880', '#641C32', '#842B43', '#EAD5CF', '#FFD700'],
    });
    setTimeout(() => {
      confetti({ particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.6 }, colors: ['#C6A15B', '#ECC880'] });
      confetti({ particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.6 }, colors: ['#C6A15B', '#ECC880'] });
    }, 300);

    setTimeout(() => {
      onOpenInvitation();
      const nextSection = document.getElementById('invitation-letter-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 900);
  };

  const isDefaultGuest = guest.slug === 'default' || !guest.hindiName;
  const guestDisplayName = isDefaultGuest ? 'अतिथि' : guest.hindiName;

  return (
    <>
      {/* 1. Full-Screen Cinematic Slide Preloader (Visible until opened) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 overflow-hidden select-none"
          >
            {/* === BACKGROUND: Animated Slide Carousel === */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className={`absolute inset-0 bg-gradient-to-br ${slides[slideIndex].bg}`}
              />
            </AnimatePresence>

            {/* Floating particles */}
            {['✿', '❀', '꧁', '❁', '🌸', '✦', '꧂', '❃'].map((sym, i) => (
              <FloatingParticle key={i} delay={i * 0.6} x={8 + i * 11} size={16 + (i % 3) * 6} symbol={sym} />
            ))}

            {/* Decorative top & bottom gold bars */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === slideIndex ? 'bg-gold w-6' : 'bg-gold/30'}`}
                />
              ))}
            </div>

            {/* === SLIDING TEXT PANEL (bottom-up per slide) === */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">

              {/* Top ornament */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gold/50 text-3xl mb-4 tracking-[0.4em]"
              >
                ✦ ✦ ✦
              </motion.div>

              {/* Slide text — animates per slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center mb-6"
                >
                  <p className="text-gold/70 text-sm font-devanagari tracking-widest mb-2 uppercase">
                    {slides[slideIndex].line1}
                  </p>
                  <h2 className="text-gold text-4xl sm:text-5xl font-royalHindi font-bold drop-shadow-lg mb-2">
                    {slides[slideIndex].line2}
                  </h2>
                  <p className="text-gold-pale/80 text-base sm:text-lg font-devanagari">
                    {slides[slideIndex].line3}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Central gold divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6"
              />

              {/* White Invitation Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: doorsOpening ? 0 : 1, y: doorsOpening ? -30 : 0, scale: doorsOpening ? 1.05 : 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative max-w-sm w-[92%] bg-[#FFFDF8]/95 backdrop-blur-xl border-2 border-gold/70 rounded-3xl px-5 py-5 shadow-2xl text-center text-textDark"
              >
                <CornerOrnament position="top-left" />
                <CornerOrnament position="top-right" />
                <CornerOrnament position="bottom-left" />
                <CornerOrnament position="bottom-right" />

                {/* Ganesha */}
                <div className="flex flex-col items-center mb-2">
                  <motion.div
                    animate={{ scale: [1, 1.07, 1], rotate: [0, 2, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  >
                    <GaneshaIcon className="w-14 h-14 sm:w-16 sm:h-16 text-burgundy" />
                  </motion.div>
                  <p className="font-royalHindi text-gold-dark text-sm font-bold tracking-widest mt-1">
                    ॥ श्री गणेशाय नमः ॥
                  </p>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-[11px] font-semibold font-devanagari mb-2">
                  ✿ वधू पक्ष की ओर से सादर आमंत्रण ✿
                </div>

                {/* Couple name */}
                <h1 className="text-2xl sm:text-3xl font-royalHindi font-bold text-burgundy tracking-wide mb-1">
                  {weddingData.couple.title}
                </h1>
                <p className="font-royalHindi text-maroon text-sm font-semibold mb-2">
                  शुभ मंगल परिणय
                </p>

                {/* Guest greeting */}
                <div className="bg-ivory-soft border border-gold/30 rounded-xl px-3 py-2 mb-3 font-devanagari">
                  <p className="text-[10px] text-gold-dark font-medium">विशेष वैयक्तिक आमंत्रण</p>
                  <p className="text-sm sm:text-base font-bold text-burgundy leading-tight">
                    {guest.title || 'प्रिय'} {guestDisplayName} {guest.honorific || 'जी'}
                    {guest.familyNote && (
                      <span className="text-maroon font-normal text-xs"> ({guest.familyNote})</span>
                    )}
                  </p>
                  <p className="text-[10px] text-textDark/70 mt-0.5">
                    अर्पिता के शुभ विवाह समारोह में आपका हार्दिक स्वागत एवं अभिनंदन है।
                  </p>
                </div>

                <div className="text-[11px] font-devanagari text-maroon font-semibold mb-3">
                  शुभ लग्न: {weddingData.couple.weddingDateFormatted} ({weddingData.couple.dayHindi})
                </div>

                {/* Open Button */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(198,161,91,0.6)' }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleOpenClick}
                  disabled={doorsOpening}
                  className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-burgundy via-maroon to-burgundy text-gold-pale font-royalHindi text-sm sm:text-base font-bold shadow-royal border-2 border-gold overflow-hidden w-full justify-center"
                >
                  <Sparkles className="w-4 h-4 text-gold-light group-hover:rotate-12 transition-transform" />
                  <span>पावन आमंत्रण खोलें</span>
                  <Heart className="w-4 h-4 text-gold-light fill-gold-light/40 group-hover:scale-125 transition-transform" />
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.button>

                <p className="text-[9px] text-textDark/50 mt-1.5 font-devanagari">
                  क्लिक करने पर शहनाई संगीत एवं संपूर्ण पत्रिका खुलेगी
                </p>
              </motion.div>
            </div>

            {/* Curtain doors that slide on open */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: doorsOpening ? '-100%' : 0 }}
              transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/60 to-black/20 pointer-events-none"
            />
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: doorsOpening ? '100%' : 0 }}
              transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/60 to-black/20 pointer-events-none"
            />
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
