import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Upload } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynthesizer';

interface AudioPlayerProps {
  autoPlayTriggered?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoPlayTriggered }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [customTrackName, setCustomTrackName] = useState<string>('शहनाई मंगल धुन (पारंपरिक)');

  useEffect(() => {
    if (autoPlayTriggered && !isPlaying) {
      weddingAudio.start().then((started) => {
        if (started) {
          setIsPlaying(true);
        }
      });
    }
  }, [autoPlayTriggered]);

  const toggleMusic = async () => {
    if (isPlaying) {
      weddingAudio.stop();
      setIsPlaying(false);
    } else {
      const success = await weddingAudio.start();
      if (success) {
        setIsPlaying(true);
      }
    }
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      weddingAudio.setCustomAudioUrl(url);
      setCustomTrackName(file.name.replace(/\.[^/.]+$/, ''));
      setShowUploadModal(false);
      weddingAudio.start().then(() => setIsPlaying(true));
    }
  };

  return (
    <>
      {/* Floating Audio Control Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={toggleMusic}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-royal border border-gold/40 backdrop-blur-md transition-all duration-300 font-medium text-xs sm:text-sm ${
            isPlaying
              ? 'bg-burgundy text-gold-light border-gold shadow-gold-glow animate-pulse-slow'
              : 'bg-ivory/95 text-burgundy hover:bg-gold/10'
          }`}
          title={isPlaying ? 'संगीत बंद करें' : 'संगीत चालू करें'}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-gold animate-bounce" />
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-gold animate-pulse" />
                <span className="w-0.5 h-3 bg-gold animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-gold animate-pulse delay-150" />
              </div>
              <span className="font-devanagari">संगीत चालू</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-burgundy" />
              <span className="font-devanagari">संगीत चालू करें</span>
            </>
          )}
        </button>

        {/* Change / Upload Custom Music Button */}
        <button
          onClick={() => setShowUploadModal(true)}
          className="p-2.5 rounded-full bg-ivory/90 hover:bg-gold/20 text-burgundy border border-gold/40 shadow-md transition-colors"
          title="अपनी पसंद का विवाह संगीत जोड़ें"
        >
          <Music className="w-4 h-4 text-burgundy" />
        </button>
      </div>

      {/* Upload Music Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-ivory border-2 border-gold rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <h3 className="font-royalHindi text-xl text-burgundy font-bold text-center mb-2">
              पारंपरिक विवाह संगीत
            </h3>
            <p className="text-center text-xs text-textDark/80 mb-4 font-devanagari">
              वर्तमान धुन: <span className="font-semibold text-burgundy">{customTrackName}</span>
            </p>

            <div className="border-2 border-dashed border-gold/60 rounded-xl p-6 text-center bg-white/50 mb-4 hover:border-gold transition-colors">
              <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
              <p className="text-sm font-medium text-burgundy mb-1">
                अपनी पसंदीदा शहनाई या मंगल धुन चुनें (MP3 / WAV)
              </p>
              <p className="text-xs text-textDark/60 mb-3">
                आप अपने डिवाइस से कोई भी ऑडियो फाइल चुन सकते हैं
              </p>
              <label className="inline-block px-4 py-2 bg-burgundy hover:bg-burgundy-dark text-gold font-medium rounded-full cursor-pointer text-xs transition-all shadow-md">
                ऑडियो फाइल चुनें
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={handleAudioUpload}
                />
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 bg-textDark/10 hover:bg-textDark/20 text-textDark text-xs rounded-lg font-devanagari"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
