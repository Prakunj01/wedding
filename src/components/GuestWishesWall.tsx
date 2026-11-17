import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WeddingWish, GuestInfo } from '../types';
import { RoyalDivider } from './TraditionalIcons';
import { Heart, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GuestWishesWallProps {
  guest: GuestInfo;
}

export const GuestWishesWall: React.FC<GuestWishesWallProps> = ({ guest }) => {
  const [name, setName] = useState<string>(
    guest.slug !== 'default' ? guest.hindiName : ''
  );
  const [city, setCity] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [rsvpStatus, setRsvpStatus] = useState<string>('उपस्थित होंगे');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Initial heartwarming blessings
  const defaultWishes: WeddingWish[] = [
    {
      id: 'wish-1',
      guestName: 'श्रीमती एवं श्री काशीराम विश्वकर्मा',
      city: 'खुरई (सागर)',
      message: 'हमारी लाडली पौत्री अर्पिता एवं रोहित को जीवन के इस नए अध्याय की हार्दिक शुभकामनाएं एवं शुभाशीष। सदा सुखी एवं समृद्ध रहो!',
      timestamp: '२२ नवंबर २०२६',
    },
    {
      id: 'wish-2',
      guestName: 'प्राकुंज विश्वकर्मा',
      city: 'खुरई',
      message: 'दीदी और जीजू को मंगल परिणय की ढेर सारी बधाइयां! आप दोनों की जोड़ी सदा सलामत रहे।',
      timestamp: '२३ नवंबर २०२६',
    },
    {
      id: 'wish-3',
      guestName: 'अमित कुमार एवं परिवार',
      city: 'भोपाल',
      message: 'वर-वधू को पावन परिणय सूत्र में बंधने पर हार्दिक मंगलकामनाएं। ईश्वर आपका दांपत्य जीवन खुशियों से परिपूर्ण रखे।',
      timestamp: '२३ नवंबर २०२६',
    },
  ];

  const [wishes, setWishes] = useState<WeddingWish[]>(defaultWishes);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('arpita_wedding_wishes');
      if (saved) {
        const parsed = JSON.parse(saved);
        setWishes([...parsed, ...defaultWishes]);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: WeddingWish = {
      id: `wish-${Date.now()}`,
      guestName: name.trim(),
      city: city.trim() || 'शुभचिंतक',
      message: message.trim(),
      timestamp: 'आज',
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);

    try {
      const saved = localStorage.getItem('arpita_wedding_wishes');
      const customArr = saved ? JSON.parse(saved) : [];
      customArr.unshift(newWish);
      localStorage.setItem('arpita_wedding_wishes', JSON.stringify(customArr));
    } catch (e) {
      // ignore
    }

    setIsSubmitted(true);
    setMessage('');

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C6A15B', '#842B43', '#641C32'],
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const quickBlessings = [
    'सदा सुखी रहो, अखंड सौभाग्य का आशीर्वाद!',
    'वर-वधू को परिणय की अशेष मंगलकामनाएं!',
    'अर्पिता एवं रोहित की जोड़ी सदा मुस्कुराती रहे!',
    'नवदंपति के सुखद एवं मंगलमय भविष्य की प्रार्थना!',
  ];

  return (
    <section id="wishes-section" className="py-20 px-4 bg-ivory-soft text-textDark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-medium tracking-wide mb-3">
            <Heart className="w-4 h-4 text-maroon" />
            <span>स्नेह एवं आशीर्वचन</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-royalHindi font-bold text-burgundy">
            शुभकामनाएं एवं आशीर्वाद
          </h2>
          <p className="text-sm sm:text-base text-textDark/80 font-devanagari mt-2 max-w-xl mx-auto">
            नवदंपति अर्पिता एवं रोहित को अपने पावन विचार एवं मंगल आशीर्वचन भेजें
          </p>
          <RoyalDivider className="my-4 sm:my-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Wishes Form & RSVP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-white/95 backdrop-blur-sm border-2 border-gold/60 rounded-3xl p-6 sm:p-8 shadow-card-royal"
          >
            <h3 className="font-royalHindi text-2xl font-bold text-burgundy mb-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-dark" />
              <span>आशीर्वाद संदेश लिखें</span>
            </h3>
            <p className="text-xs text-textDark/70 font-devanagari mb-6">
              आपके शुभ विचार नवदंपति के लिए अनमोल उपहार हैं
            </p>

            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-green-50 border border-green-300 text-green-800 text-xs sm:text-sm font-devanagari mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>आपका पावन आशीर्वाद संदेश सफलता से दर्ज कर लिया गया है। धन्यवाद!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-devanagari">
              <div>
                <label className="text-xs font-semibold text-burgundy block mb-1">
                  आपका शुभ नाम:
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. राहुल शर्मा, अमित जी..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gold/50 rounded-xl text-xs sm:text-sm bg-ivory/50 focus:outline-none focus:border-burgundy"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-burgundy block mb-1">
                  आपका शहर / स्थान:
                </label>
                <input
                  type="text"
                  placeholder="उदा. सागर, खुरई, भोपाल, छतरपुर..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gold/50 rounded-xl text-xs sm:text-sm bg-ivory/50 focus:outline-none focus:border-burgundy"
                />
              </div>

              {/* Quick Blessing Buttons */}
              <div>
                <label className="text-[11px] font-semibold text-textDark/70 block mb-1">
                  त्वरित आशीर्वाद चुनें:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {quickBlessings.map((qb, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setMessage(qb)}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-gold/15 hover:bg-gold/25 text-burgundy border border-gold/30 transition-colors"
                    >
                      {qb}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-burgundy block mb-1">
                  आपका संदेश / शुभाशीष:
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="वर-वधू के लिए अपनी मंगलकामनाएं यहाँ लिखें..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gold/50 rounded-xl text-xs sm:text-sm bg-ivory/50 focus:outline-none focus:border-burgundy"
                />
              </div>

              {/* Quick RSVP Confirmation */}
              <div className="pt-3 border-t border-gold/20">
                <label className="text-xs font-semibold text-burgundy block mb-1">
                  विवाह में उपस्थिति सूचना (RSVP):
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setRsvpStatus('उपस्थित होंगे')}
                    className={`py-2 px-3 rounded-xl border font-medium ${
                      rsvpStatus === 'उपस्थित होंगे'
                        ? 'bg-burgundy text-gold-light border-gold font-semibold'
                        : 'bg-ivory text-textDark border-gold/40'
                    }`}
                  >
                    सपरिवार उपस्थित होंगे ✓
                  </button>
                  <button
                    type="button"
                    onClick={() => setRsvpStatus('शुभकामनाएं प्रेषित')}
                    className={`py-2 px-3 rounded-xl border font-medium ${
                      rsvpStatus === 'शुभकामनाएं प्रेषित'
                        ? 'bg-burgundy text-gold-light border-gold font-semibold'
                        : 'bg-ivory text-textDark border-gold/40'
                    }`}
                  >
                    शुभकामनाएं प्रेषित ✉
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-burgundy via-maroon to-burgundy text-gold-pale font-devanagari font-bold text-xs sm:text-sm rounded-full shadow-royal hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 border border-gold"
              >
                <Send className="w-4 h-4 text-gold-light" />
                <span>आशीर्वाद संदेश प्रेषित करें</span>
              </button>
            </form>
          </motion.div>

          {/* Wishes Display Wall */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="font-royalHindi text-xl font-bold text-burgundy">
                आशीर्वाद पट्टिका ({wishes.length})
              </span>
              <span className="text-xs text-textDark/60 font-devanagari">
                अतिथियों द्वारा प्रेषित पावन वचन
              </span>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
              {wishes.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/90 backdrop-blur-sm border-2 border-gold/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow font-devanagari relative group"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-gold/20 pb-2 mb-2">
                    <div>
                      <h4 className="font-bold text-burgundy text-sm sm:text-base">
                        {item.guestName}
                      </h4>
                      <p className="text-[11px] text-textDark/60">
                        स्थान: {item.city}
                      </p>
                    </div>
                    <span className="text-[10px] text-gold-dark font-medium px-2 py-0.5 rounded-full bg-gold/10 border border-gold/20">
                      {item.timestamp}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-textDark/90 italic leading-relaxed">
                    “{item.message}”
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
