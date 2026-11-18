import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { Users, Plus, Trash2, Heart, Edit3, Check } from 'lucide-react';

export const FamilySection: React.FC = () => {
  const [hosts, setHosts] = useState<string[]>(weddingData.family.hosts);
  const [wishers, setWishers] = useState<string[]>(weddingData.family.wishers);
  const [welcomers, setWelcomers] = useState<string[]>(weddingData.family.welcomers);
  const [kids, setKids] = useState<string[]>(weddingData.family.kids);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newMemberName, setNewMemberName] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'hosts' | 'wishers' | 'welcomers' | 'kids'>('wishers');

  // Load customizations from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('arpita_wedding_custom_family');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.hosts) setHosts(parsed.hosts);
        if (parsed.wishers) setWishers(parsed.wishers);
        if (parsed.welcomers) setWelcomers(parsed.welcomers);
        if (parsed.kids) setKids(parsed.kids);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const saveFamilyData = (updated: any) => {
    try {
      localStorage.setItem('arpita_wedding_custom_family', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName.trim()) return;

    let updatedHosts = hosts;
    let updatedWishers = wishers;
    let updatedWelcomers = welcomers;
    let updatedKids = kids;

    if (selectedCategory === 'hosts') {
      updatedHosts = [...hosts, newMemberName.trim()];
      setHosts(updatedHosts);
    } else if (selectedCategory === 'wishers') {
      updatedWishers = [...wishers, newMemberName.trim()];
      setWishers(updatedWishers);
    } else if (selectedCategory === 'welcomers') {
      updatedWelcomers = [...welcomers, newMemberName.trim()];
      setWelcomers(updatedWelcomers);
    } else if (selectedCategory === 'kids') {
      updatedKids = [...kids, newMemberName.trim()];
      setKids(updatedKids);
    }

    saveFamilyData({
      hosts: updatedHosts,
      wishers: updatedWishers,
      welcomers: updatedWelcomers,
      kids: updatedKids,
    });

    setNewMemberName('');
  };

  const handleRemoveMember = (category: 'hosts' | 'wishers' | 'welcomers' | 'kids', index: number) => {
    let updatedHosts = hosts;
    let updatedWishers = wishers;
    let updatedWelcomers = welcomers;
    let updatedKids = kids;

    if (category === 'hosts') {
      updatedHosts = hosts.filter((_, i) => i !== index);
      setHosts(updatedHosts);
    } else if (category === 'wishers') {
      updatedWishers = wishers.filter((_, i) => i !== index);
      setWishers(updatedWishers);
    } else if (category === 'welcomers') {
      updatedWelcomers = welcomers.filter((_, i) => i !== index);
      setWelcomers(updatedWelcomers);
    } else if (category === 'kids') {
      updatedKids = kids.filter((_, i) => i !== index);
      setKids(updatedKids);
    }

    saveFamilyData({
      hosts: updatedHosts,
      wishers: updatedWishers,
      welcomers: updatedWelcomers,
      kids: updatedKids,
    });
  };

  return (
    <section id="family-section" className="py-24 px-4 bg-navy-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-pale text-xs sm:text-sm font-medium tracking-wide mb-4">
            <Users className="w-4 h-4 text-gold" />
            <span className="font-devanagari">स्नेही स्वजन एवं कुटुम्ब</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-royalHindi font-bold text-gold-shimmer">
            सादर आमंत्रित – विश्वकर्मा परिवार
          </h2>
          <p className="text-sm sm:text-base text-gold-pale/70 font-devanagari mt-3 max-w-xl mx-auto">
            वधू पक्ष के समस्त पूज्य स्वजनों, आदरणीय अग्रजों एवं परिजनों का सस्नेह वंदन
          </p>
          <div className="gold-divider max-w-xs mx-auto my-6" />

          {/* Edit Family Button */}
          <div className="flex justify-center mt-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gold/10 hover:bg-gold/20 text-gold-pale text-xs font-semibold font-devanagari transition-colors border border-gold/30"
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>संपादन समाप्त करें</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>परिवार के सदस्यों के नाम जोड़ें / संपादित करें</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Add Member Form (Visible when in editing mode) */}
        {isEditing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-navy-mid border-2 border-gold rounded-2xl p-6 mb-12 shadow-lg max-w-xl mx-auto"
          >
            <h4 className="font-royalHindi text-lg text-gold-light font-bold mb-3 text-center">
              नया नाम जोड़ें
            </h4>
            <form onSubmit={handleAddMember} className="space-y-3 font-devanagari">
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e: any) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gold/40 rounded-xl text-xs bg-navy-dark text-gold-pale font-medium focus:outline-none focus:border-gold"
                >
                  <option value="hosts">विनीत में</option>
                  <option value="wishers">दर्शनाभिलाषी में</option>
                  <option value="welcomers">स्वागतार्थी में</option>
                  <option value="kids">बाल मनुहार में</option>
                </select>

                <input
                  type="text"
                  placeholder="रिश्तेदार / स्वजन का नाम लिखें..."
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gold/40 rounded-xl text-xs sm:text-sm bg-navy-dark text-gold-pale placeholder:text-gold-pale/40 focus:outline-none focus:border-gold"
                />

                <button
                  type="submit"
                  className="px-5 py-2 bg-gold hover:bg-gold-light text-navy-dark rounded-xl text-xs font-bold font-devanagari transition-colors shrink-0"
                >
                  नाम जोड़ें
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. विनीत (Hosts - Main Bride's Parents) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-navy-mid/60 backdrop-blur-xl border border-gold/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5 border-b border-gold/20 pb-3">
                <span className="font-royalHindi text-xl sm:text-2xl font-bold text-gold-light">
                  ॥ विनीत ॥
                </span>
                <span className="text-xs px-3 py-1 bg-burgundy/80 text-gold-light font-semibold rounded-full font-devanagari border border-gold/30">
                  कन्या पक्ष
                </span>
              </div>

              <div className="space-y-3 font-devanagari">
                {hosts.map((host, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-dark/60 border border-gold/15"
                  >
                    <span className="font-semibold text-gold-pale text-sm sm:text-base">
                      {host}
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveMember('hosts', idx)}
                        className="text-rose-wedding hover:text-rose-soft p-1"
                        title="हटाएं"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gold-dark font-devanagari mt-6 pt-3 border-t border-gold/15 text-center">
              निवास: खुरई, जिला–सागर (म.प्र.)
            </p>
          </motion.div>

          {/* 2. दर्शनाभिलाषी (Wishers) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-navy-mid/60 backdrop-blur-xl border border-gold/20 rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5 border-b border-gold/20 pb-3">
                <span className="font-royalHindi text-xl sm:text-2xl font-bold text-gold-light">
                  ॥ दर्शनाभिलाषी ॥
                </span>
                <Heart className="w-4 h-4 text-rose-wedding" />
              </div>

              <div className="space-y-3 font-devanagari">
                {wishers.map((wisher, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-dark/60 border border-gold/15"
                  >
                    <span className="text-gold-pale font-medium text-xs sm:text-sm">
                      {wisher}
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveMember('wishers', idx)}
                        className="text-rose-wedding hover:text-rose-soft p-1"
                        title="हटाएं"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gold-dark font-devanagari mt-6 pt-3 border-t border-gold/15 text-center font-medium">
              आपकी गरिमामयी उपस्थिति ही हमारी अमूल्य पूंजी है
            </p>
          </motion.div>

          {/* 3. स्वागतार्थी एवं बाल मनुहार (Welcomers & Kids) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-navy-mid/60 backdrop-blur-xl border border-gold/20 rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5 border-b border-gold/20 pb-3">
                <span className="font-royalHindi text-xl sm:text-2xl font-bold text-gold-light">
                  ॥ स्वागतार्थी एवं बाल मनुहार ॥
                </span>
              </div>

              {/* Welcomers */}
              <div className="space-y-2 mb-5 font-devanagari">
                <p className="text-xs font-semibold text-gold uppercase tracking-wider">
                  स्वागतार्थी:
                </p>
                {welcomers.map((welcomer, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-navy-dark/60 border border-gold/15"
                  >
                    <span className="text-gold-pale font-medium text-xs sm:text-sm">
                      {welcomer}
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveMember('welcomers', idx)}
                        className="text-rose-wedding hover:text-rose-soft p-1"
                        title="हटाएं"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Kids note (बाल मनुहार) */}
              <div className="space-y-2 pt-4 border-t border-gold/15 font-devanagari">
                <p className="text-xs font-semibold text-rose-wedding uppercase tracking-wider">
                  बाल मनुहार:
                </p>
                {kids.map((kid, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-gold/5 border border-gold/20 text-xs text-gold-pale font-medium italic"
                  >
                    {kid}
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveMember('kids', idx)}
                        className="text-rose-wedding hover:text-rose-soft ml-2"
                        title="हटाएं"
                      >
                        <Trash2 className="w-3 h-3 inline" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gold-dark font-devanagari mt-6 pt-3 border-t border-gold/15 text-center">
              समस्त विश्वकर्मा परिवार, खुरई, जिला–सागर (म.प्र.)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
