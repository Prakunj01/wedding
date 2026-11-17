export interface GuestInfo {
  slug: string;
  hindiName: string;
  title?: string; // e.g. "प्रिय", "आदरणीय", "मान्यवर", "स्नेही"
  honorific?: string; // e.g. "जी"
  familyNote?: string; // e.g. "सपरिवार", "सप्रेम सपरिवार"
  isCustom?: boolean;
}

export interface WeddingEvent {
  id: string;
  title: string;
  subTitle?: string;
  dateHindi: string; // e.g. "२३ नवंबर २०२६"
  dateStandard: string; // "23 नवंबर 2026"
  dayHindi: string; // e.g. "सोमवार"
  timeHindi?: string; // e.g. "सुबह 9:00 बजे"
  venueHindi: string;
  descriptionHindi: string;
  iconType: 'ganesh' | 'mandap' | 'barat' | 'bhoj' | 'doli';
}

export interface FamilySectionData {
  hostTitle: string; // "विनीत"
  hosts: string[];
  grandParentsTitle: string;
  grandParents: string[];
  wishingTitle: string; // "दर्शनाभिलाषी"
  wishers: string[];
  welcomeTitle: string; // "स्वागतार्थी"
  welcomers: string[];
  kidsTitle: string; // "बाल मनुहार"
  kids: string[];
}

export interface GalleryPhoto {
  id: string;
  titleHindi: string;
  categoryHindi: string;
  url: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface WeddingWish {
  id: string;
  guestName: string;
  city: string;
  message: string;
  timestamp: string;
}
