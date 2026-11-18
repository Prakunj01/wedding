import { GuestInfo } from '../types';

// Pre-configured guest list with authentic Hindi names and personalized honorifics
export const predefinedGuests: Record<string, GuestInfo> = {
  'rahul-sharma': {
    slug: 'rahul-sharma',
    hindiName: 'राहुल शर्मा',
    title: 'प्रिय',
    honorific: 'जी',
    familyNote: 'सपरिवार',
  },
  'amit-family': {
    slug: 'amit-family',
    hindiName: 'अमित जी एवं समस्त परिवार',
    title: 'आदरणीय',
    honorific: '',
    familyNote: 'सपरिवार',
  },
  'prakunj-vishwakarma': {
    slug: 'prakunj-vishwakarma',
    hindiName: 'प्राकुंज विश्वकर्मा',
    title: 'प्रिय भ्राता',
    honorific: 'जी',
    familyNote: 'सपरिवार',
  },
  'mahesh-gupta': {
    slug: 'mahesh-gupta',
    hindiName: 'महेश गुप्ता',
    title: 'आदरणीय',
    honorific: 'जी',
    familyNote: 'सपरिवार',
  },
  'sunil-verma': {
    slug: 'sunil-verma',
    hindiName: 'सुनील वर्मा',
    title: 'स्नेही',
    honorific: 'जी',
    familyNote: 'सपरिवार',
  },
  'ramesh-vishwakarma': {
    slug: 'ramesh-vishwakarma',
    hindiName: 'रमेश विश्वकर्मा',
    title: 'पूज्य चाचाजी',
    honorific: 'जी',
    familyNote: 'सपरिवार',
  },
  'rajesh-tiwari': {
    slug: 'rajesh-tiwari',
    hindiName: 'राजेश तिवारी',
    title: 'आदरणीय',
    honorific: 'जी',
    familyNote: 'सपरिवार',
  },
  'manoj-sharma': {
    slug: 'manoj-sharma',
    hindiName: 'मनोज शर्मा',
    title: 'प्रिय मित्र',
    honorific: 'जी',
    familyNote: 'सपरिवार',
  },
};

// Common transliterations dictionary for intuitive English to Hindi conversion
const nameDictionary: Record<string, string> = {
  'rahul': 'राहुल',
  'sharma': 'शर्मा',
  'amit': 'अमित',
  'family': 'सपरिवार',
  'prakunj': 'प्राकुंज',
  'vishwakarma': 'विश्वकर्मा',
  'mahesh': 'महेश',
  'gupta': 'गुप्ता',
  'sunil': 'सुनील',
  'verma': 'वर्मा',
  'ramesh': 'रमेश',
  'rajesh': 'राजेश',
  'tiwari': 'तिवारी',
  'manoj': 'मनोज',
  'rohit': 'रोहित',
  'arpita': 'अर्पिता',
  'deepak': 'दीपक',
  'suresh': 'सुरेश',
  'dinesh': 'दिनेश',
  'sanjay': 'संजय',
  'vijay': 'विजय',
  'ajay': 'अजय',
  'anil': 'अनिल',
  'alok': 'आलोक',
  'vikas': 'विकास',
  'vikram': 'विक्रम',
  'ashok': 'अशोक',
  'neeraj': 'नीरज',
  'pankaj': 'पंकज',
  'pradeep': 'प्रदीप',
  'sachin': 'सचिन',
  'roshan': 'रोशन',
  'sahu': 'साहू',
  'patel': 'पटेल',
  'yadav': 'यादव',
  'jain': 'जैन',
  'singh': 'सिंह',
  'kumar': 'कुमार',
};

/**
 * Resolves guest info from a URL slug or search parameter.
 * If known in predefined list, returns exact config.
 * Otherwise, smartly formats the slug into a respectful Hindi greeting.
 */
export function getGuestFromSlug(rawSlug?: string | null): GuestInfo {
  if (!rawSlug || rawSlug.trim() === '' || rawSlug === 'default') {
    return {
      slug: 'default',
      hindiName: 'अतिथि देवो भव',
      title: 'परम आदरणीय',
      honorific: '',
      familyNote: 'सपरिवार',
    };
  }

  const cleanSlug = decodeURIComponent(rawSlug).trim().toLowerCase();

  // 1. Direct match in predefined list
  if (predefinedGuests[cleanSlug]) {
    return predefinedGuests[cleanSlug];
  }

  // 2. Check localStorage for dynamically generated guest links
  try {
    const saved = localStorage.getItem('arpita_wedding_custom_guests');
    if (saved) {
      const customList: Record<string, GuestInfo> = JSON.parse(saved);
      if (customList[cleanSlug]) {
        return customList[cleanSlug];
      }
    }
  } catch (e) {
    // Ignore storage errors
  }

  // 3. Smart slug parser
  // Split by dashes, underscores or spaces
  const parts = cleanSlug.split(/[-_+\s]+/);
  const hindiParts = parts.map(part => {
    const lower = part.toLowerCase();
    if (nameDictionary[lower]) {
      return nameDictionary[lower];
    }
    // If already in Hindi or unknown, capitalize English word
    return part.charAt(0).toUpperCase() + part.slice(1);
  });

  const parsedHindiName = hindiParts.join(' ');

  return {
    slug: cleanSlug,
    hindiName: parsedHindiName,
    title: 'श्रीमान/ श्रीमती',
    honorific: 'जी',
    familyNote: 'सपरिवार',
    isCustom: true,
  };
}

/**
 * Save a newly generated guest link so it persists
 */
export function saveCustomGuest(guest: GuestInfo): void {
  try {
    const saved = localStorage.getItem('arpita_wedding_custom_guests');
    const customList: Record<string, GuestInfo> = saved ? JSON.parse(saved) : {};
    customList[guest.slug] = guest;
    localStorage.setItem('arpita_wedding_custom_guests', JSON.stringify(customList));
  } catch (e) {
    console.error('Error saving guest:', e);
  }
}
