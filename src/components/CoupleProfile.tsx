import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { RoyalDivider, KalashIcon } from './TraditionalIcons';
import { Camera, Upload, Sparkles, Heart } from 'lucide-react';

export const CoupleProfile: React.FC = () => {
  const [bridePhoto, setBridePhoto] = useState<string | null>(null);
  const [groomPhoto, setGroomPhoto] = useState<string | null>(null);
  const [couplePhoto, setCouplePhoto] = useState<string | null>(null);

  // Load any saved photos from localStorage
  useEffect(() => {
    try {
      const savedBride = localStorage.getItem('arpita_wedding_bride_photo');
      const savedGroom = localStorage.getItem('arpita_wedding_groom_photo');
      const savedCouple = localStorage.getItem('arpita_wedding_couple_photo');
      if (savedBride) setBridePhoto(savedBride);
      if (savedGroom) setGroomPhoto(savedGroom);
      if (savedCouple) setCouplePhoto(savedCouple);
    } catch (e) {
      // ignore
    }
  }, []);

  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'bride' | 'groom' | 'couple'
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        if (type === 'bride') {
          setBridePhoto(result);
          localStorage.setItem('arpita_wedding_bride_photo', result);
        } else if (type === 'groom') {
          setGroomPhoto(result);
          localStorage.setItem('arpita_wedding_groom_photo', result);
        } else if (type === 'couple') {
          setCouplePhoto(result);
          localStorage.setItem('arpita_wedding_couple_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (type: 'bride' | 'groom' | 'couple') => {
    if (type === 'bride') {
      setBridePhoto(null);
      localStorage.removeItem('arpita_wedding_bride_photo');
    } else if (type === 'groom') {
      setGroomPhoto(null);
      localStorage.removeItem('arpita_wedding_groom_photo');
    } else if (type === 'couple') {
      setCouplePhoto(null);
      localStorage.removeItem('arpita_wedding_couple_photo');
    }
  };

  return (
    <section id="couple-section" className="py-20 px-4 bg-ivory text-textDark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-medium tracking-wide mb-3">
            <Sparkles className="w-4 h-4 text-gold-dark" />
            <span>पावन युगल परिणय</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-royalHindi font-bold text-burgundy">
            वर-वधू परिचय
          </h2>
          <p className="text-sm sm:text-base text-textDark/80 font-devanagari mt-2 max-w-xl mx-auto">
            दो परिवारों का आत्मिक मिलन, संस्कारों की मर्यादा एवं जीवन भर का पावन साथ
          </p>
          <RoyalDivider className="my-4 sm:my-6" />
        </div>

        {/* Profiles Grid: Bride & Groom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-16">
          {/* 1. वधू (BRIDE - ARPITA) - Primary Bride's Family Focus */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-sm border-2 border-gold/60 rounded-3xl p-6 sm:p-8 shadow-card-royal hover:shadow-gold-glow transition-all duration-300"
          >
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-burgundy text-gold-light border border-gold text-xs sm:text-sm font-royalHindi font-semibold shadow-md whitespace-nowrap">
              ✿ हमारी लाडली वधू ✿
            </div>

            {/* Jharokha Portrait Frame */}
            <div className="flex flex-col items-center mt-3 mb-6">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-t-full border-4 border-gold p-1.5 bg-gradient-to-b from-gold/20 via-blush/30 to-ivory shadow-lg overflow-hidden group">
                {bridePhoto ? (
                  <img
                    src={bridePhoto}
                    alt={weddingData.bride.name}
                    className="w-full h-full object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  // Royal Decorative Bride Illustration Placeholder
                  <div className="w-full h-full rounded-t-full bg-gradient-to-b from-maroon/10 to-burgundy/20 flex flex-col items-center justify-center p-4 text-center">
                    <svg viewBox="0 0 100 120" className="w-28 h-28 text-burgundy/80">
                      {/* Chunari / Odhni drape */}
                      <path d="M25 45 C25 20, 75 20, 75 45 C75 75, 80 110, 80 110 L20 110 C20 110, 25 75, 25 45 Z" fill="#842B43" opacity="0.3" />
                      {/* Face silhouette */}
                      <circle cx="50" cy="48" r="16" fill="#ECC880" />
                      {/* Maang Tikka */}
                      <path d="M50 32 L50 42" stroke="#9B752D" strokeWidth="1.5" />
                      <circle cx="50" cy="42" r="2" fill="#641C32" />
                      {/* Nath / Nose ring */}
                      <circle cx="44" cy="50" r="3" fill="none" stroke="#9B752D" strokeWidth="1" />
                      {/* Lehanga & Ornaments */}
                      <path d="M35 70 Q50 65 65 70 L72 110 L28 110 Z" fill="#641C32" opacity="0.75" />
                    </svg>
                    <span className="text-[11px] font-devanagari text-burgundy font-semibold mt-1">
                      आयुष्मती अर्पिता
                    </span>
                  </div>
                )}

                {/* Upload Button Overlay */}
                <label className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-xs font-devanagari gap-1 p-2 text-center rounded-t-full">
                  <Camera className="w-6 h-6 text-gold-light" />
                  <span>वधू की तस्वीर बदलें / अपलोड करें</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handlePhotoUpload(e, 'bride')}
                  />
                </label>
              </div>

              {bridePhoto && (
                <button
                  onClick={() => removePhoto('bride')}
                  className="mt-2 text-[11px] text-maroon hover:text-burgundy underline font-devanagari"
                >
                  तस्वीर हटाएं (मूल रूप दिखाएं)
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="text-center space-y-3 font-devanagari">
              <h3 className="font-royalHindi text-2xl sm:text-3xl text-burgundy font-bold">
                {weddingData.bride.name}
              </h3>
              <div className="space-y-1 text-xs sm:text-sm text-gold-dark font-medium">
                <p>{weddingData.bride.parentsLine}</p>
                <p>{weddingData.bride.grandparentsLine}</p>
                <p className="text-maroon font-semibold">{weddingData.bride.residence}</p>
              </div>

              <div className="bg-ivory-soft rounded-2xl p-4 border border-gold/30 space-y-2 text-xs sm:text-sm text-textDark text-left">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-burgundy min-w-[90px]">पिताजी:</span>
                  <span>{weddingData.bride.father}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-burgundy min-w-[90px]">माताजी:</span>
                  <span>{weddingData.bride.mother}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-burgundy min-w-[90px]">दादाजी:</span>
                  <span>{weddingData.bride.grandfather}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-burgundy min-w-[90px]">दादीजी:</span>
                  <span>{weddingData.bride.grandmother}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 pt-1 border-t border-gold/20">
                  <span className="font-semibold text-burgundy min-w-[90px]">गृह निवास:</span>
                  <span className="font-medium text-maroon">{weddingData.bride.residence}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. वर (GROOM - ROHIT) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-sm border-2 border-gold/60 rounded-3xl p-6 sm:p-8 shadow-card-royal hover:shadow-gold-glow transition-all duration-300"
          >
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-burgundy text-gold-light border border-gold text-xs sm:text-sm font-royalHindi font-semibold shadow-md whitespace-nowrap">
              ✿ सुयोग्य वर ✿
            </div>

            {/* Jharokha Portrait Frame */}
            <div className="flex flex-col items-center mt-3 mb-6">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-t-full border-4 border-gold p-1.5 bg-gradient-to-b from-gold/20 via-blush/30 to-ivory shadow-lg overflow-hidden group">
                {groomPhoto ? (
                  <img
                    src={groomPhoto}
                    alt={weddingData.groom.name}
                    className="w-full h-full object-cover rounded-t-full transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  // Royal Decorative Groom Illustration Placeholder
                  <div className="w-full h-full rounded-t-full bg-gradient-to-b from-burgundy/10 to-maroon/20 flex flex-col items-center justify-center p-4 text-center">
                    <svg viewBox="0 0 100 120" className="w-28 h-28 text-burgundy/80">
                      {/* Pagri / Royal Safa with Kalgi */}
                      <path d="M28 42 C28 20, 72 20, 72 42 Z" fill="#842B43" />
                      <circle cx="50" cy="20" r="3" fill="#ECC880" />
                      <path d="M50 17 L52 10 L50 6 L48 10 Z" fill="#FFE599" />
                      {/* Face silhouette */}
                      <circle cx="50" cy="48" r="16" fill="#ECC880" />
                      {/* Tilak */}
                      <rect x="49" y="38" width="2" height="6" fill="#641C32" />
                      {/* Royal Sherwani & Mala */}
                      <path d="M30 68 Q50 64 70 68 L76 110 L24 110 Z" fill="#641C32" opacity="0.85" />
                      <path d="M38 72 Q50 82 62 72" fill="none" stroke="#ECC880" strokeWidth="2" strokeDasharray="2 2" />
                    </svg>
                    <span className="text-[11px] font-devanagari text-burgundy font-semibold mt-1">
                      आयुष्मान रोहित
                    </span>
                  </div>
                )}

                {/* Upload Button Overlay */}
                <label className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-xs font-devanagari gap-1 p-2 text-center rounded-t-full">
                  <Camera className="w-6 h-6 text-gold-light" />
                  <span>वर की तस्वीर बदलें / अपलोड करें</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handlePhotoUpload(e, 'groom')}
                  />
                </label>
              </div>

              {groomPhoto && (
                <button
                  onClick={() => removePhoto('groom')}
                  className="mt-2 text-[11px] text-maroon hover:text-burgundy underline font-devanagari"
                >
                  तस्वीर हटाएं (मूल रूप दिखाएं)
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="text-center space-y-3 font-devanagari">
              <h3 className="font-royalHindi text-2xl sm:text-3xl text-burgundy font-bold">
                {weddingData.groom.name}
              </h3>
              <div className="space-y-1 text-xs sm:text-sm text-gold-dark font-medium">
                <p>{weddingData.groom.parentsLine}</p>
                <p>{weddingData.groom.grandparentsLine}</p>
                <p className="text-maroon font-semibold">{weddingData.groom.residence}</p>
              </div>

              <div className="bg-ivory-soft rounded-2xl p-4 border border-gold/30 space-y-2 text-xs sm:text-sm text-textDark text-left">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-burgundy min-w-[90px]">पिताजी:</span>
                  <span>{weddingData.groom.father}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-burgundy min-w-[90px]">माताजी:</span>
                  <span>{weddingData.groom.mother}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-burgundy min-w-[90px]">दादाजी:</span>
                  <span>{weddingData.groom.grandfather}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 pt-1 border-t border-gold/20">
                  <span className="font-semibold text-burgundy min-w-[90px]">गृह निवास:</span>
                  <span className="font-medium text-maroon">{weddingData.groom.residence}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Couple Feature Banner / Photo Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-burgundy via-maroon to-burgundy rounded-3xl p-6 sm:p-10 border-2 border-gold text-gold-pale text-center shadow-xl overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <Heart className="w-8 h-8 text-gold mx-auto fill-gold/30 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-royalHindi font-bold text-gold-light">
              “मांगल्यं तन्तुनानेन लोकजीवनहेतुना”
            </h3>
            <p className="text-xs sm:text-sm text-gold-pale/90 font-devanagari leading-relaxed">
              दो परिवारों का यह पावन संगम ईश्वर के अनुग्रह एवं आप सभी स्नेही स्वजनों के शुभाशीष से संपन्न होने जा रहा है।
            </p>

            {couplePhoto ? (
              <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-gold shadow-lg mt-4 group">
                <img
                  src={couplePhoto}
                  alt="अर्पिता एवं रोहित युगल छायाचित्र"
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => removePhoto('couple')}
                  className="absolute bottom-2 right-2 px-3 py-1 bg-burgundy/90 text-gold-light text-xs rounded-full border border-gold"
                >
                  फोटो हटाएं
                </button>
              </div>
            ) : (
              <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/20 hover:bg-gold/30 text-gold-light border border-gold/50 rounded-full cursor-pointer text-xs sm:text-sm font-devanagari transition-all shadow-md">
                <Upload className="w-4 h-4" />
                <span>युगल (Couple) छायाचित्र अपलोड करें</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handlePhotoUpload(e, 'couple')}
                />
              </label>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
