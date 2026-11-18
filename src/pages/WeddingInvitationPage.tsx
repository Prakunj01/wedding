import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getGuestFromSlug } from '../config/guestList';
import { GuestInfo } from '../types';
import { Navigation } from '../components/Navigation';
import { DoorOpeningHero } from '../components/DoorOpeningHero';
import { EventTimeline } from '../components/EventTimeline';
import { VenueSection } from '../components/VenueSection';
import { Footer } from '../components/Footer';
import { AudioPlayer } from '../components/AudioPlayer';
import { RosePetalsOverlay } from '../components/RosePetalsOverlay';
import { LinkGeneratorModal } from '../components/LinkGeneratorModal';

export const WeddingInvitationPage: React.FC = () => {
  const { guestSlug } = useParams<{ guestSlug?: string }>();
  const [searchParams] = useSearchParams();

  // Determine slug from URL param or query param
  const slug = guestSlug || searchParams.get('guest') || searchParams.get('name') || null;
  const guest: GuestInfo = getGuestFromSlug(slug);

  const [isInvitationOpen, setIsInvitationOpen] = useState<boolean>(false);
  const [petalsActive, setPetalsActive] = useState<boolean>(true);
  const [autoPlayTriggered, setAutoPlayTriggered] = useState<boolean>(false);

  // If user scrolls down manually, mark invitation as opened
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && !isInvitationOpen) {
        setIsInvitationOpen(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInvitationOpen]);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    setAutoPlayTriggered(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-textDark selection:bg-gold selection:text-burgundy relative font-devanagari">
      {/* Rose Petals & Golden Dust Particles Overlay */}
      <RosePetalsOverlay active={petalsActive} />

      {/* Top Royal Sticky Navigation */}
      <Navigation
        petalsActive={petalsActive}
        onTogglePetals={() => setPetalsActive(!petalsActive)}
      />

      {/* Background Shehnai Audio Player */}
      <AudioPlayer autoPlayTriggered={autoPlayTriggered} />

      {/* Page 1: Immersive Royal Preloader & Hero Card */}
      <div id="door-hero-section">
        <DoorOpeningHero
          guest={guest}
          onOpenInvitation={handleOpenInvitation}
          isOpen={isInvitationOpen}
        />
      </div>

      {/* Page 2: Wedding Events & Vertical Timeline */}
      <EventTimeline />

      {/* Page 5: Wedding Venue & Animated Countdown */}
      <VenueSection />

      {/* Royal Footer */}
      <Footer />

      {/* Floating Personalized Guest Link Generator Tool */}
      <LinkGeneratorModal />
    </div>
  );
};
