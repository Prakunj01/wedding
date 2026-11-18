import React from 'react';
import { motion } from 'framer-motion';
import { GuestInfo } from '../types';
import { weddingData } from '../config/weddingData';
import { KalashIcon, RoyalDivider, CornerOrnament } from './TraditionalIcons';

export const InvitationLetter: React.FC<{ guest: GuestInfo }> = ({ guest }) => {
  const isDefaultGuest = guest.slug === 'default' || !guest.hindiName;

  return (
    <section id="invitation-letter-section" className="relative py-24 px-4 bg-ivory overflow-hidden">
      {/* Subtle mandala background */}
      <div className="absolute inset-0 mandala-bg opacity-20 pointer-events-none" />

      {/* Gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative bg-[#FFFBF3] border-4 border-gold/40 rounded-3xl p-6 sm:p-12 md:p-16 shadow-[0_0_80px_rgba(212,175,55,0.12),0_8px_32px_rgba(0,0,0,0.4)] text-center"
        >
          {/* Inner ornamental filigree frame */}
          <div className="absolute inset-2 sm:inset-4 border border-gold/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3 sm:inset-6 border border-gold/15 rounded-xl pointer-events-none" />
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          {/* Mangal Kalash Top Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center mb-6"
          >
            <KalashIcon className="w-14 h-14 sm:w-16 sm:h-16 text-burgundy mb-2" />
            <span className="font-royalHindi text-gold-dark text-xl sm:text-2xl font-bold tracking-widest">
              ॥ श्री गणेशाय नमः ॥
            </span>
          </motion.div>

          {/* Invitation Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-burgundy/10 border border-burgundy/30 text-burgundy text-xs sm:text-sm font-medium tracking-wider font-devanagari">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy animate-pulse" />
              शुभ निमंत्रण पत्रिका
            </span>
          </motion.div>

          <RoyalDivider className="my-4 sm:my-6" />

          {/* Salutation / Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-6 sm:mb-8 text-left sm:text-center"
          >
            {isDefaultGuest ? (
              <h3 className="font-royalHindi text-2xl sm:text-3xl text-burgundy font-bold">
                {weddingData.invitationMessage.salutation}
              </h3>
            ) : (
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-gold-dark font-medium tracking-wide font-devanagari">
                  सप्रेम सादर आमंत्रण पत्र
                </p>
                <h3 className="font-royalHindi text-2xl sm:text-3xl text-burgundy font-bold">
                  {guest.title || 'श्रीमान/ श्रीमती'}{' '}
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
          </motion.div>

          {/* Authentic Letter Content from Bride's Family */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="space-y-6 text-base sm:text-lg md:text-xl text-textDark/90 font-devanagari leading-relaxed max-w-2xl mx-auto text-justify sm:text-center"
          >
            {weddingData.invitationMessage.bodyText1 && (
              <p>{weddingData.invitationMessage.bodyText1}</p>
            )}

            {/* Highlighted couple name + venue block */}
            <div className="py-3">
              <div className="inline-block px-6 sm:px-8 py-4 bg-gold/10 border border-gold/40 rounded-xl shadow-[inset_0_0_20px_rgba(212,175,55,0.08)]">
                <span className="font-royalHindi text-xl sm:text-2xl text-burgundy font-bold block mb-1">
                  आयुष्मती अर्पिता संग आयुष्मान रोहित
                </span>
                <span className="text-xs sm:text-sm text-maroon font-medium block">
                  शुभ लग्न: {weddingData.couple.weddingDateFormatted} | {weddingData.venue.name}, {weddingData.venue.city}
                </span>
              </div>
            </div>

            {weddingData.invitationMessage.bodyText2 && (
              <p>{weddingData.invitationMessage.bodyText2}</p>
            )}

            {/* Hosts sign-off */}
            <div className="pt-4 space-y-2">
              <p className="font-royalHindi text-xl sm:text-2xl text-burgundy font-bold">
                {weddingData.invitationMessage.closing}
              </p>
              <div className="text-sm sm:text-base text-burgundy font-semibold font-devanagari space-y-0.5">
                <p>{weddingData.invitationMessage.hosts[0]}</p>
                <p>{weddingData.invitationMessage.hosts[1]}</p>
              </div>
            </div>
          </motion.div>

          <RoyalDivider className="my-6 sm:my-8" />

          {/* Bottom: Venue and Residence Info Split Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 pt-6 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left sm:text-center"
          >
            <div className="space-y-1.5 text-center sm:text-left">
              <p className="text-xs text-gold-dark font-semibold uppercase tracking-widest font-devanagari">
                शुभ विवाह स्थल
              </p>
              <p className="text-sm sm:text-base font-bold text-burgundy font-devanagari">
                {weddingData.venue.name}
              </p>
              <p className="text-xs text-textDark/70 font-devanagari leading-snug">
                {weddingData.venue.address}
              </p>
            </div>

            {/* Vertical gold divider (desktop only) */}
            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

            <div className="space-y-1.5 text-center sm:text-right">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
