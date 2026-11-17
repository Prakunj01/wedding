import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { RoyalDivider } from './TraditionalIcons';
import { MapPin, Navigation, Clock, Phone, Sparkles, Camera, ExternalLink } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const VenueSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  const [venuePhoto, setVenuePhoto] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('arpita_wedding_venue_photo');
      if (saved) setVenuePhoto(saved);
    } catch (e) {
      // ignore
    }
  }, []);

  const handleVenuePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setVenuePhoto(result);
        localStorage.setItem('arpita_wedding_venue_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const targetDate = new Date(weddingData.couple.weddingDateISO).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="venue-section" className="py-20 px-4 bg-ivory text-textDark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-medium tracking-wide mb-3">
            <MapPin className="w-4 h-4 text-gold-dark" />
            <span>पावन संगम स्थल</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-royalHindi font-bold text-burgundy">
            शुभ विवाह स्थल
          </h2>
          <p className="text-sm sm:text-base text-textDark/80 font-devanagari mt-2 max-w-xl mx-auto">
            पाणिग्रहण संस्कार एवं प्रीतिभोज का पावन परिसर
          </p>
          <RoyalDivider className="my-4 sm:my-6" />
        </div>

        {/* 1. Animated Wedding Countdown Timer in Pure Hindi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-r from-burgundy via-maroon to-burgundy rounded-3xl p-6 sm:p-10 border-2 border-gold text-gold-pale shadow-royal mb-16 overflow-hidden text-center"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-gold-light mb-2 font-devanagari">
              शुभ लग्न दिवस की उल्टी गिनती
            </p>
            <h3 className="text-xl sm:text-3xl font-royalHindi font-bold text-white mb-6">
              शुभ विवाह में शेष समय
            </h3>

            {timeLeft.isComplete ? (
              <div className="py-4 text-2xl font-bold font-royalHindi text-gold-light">
                शुभ विवाह संपन्न हो रहा है! नवदंपति को हार्दिक शुभाशीष!
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {/* Days */}
                <div className="bg-black/25 backdrop-blur-xs border border-gold/40 rounded-2xl p-4 sm:p-5 shadow-inner">
                  <span className="text-3xl sm:text-5xl font-bold font-royalHindi text-gold-light block">
                    {timeLeft.days}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gold-pale/80 font-devanagari mt-1 block">
                    दिन
                  </span>
                </div>

                {/* Hours */}
                <div className="bg-black/25 backdrop-blur-xs border border-gold/40 rounded-2xl p-4 sm:p-5 shadow-inner">
                  <span className="text-3xl sm:text-5xl font-bold font-royalHindi text-gold-light block">
                    {timeLeft.hours}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gold-pale/80 font-devanagari mt-1 block">
                    घंटे
                  </span>
                </div>

                {/* Minutes */}
                <div className="bg-black/25 backdrop-blur-xs border border-gold/40 rounded-2xl p-4 sm:p-5 shadow-inner">
                  <span className="text-3xl sm:text-5xl font-bold font-royalHindi text-gold-light block">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gold-pale/80 font-devanagari mt-1 block">
                    मिनट
                  </span>
                </div>

                {/* Seconds */}
                <div className="bg-black/25 backdrop-blur-xs border border-gold/40 rounded-2xl p-4 sm:p-5 shadow-inner">
                  <span className="text-3xl sm:text-5xl font-bold font-royalHindi text-gold-light block">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gold-pale/80 font-devanagari mt-1 block">
                    सेकंड
                  </span>
                </div>
              </div>
            )}

            <p className="text-xs sm:text-sm text-gold-pale/80 font-devanagari mt-6">
              तारीख: 25 नवंबर 2026, बुधवार | चंद्रलोक मैरिज गार्डन, बिजावर (शाम 6:00 बजे से स्वरुचिभोज)
            </p>
          </div>
        </motion.div>

        {/* 2. Venue Details & Map Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Card Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-white/90 backdrop-blur-sm border-2 border-gold/50 rounded-3xl p-6 sm:p-8 shadow-card-royal flex flex-col justify-between"
          >
            <div>
              {/* Venue Photo / Illustration */}
              <div className="relative w-full h-48 sm:h-56 rounded-2xl border-2 border-gold/50 overflow-hidden mb-6 group bg-gradient-to-tr from-burgundy/20 to-maroon/10">
                {venuePhoto ? (
                  <img
                    src={venuePhoto}
                    alt={weddingData.venue.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                    <MapPin className="w-12 h-12 text-burgundy mb-2" />
                    <span className="font-royalHindi text-lg text-burgundy font-bold">
                      {weddingData.venue.name}
                    </span>
                    <span className="text-xs text-textDark/70 font-devanagari mt-1">
                      {weddingData.venue.tagline}
                    </span>
                  </div>
                )}

                {/* Upload Button */}
                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-xs font-devanagari gap-1 p-2 text-center">
                  <Camera className="w-6 h-6 text-gold-light" />
                  <span>विवाह स्थल की तस्वीर बदलें / अपलोड करें</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleVenuePhotoUpload}
                  />
                </label>
              </div>

              <h3 className="font-royalHindi text-2xl sm:text-3xl font-bold text-burgundy">
                {weddingData.venue.name}
              </h3>
              <p className="text-xs sm:text-sm text-gold-dark font-semibold font-devanagari mt-1 mb-4">
                {weddingData.venue.tagline}
              </p>

              <div className="space-y-3 text-xs sm:text-sm font-devanagari text-textDark border-t border-gold/20 pt-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-burgundy block">पता:</span>
                    <span>{weddingData.venue.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-burgundy block">तिथि एवं समय:</span>
                    <span>25 नवंबर 2026, बुधवार (शाम 6:00 बजे से)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-burgundy block">मार्ग निर्देश:</span>
                    <span>{weddingData.venue.travelTips}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-gold/30 flex flex-col sm:flex-row gap-3">
              <a
                href={weddingData.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-gold-pale font-devanagari font-semibold text-xs sm:text-sm shadow-royal hover:shadow-gold-glow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>दिशा-निर्देश प्राप्त करें</span>
              </a>

              <a
                href={weddingData.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-gold/15 hover:bg-gold/25 text-burgundy font-devanagari font-semibold text-xs transition-colors border border-gold/40"
              >
                <span>गूगल मैप्स</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-dark" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-sm border-2 border-gold/50 rounded-3xl p-4 sm:p-6 shadow-card-royal flex flex-col"
          >
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="font-royalHindi text-base sm:text-lg text-burgundy font-bold">
                स्थान का जीवंत मानचित्र (Interactive Map)
              </span>
              <span className="text-[11px] sm:text-xs text-textDark/60 font-devanagari">
                गुलगंज रोड, बिजावर
              </span>
            </div>

            <div className="relative w-full flex-1 min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-gold/40 shadow-inner">
              <iframe
                title="शुभ विवाह स्थल मानचित्र - चंद्रलोक मैरिज गार्डन बिजावर"
                src={weddingData.venue.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
