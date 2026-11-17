import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { predefinedGuests, saveCustomGuest } from '../config/guestList';
import { GuestInfo } from '../types';
import { Link2, Copy, Check, Share2, Sparkles, X, UserPlus, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LinkGeneratorModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>('');
  const [title, setTitle] = useState<string>('प्रिय');
  const [familyNote, setFamilyNote] = useState<string>('सपरिवार');
  const [copied, setCopied] = useState<boolean>(false);
  const [generatedGuest, setGeneratedGuest] = useState<GuestInfo | null>(null);

  // Helper to convert Hindi or English name into clean URL slug
  const createSlug = (nameStr: string) => {
    return nameStr
      .trim()
      .toLowerCase()
      .replace(/[^\w\s\u0900-\u097F-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const slug = createSlug(guestName);
    const guestObj: GuestInfo = {
      slug,
      hindiName: guestName.trim(),
      title,
      honorific: 'जी',
      familyNote,
      isCustom: true,
    };

    saveCustomGuest(guestObj);
    setGeneratedGuest(guestObj);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C6A15B', '#842B43', '#641C32'],
    });
  };

  const currentUrlOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '';
  
  const generatedLink = generatedGuest
    ? `${currentUrlOrigin}/invite/${generatedGuest.slug}`
    : '';

  const copyToClipboard = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const shareOnWhatsApp = () => {
    if (!generatedGuest || !generatedLink) return;

    const message = `॥ श्री गणेशाय नमः ॥\n\n${generatedGuest.title} ${generatedGuest.hindiName} जी ${generatedGuest.familyNote ? `(${generatedGuest.familyNote})` : ''},\n\nअत्यंत हर्ष के साथ आपको सूचित कर रहे हैं कि हमारे परिवार की लाडली सुपुत्री आयुष्मती अर्पिता का शुभ विवाह आयुष्मान रोहित के साथ 25 नवंबर 2026 को संपन्न होने जा रहा है।\n\nइस पावन मांगलिक अवसर पर आपका सपरिवार आगमन हमारे लिए गौरव एवं आनंद का विषय होगा।\n\nकृपया नीचे दिए गए लिंक पर क्लिक करके अपना विशेष वैयक्तिक आमंत्रण पत्र खोलें:\n${generatedLink}\n\nविनीत:\nश्रीमती मोहनी एवं श्री मोहनलाल विश्वकर्मा\nश्री काशीराम विश्वकर्मा एवं समस्त विश्वकर्मा परिवार\nखुरई, जिला–सागर (म.प्र.)`;

    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-burgundy via-maroon to-burgundy text-gold-light border border-gold shadow-royal hover:shadow-gold-glow transition-all duration-300 font-devanagari font-bold text-xs sm:text-sm hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-gold-light animate-spin" style={{ animationDuration: '6s' }} />
          <span>वैयक्तिक लिंक बनाएं</span>
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-ivory border-2 border-gold rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-1 rounded-full text-textDark/60 hover:text-textDark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="font-royalHindi text-gold-dark text-xs sm:text-sm tracking-widest block font-bold mb-1">
                  ॥ अतिथि सत्कार ॥
                </span>
                <h3 className="font-royalHindi text-2xl sm:text-3xl text-burgundy font-bold">
                  वैयक्तिक आमंत्रण लिंक जनरेटर
                </h3>
                <p className="text-xs text-textDark/80 font-devanagari mt-1">
                  किसी भी रिश्तेदार या मित्र के नाम का विशेष आमंत्रण लिंक बनाकर व्हाट्सएप पर भेजें
                </p>
              </div>

              {/* Sample Predefined Quick Selector */}
              <div className="mb-6 bg-white/70 rounded-2xl p-4 border border-gold/40 font-devanagari">
                <p className="text-[11px] font-bold text-maroon uppercase tracking-wider mb-2">
                  तैयार उदाहरण लिंक (क्लिक करके देखें):
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {Object.values(predefinedGuests).slice(0, 5).map((pg) => (
                    <a
                      key={pg.slug}
                      href={`/invite/${pg.slug}`}
                      className="text-xs px-3 py-1 rounded-full bg-gold/15 hover:bg-gold/30 text-burgundy border border-gold/40 transition-colors"
                    >
                      {pg.hindiName}
                    </a>
                  ))}
                </div>
              </div>

              {/* Custom Generator Form */}
              <form onSubmit={handleGenerate} className="space-y-4 font-devanagari">
                <div>
                  <label className="text-xs font-semibold text-burgundy block mb-1">
                    अतिथि / रिश्तेदार का नाम:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. राहुल शर्मा, अमित गुप्ता, महेश जी..."
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gold/60 rounded-xl text-xs sm:text-sm bg-white focus:outline-none focus:border-burgundy"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-burgundy block mb-1">
                      संबोधन (शीर्षक):
                    </label>
                    <select
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gold/60 rounded-xl text-xs bg-white text-burgundy font-medium"
                    >
                      <option value="प्रिय">प्रिय</option>
                      <option value="आदरणीय">आदरणीय</option>
                      <option value="परम पूज्य">परम पूज्य</option>
                      <option value="मान्यवर">मान्यवर</option>
                      <option value="स्नेही">स्नेही</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-burgundy block mb-1">
                      परिवार संदर्भ:
                    </label>
                    <select
                      value={familyNote}
                      onChange={(e) => setFamilyNote(e.target.value)}
                      className="w-full px-3 py-2 border border-gold/60 rounded-xl text-xs bg-white text-burgundy font-medium"
                    >
                      <option value="सपरिवार">सपरिवार</option>
                      <option value="सप्रेम सपरिवार">सप्रेम सपरिवार</option>
                      <option value="मित्र">मित्र</option>
                      <option value="">केवल व्यक्तिगत</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-burgundy hover:bg-burgundy-dark text-gold-light font-bold text-xs sm:text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 border border-gold"
                >
                  <UserPlus className="w-4 h-4 text-gold-light" />
                  <span>वैयक्तिक लिंक तैयार करें</span>
                </button>
              </form>

              {/* Generated Result Box */}
              {generatedGuest && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-2xl bg-white border-2 border-gold shadow-md font-devanagari space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-gold/30 pb-2">
                    <span className="text-xs font-bold text-green-700">
                      ✓ वैयक्तिक लिंक सफलतापूर्वक तैयार!
                    </span>
                    <span className="text-[11px] text-textDark/60">
                      स्लग: /{generatedGuest.slug}
                    </span>
                  </div>

                  <p className="text-xs text-burgundy font-medium">
                    अतिथि संबोधन: <span className="font-bold underline">{generatedGuest.title} {generatedGuest.hindiName} जी {generatedGuest.familyNote ? `(${generatedGuest.familyNote})` : ''}</span>
                  </p>

                  <div className="p-2.5 rounded-lg bg-ivory text-xs break-all text-textDark border border-gold/30 font-mono">
                    {generatedLink}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="py-2.5 px-3 rounded-xl bg-gold/15 hover:bg-gold/25 text-burgundy font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-gold/40"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span>कॉपी हो गया!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-gold-dark" />
                          <span>लिंक कॉपी करें</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={shareOnWhatsApp}
                      className="py-2.5 px-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>व्हाट्सएप पर भेजें</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
