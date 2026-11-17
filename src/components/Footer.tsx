import React from 'react';
import { weddingData } from '../config/weddingData';
import { GaneshaIcon, KalashIcon, RoyalDivider } from './TraditionalIcons';
import { Heart, Phone, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-burgundy via-burgundy-dark to-burgundy-deep text-gold-pale pt-16 pb-12 px-4 border-t-4 border-gold">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Ganesha Motif */}
        <div className="flex justify-center">
          <GaneshaIcon className="w-16 h-16 text-gold" size={64} />
        </div>

        <p className="font-royalHindi text-xl sm:text-2xl text-gold-light font-bold">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <p className="text-xs sm:text-sm text-gold-pale/80 font-devanagari max-w-lg mx-auto whitespace-pre-line italic">
          {weddingData.couple.shlokaBlessing}
        </p>

        <RoyalDivider className="my-6 opacity-60" />

        {/* Wedding Summary */}
        <div className="space-y-2">
          <h3 className="font-royalHindi text-2xl sm:text-3xl font-bold text-white tracking-wide">
            {weddingData.couple.title}
          </h3>
          <p className="text-xs sm:text-sm text-gold-light font-semibold font-devanagari">
            शुभ परिणय: {weddingData.couple.weddingDateFormatted} ({weddingData.couple.dayHindi})
          </p>
          <p className="text-xs text-gold-pale/80 font-devanagari">
            शुभ विवाह स्थल: {weddingData.venue.name}, {weddingData.venue.address}
          </p>
        </div>

        {/* Host Family Tribute (Bride's family only) */}
        <div className="py-4 px-6 bg-black/25 backdrop-blur-xs rounded-2xl border border-gold/30 max-w-xl mx-auto space-y-1.5 font-devanagari text-xs sm:text-sm">
          <p className="text-gold-light font-bold text-sm sm:text-base">
            विनीत: {weddingData.family.hosts[0]}
          </p>
          <p className="text-gold-pale/90">
            {weddingData.family.hosts[1]}
          </p>
          <p className="text-gold-pale/70 text-xs">
            गृह निवास: {weddingData.bride.residence}
          </p>
        </div>

        <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-gold-pale/60 font-devanagari gap-3">
          <p>
            © २०२६ विश्वकर्मा परिवार | समस्त स्वजनों का स्नेह एवं शुभाशीष सादर प्रार्थनीय
          </p>
          <div className="flex items-center gap-1 text-gold-light">
            <Heart className="w-3.5 h-3.5 text-maroon fill-maroon" />
            <span>अतिथि देवो भव</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
