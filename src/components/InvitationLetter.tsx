import React from 'react';
import { motion } from 'framer-motion';
import { GuestInfo } from '../types';
import { weddingData } from '../config/weddingData';
import { KalashIcon, RoyalDivider, CornerOrnament } from './TraditionalIcons';

export const InvitationLetter: React.FC<{ guest: GuestInfo }> = ({ guest }) => {
  const isDefaultGuest = guest.slug === 'default' || !guest.hindiName;

  return (
    <section id="invitation-letter-section" className="relative py-20 px-4 bg-ivory-soft overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFBF3] border-4 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-12 md:p-16 shadow-card-royal text-center"
        >
          {/* Inner ornamental filigree frame */}
          <div className="absolute inset-2 sm:inset-4 border border-gold/40 rounded-2xl pointer-events-none" />
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          {/* Mangal Kalash Top Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <KalashIcon className="w-14 h-14 sm:w-16 sm:h-16 text-burgundy mb-2" />
            <span className="font-royalHindi text-gold-dark text-xl sm:text-2xl font-bold tracking-widest">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <span className="text-xs sm:text-sm text-maroon font-devanagari mt-1 font-semibold">
              — वधू पक्ष की ओर से सप्रेम निमंत्रण —
            </span>
          </div>

          <RoyalDivider className="my-4 sm:my-6" />

          {/* Salutation / Address */}
          <div className="mb-6 sm:mb-8 text-left sm:text-center">
            {isDefaultGuest ? (
              <h3 className="font-royalHindi text-2xl sm:text-3xl text-burgundy font-bold">
                {weddingData.invitationMessage.salutation}
              </h3>
            ) : (
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-gold-dark font-medium tracking-wide">
                  सप्रेम सादर आमंत्रण पत्र
                </p>
                <h3 className="font-royalHindi text-2xl sm:text-3xl text-burgundy font-bold">
                  {guest.title || 'प्रिय'}{' '}
                  <span className="text-gold-dark font-extrabold px-1">
                    {guest.hindiName}
                  </span>{' '}
                  {guest.honorific || 'जी'}{' '}
                  {guest.familyNote && (
                    <span className="text-maroon text-xl font-normal">({guest.familyNote})</span>
                  )}
                  ,
                </h3>
              </div>
            )}
          </div>

          {/* Authentic Letter Content from Bride's Family */}
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-textDark/90 font-devanagari leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            <p>
              {weddingData.invitationMessage.bodyText1}
            </p>

            <div className="py-2">
              <div className="inline-block px-6 py-3 bg-gold/10 border-y-2 border-gold/40 rounded-xl">
                <span className="font-royalHindi text-xl sm:text-2xl text-burgundy font-bold block">
                  आयुष्मती अर्पिता संग आयुष्मान रोहित
                </span>
                <span className="text-xs sm:text-sm text-maroon font-medium">
                  शुभ लग्न: {weddingData.couple.weddingDateFormatted} | {weddingData.venue.name}, {weddingData.venue.city}
                </span>
              </div>
            </div>

            <p>
              {weddingData.invitationMessage.bodyText2}
            </p>

            <div className="pt-2 space-y-2">
              <p className="font-royalHindi text-xl sm:text-2xl text-burgundy font-bold">
                {weddingData.invitationMessage.closing}
              </p>
              <div className="text-sm sm:text-base text-burgundy font-semibold font-devanagari space-y-0.5">
                <p>{weddingData.invitationMessage.hosts[0]}</p>
                <p>{weddingData.invitationMessage.hosts[1]}</p>
              </div>
            </div>
          </div>

          <RoyalDivider className="my-6 sm:my-8" />

          {/* Invitation Sign-off from Bride's Family ONLY */}
          <div className="mt-8 pt-4 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left sm:text-center">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs text-gold-dark font-semibold uppercase tracking-widest font-devanagari">
                शुभ विवाह स्थल
              </p>
              <p className="text-sm sm:text-base font-bold text-burgundy font-devanagari">
                {weddingData.venue.name}
              </p>
              <p className="text-xs text-textDark/70 font-devanagari">
                {weddingData.venue.address}
              </p>
            </div>

            <div className="space-y-1 text-center sm:text-right">
              <p className="text-xs text-gold-dark font-semibold uppercase tracking-widest font-devanagari">
                विनीत:
              </p>
              <p className="text-sm sm:text-base font-bold text-burgundy font-devanagari">
                {weddingData.family.hosts[0]}
              </p>
              <p className="text-xs text-textDark/80 font-devanagari">
                {weddingData.family.hosts[1]}
              </p>
              <p className="text-xs text-maroon font-medium font-devanagari">
                निवास: {weddingData.bride.residence}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
