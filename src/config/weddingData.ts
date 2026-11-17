import { WeddingEvent, FamilySectionData, GalleryPhoto } from '../types';

export const weddingData = {
  // मुख्य शीर्षक एवं शुभ मुहूर्त
  couple: {
    brideName: 'अर्पिता',
    brideFullName: 'आयुष्मती अर्पिता',
    groomName: 'रोहित',
    groomFullName: 'आयुष्मान रोहित',
    title: 'अर्पिता संग रोहित',
    subTitle: 'मंगल परिणय',
    weddingDateHindi: '२५ नवंबर २०२६',
    weddingDateFormatted: '25 नवंबर 2026',
    weddingDateISO: '2026-11-25T18:00:00+05:30',
    dayHindi: 'बुधवार',
    shlokaGanesha: '॥ श्री गणेशाय नमः ॥',
    shlokaMain: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    shlokaBlessing: 'मांगल्यं तन्तुनानेन लोकजीवनहेतुना।\nकण्ठे बध्नामि सुभगे सञ्जीव शरदः शतम्॥',
    welcomeHeading: 'शुभ विवाह आमंत्रण',
    tagline: 'स्नेह, परंपरा एवं आत्मीयता का पावन संगम',
  },

  // वधू पक्ष विवरण (केवल कन्या पक्ष की ओर से)
  bride: {
    name: 'आयुष्मती अर्पिता',
    shortName: 'अर्पिता',
    relationTitle: 'सुपुत्री',
    father: 'श्री मोहनलाल विश्वकर्मा',
    mother: 'श्रीमती मोहनी',
    parentsLine: 'श्री मोहनलाल विश्वकर्मा एवं श्रीमती मोहनी की सुपुत्री',
    grandfather: 'श्री काशीराम विश्वकर्मा',
    grandmother: 'स्वर्गीय श्रीमती यशोदाबाई',
    grandparentsLine: 'श्री काशीराम विश्वकर्मा एवं स्वर्गीय श्रीमती यशोदाबाई की सुपौत्री',
    residence: 'खुरई, जिला–सागर (म.प्र.)',
    nature: 'संस्कारवान, स्नेहमयी एवं परिवार की लाडली सुपुत्री',
    defaultPhoto: 'bride-default',
  },

  // वर पक्ष परिचय (परिचय मात्र)
  groom: {
    name: 'आयुष्मान रोहित',
    shortName: 'रोहित',
    relationTitle: 'सुपुत्र',
    father: 'स्वर्गीय श्री शंकरलाल विश्वकर्मा',
    mother: 'श्रीमती रजाबाई',
    parentsLine: 'स्वर्गीय श्री शंकरलाल विश्वकर्मा एवं श्रीमती रजाबाई के सुपुत्र',
    grandfather: 'स्वर्गीय श्री श्यामलाल विश्वकर्मा',
    grandparentsLine: 'स्वर्गीय श्री श्यामलाल विश्वकर्मा के सुपौत्र',
    residence: 'बिजावर, जिला–छतरपुर (म.प्र.)',
    nature: 'विनीत, सुशिक्षित एवं कर्तव्यपरायण कुलदीपक',
    defaultPhoto: 'groom-default',
  },

  // मुख्य आमंत्रण संदेश (वधू पक्ष)
  invitationMessage: {
    shloka: '॥ श्री गणेशाय नमः ॥',
    heading: '॥ शुभ निमंत्रण पत्र ॥',
    salutation: 'परम स्नेही स्वजन,',
    bodyText1: 'ईश्वर की असीम कृपा एवं कुलदेवी-कुलदेवताओं के आशीर्वाद से हमारे परिवार की लाडली सुपुत्री आयुष्मती अर्पिता का शुभ विवाह आयुष्मान रोहित के साथ संपन्न होने जा रहा है।',
    bodyText2: 'इस शुभ एवं मांगलिक अवसर पर आप सपरिवार पधारकर वर-वधू को अपना स्नेह, आशीर्वाद एवं शुभकामनाएँ प्रदान करें तथा हमारे परिवार की खुशियों में सहभागी बनें।',
    closing: 'सादर आमंत्रित।',
    hosts: [
      'श्रीमती मोहनी एवं श्री मोहनलाल विश्वकर्मा',
      'श्री काशीराम विश्वकर्मा एवं समस्त विश्वकर्मा परिवार',
    ],
    residence: 'खुरई, जिला–सागर (म.प्र.)',
    sideNote: '— विश्वकर्मा परिवार, खुरई, जिला–सागर (म.प्र.)',
  },

  // मांगलिक कार्यक्रम रूपरेखा (केवल वधू पक्ष के कार्यक्रम)
  events: [
    {
      id: 'event-1',
      title: 'गणेश पूजन, तेल एवं मंडप',
      subTitle: 'शुभ मांगलिक कार्यों का श्रीगणेश एवं पारिवारिक मंगल आयोजन',
      dateHindi: '२३ नवंबर २०२६',
      dateStandard: '23 नवंबर 2026',
      dayHindi: 'सोमवार',
      venueHindi: 'निज निवास, खुरई',
      descriptionHindi: 'शुभ मांगलिक कार्यों का श्रीगणेश एवं पारिवारिक मंगल आयोजन।',
      iconType: 'ganesh',
    },
    {
      id: 'event-2',
      title: 'हल्दी एवं मेहंदी',
      subTitle: 'हल्दी की शुभ रस्म एवं मेहंदी का उल्लास',
      dateHindi: '२४ नवंबर २०२६',
      dateStandard: '24 नवंबर 2026',
      dayHindi: 'मंगलवार',
      venueHindi: 'निज निवास, खुरई',
      descriptionHindi: 'हल्दी की शुभ रस्म एवं मेहंदी की खुशियों भरा आयोजन।',
      iconType: 'mandap',
    },
    {
      id: 'event-3',
      title: 'कन्या सहित विवाह स्थल के लिए प्रस्थान',
      subTitle: 'परिवार सहित विवाह समारोह के लिए प्रस्थान',
      dateHindi: '२५ नवंबर २०२६',
      dateStandard: '25 नवंबर 2026',
      dayHindi: 'बुधवार',
      timeHindi: 'सुबह 9:00 बजे',
      venueHindi: 'निज निवास, खुरई',
      descriptionHindi: 'परिवार सहित शुभ विवाह समारोह के लिए प्रस्थान।',
      iconType: 'doli',
    },
    {
      id: 'event-4',
      title: 'स्वरुचिभोज',
      subTitle: 'स्नेहिल स्वरुचिभोज में आप सभी सादर आमंत्रित हैं',
      dateHindi: '२५ नवंबर २०२६',
      dateStandard: '25 नवंबर 2026',
      dayHindi: 'बुधवार',
      timeHindi: 'शाम 6:00 बजे से',
      venueHindi: 'चंद्रलोक मैरिज गार्डन, बिजावर',
      descriptionHindi: 'स्नेहिल स्वरुचिभोज में आप सभी सादर आमंत्रित हैं।',
      iconType: 'bhoj',
    },
  ] as WeddingEvent[],

  // शुभ विवाह स्थल (Venue Information)
  venue: {
    title: 'विवाह स्थल',
    name: 'चंद्रलोक मैरिज गार्डन',
    tagline: 'गुलगंज रोड, बिजावर, जिला–छतरपुर (म.प्र.)',
    address: 'गुलगंज रोड, बिजावर, जिला–छतरपुर (म.प्र.)',
    city: 'बिजावर',
    district: 'छतरपुर',
    state: 'मध्य प्रदेश',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chandralok+Marriage+Garden+Gulganj+Road+Bijawar+Chhatarpur+Madhya+Pradesh',
    embedMapUrl: 'https://maps.google.com/maps?q=Chandralok+Marriage+Garden+Gulganj+Road+Bijawar+Chhatarpur+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed',
    travelTips: 'खुरई (सागर) एवं छतरपुर दोनों स्थानों से बस एवं निजी वाहनों की सुलभ व्यवस्था उपलब्ध है।',
  },

  // परिवार एवं स्वागत (Family Section - वधू पक्ष)
  family: {
    hostTitle: 'विनीत',
    hosts: [
      'श्रीमती मोहनी एवं श्री मोहनलाल विश्वकर्मा',
      'श्री काशीराम विश्वकर्मा एवं समस्त विश्वकर्मा परिवार',
    ],
    residence: 'खुरई, जिला–सागर (म.प्र.)',
    grandParentsTitle: 'पूज्य संरक्षक एवं आशीष',
    grandParents: [
      'श्री काशीराम विश्वकर्मा (दादाजी)',
      'स्वर्गीय श्रीमती यशोदाबाई (दादीजी)',
    ],
    wishingTitle: 'दर्शनाभिलाषी',
    wishers: [
      'समस्त विश्वकर्मा परिवार (खुरई)',
      'समस्त स्वजन, बंधु-बांधव एवं इष्ट-मित्र',
    ],
    welcomeTitle: 'स्वागतार्थी',
    welcomers: [
      'श्री मोहनलाल विश्वकर्मा एवं भ्रातृगण',
      'समस्त कुटुम्बीजन एवं सगे-संबंधी',
    ],
    kidsTitle: 'बाल मनुहार',
    kids: [
      '“मीठी-मीठी खुशियों में, हमारी बुआ की शादी में जरूर-जरूर आना!”',
      '— चि. प्राकुंज, कु. अनन्या एवं समस्त नन्हें बच्चे',
    ],
  } as FamilySectionData,

  // सुखद स्मृतियाँ (Photo Gallery)
  galleryPhotos: [
    {
      id: 'photo-1',
      titleHindi: 'वर-वधू परिणय स्मृतियाँ',
      categoryHindi: 'युगल',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait',
    },
    {
      id: 'photo-2',
      titleHindi: 'आयुष्मती अर्पिता (लाडली वधू)',
      categoryHindi: 'अर्पिता',
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      aspect: 'landscape',
    },
    {
      id: 'photo-3',
      titleHindi: 'आयुष्मान रोहित (सुयोग्य वर)',
      categoryHindi: 'रोहित',
      url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait',
    },
    {
      id: 'photo-4',
      titleHindi: 'शुभ हल्दी उत्सव',
      categoryHindi: 'हल्दी',
      url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=80',
      aspect: 'square',
    },
    {
      id: 'photo-5',
      titleHindi: 'रंगोली एवं मेहंदी रस्म',
      categoryHindi: 'मेहंदी',
      url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
      aspect: 'landscape',
    },
    {
      id: 'photo-6',
      titleHindi: 'वधू का स्नेही परिवार (खुरई)',
      categoryHindi: 'वधू परिवार',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      aspect: 'landscape',
    },
    {
      id: 'photo-7',
      titleHindi: 'चंद्रलोक मैरिज गार्डन (विवाह स्थल)',
      categoryHindi: 'विवाह स्थल',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait',
    },
    {
      id: 'photo-8',
      titleHindi: 'पावन जयमाला एवं सप्तपदी',
      categoryHindi: 'विवाह रस्में',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait',
    },
  ] as GalleryPhoto[],
};
