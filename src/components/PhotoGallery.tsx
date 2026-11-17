import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { GalleryPhoto } from '../types';
import { RoyalDivider } from './TraditionalIcons';
import { Image, Upload, X, ChevronLeft, ChevronRight, ZoomIn, Camera, Sparkles } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(weddingData.galleryPhotos);
  const [activeCategory, setActiveCategory] = useState<string>('सभी');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newCategory, setNewCategory] = useState<string>('अर्पिता');

  // Load custom photos from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('arpita_wedding_custom_gallery');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPhotos([...parsed, ...weddingData.galleryPhotos]);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const categories = [
    'सभी',
    'अर्पिता',
    'रोहित',
    'युगल',
    'वधू परिवार',
    'विवाह स्थल',
    'हल्दी',
    'मेहंदी',
    'विवाह रस्में',
  ];

  const quickUploadSlots = [
    { label: 'अर्पिता की फोटो', category: 'अर्पिता', defaultTitle: 'आयुष्मती अर्पिता (वधू)' },
    { label: 'रोहित की फोटो', category: 'रोहित', defaultTitle: 'आयुष्मान रोहित (वर)' },
    { label: 'युगल (Couple) फोटो', category: 'युगल', defaultTitle: 'अर्पिता एवं रोहित परिणय' },
    { label: 'वधू परिवार फोटो', category: 'वधू परिवार', defaultTitle: 'वधू का स्नेही परिवार (खुरई)' },
    { label: 'विवाह स्थल फोटो', category: 'विवाह स्थल', defaultTitle: 'चंद्रलोक मैरिज गार्डन (बिजावर)' },
    { label: 'हल्दी फोटो', category: 'हल्दी', defaultTitle: 'शुभ हल्दी उत्सव' },
    { label: 'मेहंदी फोटो', category: 'मेहंदी', defaultTitle: 'रंगोली एवं मेहंदी रस्म' },
  ];

  const filteredPhotos =
    activeCategory === 'सभी'
      ? photos
      : photos.filter((p) => p.categoryHindi === activeCategory);

  const saveAndAddPhoto = (photoObj: GalleryPhoto) => {
    const updatedList = [photoObj, ...photos];
    setPhotos(updatedList);

    try {
      const saved = localStorage.getItem('arpita_wedding_custom_gallery');
      const customArr = saved ? JSON.parse(saved) : [];
      customArr.unshift(photoObj);
      localStorage.setItem('arpita_wedding_custom_gallery', JSON.stringify(customArr));
    } catch (e) {
      // ignore
    }
  };

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newPhotoObj: GalleryPhoto = {
          id: `custom-photo-${Date.now()}`,
          titleHindi: newTitle.trim() || 'शुभ विवाह स्मृति',
          categoryHindi: newCategory,
          url: reader.result as string,
          aspect: 'portrait',
        };

        saveAndAddPhoto(newPhotoObj);
        setShowUploadModal(false);
        setNewTitle('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQuickSlotUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    slot: (typeof quickUploadSlots)[0]
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newPhotoObj: GalleryPhoto = {
          id: `slot-photo-${Date.now()}`,
          titleHindi: slot.defaultTitle,
          categoryHindi: slot.category,
          url: reader.result as string,
          aspect: 'portrait',
        };

        saveAndAddPhoto(newPhotoObj);
        setActiveCategory(slot.category);
      };
      reader.readAsDataURL(file);
    }
  };

  const openLightbox = (idx: number) => {
    setSelectedPhotoIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  return (
    <section id="gallery-section" className="py-20 px-4 bg-ivory text-textDark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-burgundy text-xs sm:text-sm font-medium tracking-wide mb-3">
            <Image className="w-4 h-4 text-gold-dark" />
            <span>पावन संस्मरण</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-royalHindi font-bold text-burgundy">
            सुखद स्मृतियाँ (छायाचित्र)
          </h2>
          <p className="text-sm sm:text-base text-textDark/80 font-devanagari mt-2 max-w-xl mx-auto">
            अर्पिता एवं रोहित के मंगल परिणय के अविस्मरणीय एवं आनंदमयी पल
          </p>
          <RoyalDivider className="my-4 sm:my-6" />

          {/* Action: Add Photo Button */}
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowUploadModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-dark text-gold-pale text-xs sm:text-sm font-semibold font-devanagari transition-all shadow-md"
            >
              <Upload className="w-4 h-4" />
              <span>नया छायाचित्र जोड़ें (कस्टम फोटो अपलोड)</span>
            </button>
          </div>
        </div>

        {/* Dedicated Quick Upload Slots for Required Photo Sections */}
        <div className="bg-white/80 backdrop-blur-xs border border-gold/40 rounded-2xl p-4 sm:p-5 mb-10 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-burgundy font-royalHindi font-bold text-sm sm:text-base">
            <Camera className="w-4 h-4 text-gold-dark" />
            <span>विशिष्ट छायाचित्र अपलोड एवं प्रबंधन क्षेत्र:</span>
          </div>
          <p className="text-xs text-textDark/70 font-devanagari mb-4">
            नीचे दिए गए किसी भी वर्ग पर क्लिक करके तुरंत अपनी इच्छित फोटो अपलोड करें (अनुपलब्ध होने पर सुरुचिपूर्ण प्लेसहोल्डर प्रदर्शित रहेगा):
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 font-devanagari">
            {quickUploadSlots.map((slot, idx) => (
              <label
                key={idx}
                className="flex items-center justify-between gap-1.5 px-3 py-2 bg-ivory-soft hover:bg-gold/15 text-burgundy border border-gold/30 rounded-xl cursor-pointer text-xs transition-colors group shadow-2xs"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <Upload className="w-3.5 h-3.5 text-gold-dark shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold truncate">{slot.label}</span>
                </div>
                <span className="text-[10px] text-maroon font-medium uppercase shrink-0">अपलोड</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleQuickSlotUpload(e, slot)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-devanagari font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-burgundy text-gold-light border-gold shadow-md scale-105'
                  : 'bg-white/80 text-textDark/80 border-gold/40 hover:bg-gold/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border-2 border-gold/40 shadow-card-royal hover:shadow-gold-glow transition-all duration-300 bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden cursor-pointer" onClick={() => openLightbox(index)}>
                <img
                  src={photo.url}
                  alt={photo.titleHindi}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay with Category & Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-devanagari text-gold-light uppercase tracking-wider mb-1 font-semibold">
                    {photo.categoryHindi}
                  </span>
                  <h4 className="font-royalHindi text-base sm:text-lg font-bold">
                    {photo.titleHindi}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gold-pale/80 font-devanagari mt-2">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>बड़ा देखने के लिए क्लिक करें</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Photo Display */}
              <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
                <img
                  src={filteredPhotos[selectedPhotoIndex].url}
                  alt={filteredPhotos[selectedPhotoIndex].titleHindi}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl border-2 border-gold/60 shadow-2xl"
                />
                <div className="text-center mt-4">
                  <h4 className="font-royalHindi text-xl text-gold-light font-bold">
                    {filteredPhotos[selectedPhotoIndex].titleHindi}
                  </h4>
                  <p className="text-xs text-white/70 font-devanagari mt-1">
                    {filteredPhotos[selectedPhotoIndex].categoryHindi} ({selectedPhotoIndex + 1} / {filteredPhotos.length})
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextPhoto}
                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-ivory border-2 border-gold rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setShowUploadModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full text-textDark/60 hover:text-textDark"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-royalHindi text-2xl text-burgundy font-bold text-center mb-1">
                नया छायाचित्र जोड़ें
              </h3>
              <p className="text-xs text-center text-textDark/70 font-devanagari mb-6">
                अपनी पसंदीदा स्मृति को विवाह गैलरी में प्रदर्शित करें
              </p>

              <div className="space-y-4 font-devanagari">
                <div>
                  <label className="text-xs font-semibold text-burgundy block mb-1">
                    छायाचित्र का शीर्षक:
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. पावन जयमाला, हल्दी उत्सव..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gold/60 rounded-xl text-xs sm:text-sm bg-white focus:outline-none focus:border-burgundy"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-burgundy block mb-1">
                    श्रेणी चुनें:
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gold/60 rounded-xl text-xs sm:text-sm bg-white text-burgundy font-medium"
                  >
                    <option value="अर्पिता">अर्पिता (वधू)</option>
                    <option value="रोहित">रोहित (वर)</option>
                    <option value="युगल">युगल (Couple)</option>
                    <option value="वधू परिवार">वधू परिवार (Bride's Family)</option>
                    <option value="विवाह स्थल">विवाह स्थल (Wedding Venue)</option>
                    <option value="हल्दी">हल्दी उत्सव (Haldi)</option>
                    <option value="मेहंदी">मेहंदी रस्म (Mehndi)</option>
                    <option value="विवाह रस्में">विवाह रस्में</option>
                  </select>
                </div>

                <div className="border-2 border-dashed border-gold/60 rounded-xl p-6 text-center bg-white/60">
                  <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-xs text-textDark/80 mb-3">
                    अपने उपकरण से फोटो चुनें (JPG / PNG)
                  </p>
                  <label className="inline-block px-5 py-2.5 bg-burgundy hover:bg-burgundy-dark text-gold font-semibold rounded-full cursor-pointer text-xs transition-all shadow-md">
                    फोटो फाइल चुनें
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleCustomPhotoUpload}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
