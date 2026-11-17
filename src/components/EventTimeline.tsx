import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { WeddingEvent } from '../types';
import {
  GaneshaIcon,
  MandapIcon,
  KalashIcon,
  ShehnaiIcon,
  DoliIcon,
  RoyalDivider,
} from './TraditionalIcons';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const EventTimeline: React.FC = () => {
  const getEventIcon = (type: WeddingEvent['iconType']) => {
    switch (type) {
      case 'ganesh':
        return <GaneshaIcon className="w-8 h-8 text-gold-light" size={32} />;
      case 'mandap':
        return <MandapIcon className="w-8 h-8 text-gold-light" size={32} />;
      case 'barat':
        return <ShehnaiIcon className="w-8 h-8 text-gold-light" size={32} />;
      case 'bhoj':
        return <KalashIcon className="w-8 h-8 text-gold-light" size={32} />;
      case 'doli':
        return <DoliIcon className="w-8 h-8 text-gold-light" size={32} />;
      default:
        return <KalashIcon className="w-8 h-8 text-gold-light" size={32} />;
    }
  };

  const createGoogleCalendarLink = (event: WeddingEvent) => {
    // Generate Google Calendar Link
    const title = encodeURIComponent(`अर्पिता संग रोहित - ${event.title}`);
    const details = encodeURIComponent(
      `${event.descriptionHindi}\n\nस्थल: ${event.venueHindi}\nवधू पक्ष: श्री मोहनलाल विश्वकर्मा (खुरई)`
    );
    const location = encodeURIComponent(event.venueHindi);

    // Format dates (rough approximation for 2026)
    let startIso = '20261125T140000Z';
    let endIso = '20261125T230000Z';
    if (event.id === 'event-1') {
      startIso = '20261123T040000Z';
      endIso = '20261123T120000Z';
    } else if (event.id === 'event-2') {
      startIso = '20261124T040000Z';
      endIso = '20261124T160000Z';
    } else if (event.id === 'event-3') {
      startIso = '20261125T033000Z';
      endIso = '20261125T070000Z';
    } else if (event.id === 'event-4') {
      startIso = '20261125T123000Z';
      endIso = '20261125T183000Z';
    }

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startIso}/${endIso}`;
  };

  return (
    <section id="events-section" className="py-20 px-4 bg-ivory-soft relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-medium tracking-wide mb-3">
            <Calendar className="w-4 h-4 text-gold-dark" />
            <span>पावन उत्सव रूपरेखा</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-royalHindi font-bold text-burgundy">
            मांगलिक कार्यक्रम
          </h2>
          <p className="text-sm sm:text-base text-textDark/80 font-devanagari mt-2 max-w-xl mx-auto">
            उत्सव के पावन क्षण, संस्कार और आत्मीय मिलन की संपूर्ण समय-सारिणी
          </p>
          <RoyalDivider className="my-4 sm:my-6" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Gold Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-1 bg-gradient-to-b from-gold/20 via-gold to-gold/20 rounded-full" />
          <div className="md:hidden absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-gold/20 via-gold to-gold/20 rounded-full" />

          <div className="space-y-12">
            {weddingData.events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Floating Icon Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-burgundy via-maroon to-burgundy border-2 border-gold shadow-royal">
                    {getEventIcon(event.iconType)}
                  </div>

                  {/* Empty Spacer Column for Desktop alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Event Content Card */}
                  <div
                    className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="relative bg-white/90 backdrop-blur-sm border-2 border-gold/50 rounded-3xl p-6 sm:p-7 shadow-card-royal hover:shadow-gold-glow transition-all duration-300 group">
                      {/* Event Date Ribbon */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold/30 pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-burgundy text-gold-light text-xs font-semibold rounded-full font-devanagari shadow-xs">
                            {event.dateStandard}
                          </span>
                          <span className="text-xs font-bold text-maroon font-devanagari">
                            ({event.dayHindi})
                          </span>
                        </div>

                        {event.timeHindi ? (
                          <div className="flex items-center gap-1.5 text-textDark/70 text-xs font-medium font-devanagari">
                            <Clock className="w-3.5 h-3.5 text-gold-dark" />
                            <span>{event.timeHindi}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-gold-dark text-xs font-medium font-devanagari">
                            <span>पावन मांगलिक प्रसंग</span>
                          </div>
                        )}
                      </div>

                      {/* Event Title & Subtitle */}
                      <h3 className="font-royalHindi text-xl sm:text-2xl font-bold text-burgundy group-hover:text-maroon transition-colors">
                        {event.title}
                      </h3>
                      {event.subTitle && (
                        <p className="text-xs sm:text-sm font-semibold text-gold-dark font-devanagari mt-0.5 mb-2">
                          {event.subTitle}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-textDark/85 font-devanagari leading-relaxed mb-4">
                        {event.descriptionHindi}
                      </p>

                      {/* Location & Calendar Button */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-gold/20">
                        <div className="flex items-center gap-1.5 text-xs text-textDark/80 font-devanagari">
                          <MapPin className="w-3.5 h-3.5 text-burgundy shrink-0" />
                          <span className="font-medium">{event.venueHindi}</span>
                        </div>

                        <a
                          href={createGoogleCalendarLink(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/15 hover:bg-gold/25 text-burgundy text-xs font-medium font-devanagari transition-colors border border-gold/40"
                        >
                          <Calendar className="w-3 h-3 text-gold-dark" />
                          <span>कैलेंडर में जोड़ें</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
