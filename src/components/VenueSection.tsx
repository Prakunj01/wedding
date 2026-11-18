import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { MapPin, Navigation, Clock, Camera, ExternalLink } from 'lucide-react';
import { RoyalDivider } from './TraditionalIcons';

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

  const countdownUnits = [
    { value: timeLeft.days, label: 'दिन' },
    { value: timeLeft.hours, label: 'घंटे' },
    { value: timeLeft.minutes, label: 'मिनट' },
    { value: timeLeft.seconds, label: 'सेकंड' },
  ];

  return (
    <section id="venue-section" className="py-20 sm:py-24 px-3 sm:px-6 bg-gradient-to-b from-[#FFFDF8] via-[#FFF8EC] to-[#F8EED8] relative overflow-hidden">
      {/* Decorative top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-semibold tracking-wide mb-3">
            <MapPin className="w-4 h-4 text-burgundy" />
            <span className="font-devanagari">पावन संगम स्थल</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-royalHindi font-bold text-burgundy tracking-wide">
            शुभ विवाह स्थल
          </h2>
          <p className="text-sm sm:text-base text-textDark/80 font-devanagari mt-2 max-w-xl mx-auto">
            पाणिग्रहण संस्कार एवं प्रीतिभोज का पावन परिसर
          </p>
          <RoyalDivider className="my-4 sm:my-6" />
        </motion.div>

        {/* 1. Royal Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/90 backdrop-blur-md border-2 border-gold/50 rounded-3xl p-5 sm:p-8 md:p-10 mb-12 sm:mb-16 shadow-[0_10px_35px_rgba(100,28,50,0.08)] text-center"
        >
          {/* Filigree frame */}
          <div className="absolute inset-2 border border-gold/25 rounded-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-gold-dark mb-1 font-devanagari">
              शुभ लग्न दिवस की उल्टी गिनती
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-royalHindi font-bold text-burgundy mb-6 sm:mb-8">
              शुभ विवाह में शेष समय
            </h3>

            {timeLeft.isComplete ? (
              <div className="py-4 text-xl sm:text-2xl font-bold font-royalHindi text-burgundy">
                शुभ विवाह संपन्न हो रहा है! नवदंपति को हार्दिक शुभाशीष!
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-2xl mx-auto">
                {countdownUnits.map((unit, i) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-gradient-to-br from-burgundy via-maroon to-burgundy border-2 border-gold/60 rounded-2xl p-3 sm:p-5 shadow-royal text-center"
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-royalHindi text-gold-light block">
                      {unit.value}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gold-pale font-devanagari mt-1 block">
                      {unit.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            <p className="text-xs sm:text-sm text-textDark/75 font-devanagari mt-6 sm:mt-8 font-medium">
              शुभ तिथि: २५ नवंबर २०२६, बुधवार | चंद्रलोक मैरिज गार्डन, बिजावर (स्वरुचिभोज सायं ६:०० बजे से)
            </p>
          </div>
        </motion.div>

        {/* 2. Venue Details & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Venue Card Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-white/90 backdrop-blur-md border-2 border-gold/50 rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-card-royal"
          >
            <div>
              {/* Venue Photo Container */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl border-2 border-gold/40 overflow-hidden mb-5 group bg-ivory-soft">
                {venuePhoto ? (
                  <img
                    src={venuePhoto}
                    alt={weddingData.venue.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-ivory via-ivory-soft to-ivory">
                    <MapPin className="w-10 h-10 text-burgundy mb-2" />
                    <span className="font-royalHindi text-lg sm:text-xl text-burgundy font-bold">
                      {weddingData.venue.name}
                    </span>
                    <span className="text-xs text-textDark/70 font-devanagari mt-1">
                      {weddingData.venue.tagline}
                    </span>
                  </div>
                )}

                {/* Upload Button */}
                <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-gold-pale text-xs font-devanagari gap-1.5 p-3 text-center">
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
              <p className="text-xs sm:text-sm text-gold-dark font-semibold font-devanagari mt-0.5 mb-4">
                {weddingData.venue.tagline}
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm font-devanagari text-textDark border-t border-gold/25 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-burgundy block">पता:</span>
                    <span className="text-textDark/85">{weddingData.venue.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-burgundy block">तिथि एवं समय:</span>
                    <span className="text-textDark/85">२५ नवंबर २०२६, बुधवार (सायं ६:०० बजे से)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-burgundy block">मार्ग निर्देश:</span>
                    <span className="text-textDark/85">{weddingData.venue.travelTips}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-gold/25 flex flex-col sm:flex-row gap-2.5">
              <a
                href={weddingData.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-burgundy via-maroon to-burgundy text-gold-light font-devanagari font-bold text-xs sm:text-sm shadow-md hover:shadow-royal transition-all"
              >
                <Navigation className="w-4 h-4 text-gold" />
                <span>दिशा-निर्देश प्राप्त करें</span>
              </a>

              <a
                href={weddingData.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gold/15 hover:bg-gold/25 text-burgundy font-devanagari font-semibold text-xs transition-colors border border-gold/40"
              >
                <span>गूगल मैप्स</span>
                <ExternalLink className="w-3.5 h-3.5 text-burgundy" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-md border-2 border-gold/50 rounded-3xl p-4 sm:p-5 flex flex-col shadow-card-royal"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="font-royalHindi text-base sm:text-lg text-burgundy font-bold">
                स्थान का जीवंत मानचित्र (Interactive Map)
              </span>
              <span className="text-[11px] sm:text-xs text-textDark/60 font-devanagari">
                गुलगंज रोड, बिजावर
              </span>
            </div>

            <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-gold/30 shadow-inner">
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
