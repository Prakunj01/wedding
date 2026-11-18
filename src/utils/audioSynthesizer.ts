// Web Audio API Indian Classical Shehnai & Tanpura Harmony Synthesizer
// Supports custom MP3 files (/song.mp3 in public folder) with automatic fallback to synthesized Shehnai.

class IndianWeddingAudioEngine {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private intervalId: any = null;
  private customAudio: HTMLAudioElement | null = null;
  private customAudioUrl: string | null = null;

  constructor() {
    // Lazy initialized on user interaction / auto-open
  }

  public setCustomAudioUrl(url: string) {
    this.customAudioUrl = url;
    if (this.customAudio) {
      this.customAudio.src = url;
    }
  }

  public async start(): Promise<boolean> {
    if (this.isPlaying) return true;

    // 1. First, check if customAudioUrl or '/song.mpeg' or '/song.mp3' can play
    const candidateUrls = [
      this.customAudioUrl,
      '/song.mpeg',
      '/song.mp3',
    ].filter(Boolean) as string[];

    for (const url of candidateUrls) {
      try {
        const canPlay = await this.tryPlayMp3(url);
        if (canPlay) {
          this.isPlaying = true;
          return true;
        }
      } catch (e) {
        // try next candidate
      }
    }

    // 2. Fallback to built-in Web Audio Shehnai synthesizer
    return this.startSyntheticShehnai();
  }

  private tryPlayMp3(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const audio = new Audio(url);
      audio.loop = true;

      let resolved = false;

      const handleSuccess = () => {
        if (!resolved) {
          resolved = true;
          this.customAudio = audio;
          this.isPlaying = true;
          resolve(true);
        }
      };

      const handleFailure = () => {
        if (!resolved) {
          resolved = true;
          resolve(false);
        }
      };

      audio.addEventListener('error', handleFailure, { once: true });

      audio.play().then(() => {
        handleSuccess();
      }).catch((err) => {
        handleFailure();
      });

      // Quick timeout fallback so site doesn't wait if file is not found
      setTimeout(() => {
        if (!resolved) {
          resolved = true;
          resolve(false);
        }
      }, 1500);
    });
  }

  private async startSyntheticShehnai(): Promise<boolean> {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return false;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume();
      }

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.25, this.audioCtx.currentTime + 3);
      this.masterGain.connect(this.audioCtx.destination);

      // Start Tanpura Drone
      this.startTanpuraDrone();

      // Start Shehnai Raag Melody Sequence
      this.startMelodySequence();

      this.isPlaying = true;
      return true;
    } catch (e) {
      console.warn('Synthetic audio error:', e);
      return false;
    }
  }

  private startTanpuraDrone() {
    if (!this.audioCtx || !this.masterGain) return;

    // Frequencies for Indian Drone: D3 (146.8Hz), A3 (220Hz), D4 (293.6Hz)
    const baseFreqs = [146.83, 220.00, 293.66, 146.83 * 0.5];

    baseFreqs.forEach((freq, idx) => {
      if (!this.audioCtx || !this.masterGain) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      // Gentle lowpass filter for warm acoustic feel
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 80, this.audioCtx.currentTime);

      // Gentle amplitude modulation (breathing drone)
      gain.gain.setValueAtTime(0.04 / (idx + 1), this.audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
    });
  }

  private playShehnaiNote(freq: number, duration: number, time: number) {
    if (!this.audioCtx || !this.masterGain) return;

    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const noteGain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    // Vibrato
    const vibrato = this.audioCtx.createOscillator();
    const vibratoGain = this.audioCtx.createGain();
    vibrato.frequency.setValueAtTime(5.5, time);
    vibratoGain.gain.setValueAtTime(freq * 0.015, time);
    vibrato.connect(osc1.frequency);
    vibrato.connect(osc2.frequency);
    vibrato.start(time);
    vibrato.stop(time + duration);

    // Pitch glide (Meend)
    osc1.frequency.setValueAtTime(freq * 0.98, time);
    osc1.frequency.exponentialRampToValueAtTime(freq, time + 0.12);

    osc2.frequency.setValueAtTime(freq * 0.98, time);
    osc2.frequency.exponentialRampToValueAtTime(freq * 1.002, time + 0.12);

    // Warm Shehnai formant filter
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1150, time);
    filter.Q.setValueAtTime(1.8, time);

    // Envelope
    noteGain.gain.setValueAtTime(0.001, time);
    noteGain.gain.exponentialRampToValueAtTime(0.12, time + 0.1);
    noteGain.gain.exponentialRampToValueAtTime(0.08, time + duration * 0.7);
    noteGain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration);
    osc2.stop(time + duration);
  }

  private startMelodySequence() {
    if (!this.audioCtx) return;

    const N = {
      Sa: 293.66,
      Re: 329.63,
      Ga: 369.99,
      Ma: 415.30,
      Pa: 440.00,
      Dha: 493.88,
      Ni: 554.37,
      Sa2: 587.33,
      Re2: 659.25,
      Ga2: 739.99,
    };

    const notesSequence = [
      { f: N.Ni, d: 0.8 },
      { f: N.Re, d: 0.8 },
      { f: N.Ga, d: 1.2 },
      { f: N.Ma, d: 0.8 },
      { f: N.Pa, d: 1.4 },
      { f: N.Dha, d: 0.6 },
      { f: N.Ni, d: 0.8 },
      { f: N.Sa2, d: 2.0 },
      { f: N.Ni, d: 0.7 },
      { f: N.Dha, d: 0.7 },
      { f: N.Pa, d: 1.2 },
      { f: N.Ma, d: 0.7 },
      { f: N.Ga, d: 1.0 },
      { f: N.Re, d: 0.8 },
      { f: N.Sa, d: 2.2 },
      { f: N.Ga, d: 0.6 },
      { f: N.Pa, d: 0.8 },
      { f: N.Sa2, d: 1.5 },
      { f: N.Ni, d: 0.8 },
      { f: N.Dha, d: 0.8 },
      { f: N.Pa, d: 2.0 },
    ];

    let noteIdx = 0;
    const playNext = () => {
      if (!this.isPlaying || !this.audioCtx) return;
      const current = notesSequence[noteIdx % notesSequence.length];
      const now = this.audioCtx.currentTime;
      this.playShehnaiNote(current.f, current.d, now);
      noteIdx++;
      this.intervalId = setTimeout(playNext, current.d * 1000 + 150);
    };

    playNext();
  }

  public stop() {
    if (this.customAudio) {
      this.customAudio.pause();
    }
    if (this.intervalId) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
    if (this.audioCtx && this.masterGain) {
      try {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.5);
        setTimeout(() => {
          if (this.audioCtx && this.audioCtx.state !== 'closed') {
            this.audioCtx.suspend();
          }
        }, 600);
      } catch (e) {
        // ignore
      }
    }
    this.isPlaying = false;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new IndianWeddingAudioEngine();
