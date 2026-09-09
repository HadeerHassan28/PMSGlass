import { Project } from '@/types';

export const specializedProjects: Project[] = [
  {
    id: 'p4',
    slug: 'panoramic-balcony-glass-railings',
    title: {
      ar: 'دربزينات زجاجية مصفحة معلقة للشرفات والسلالم',
      en: 'Structural Laminated Frameless Glass Balustrades'
    },
    subtitle: {
      ar: 'نظام تثبيت أرضي مدفون بدون فريم مع زجاج مصفح 17.5 مم',
      en: 'Embedded U-Channel concealed base with 17.52mm SGP laminated safety glass'
    },
    category: 'railings',
    client: {
      ar: 'شركة إعمار السعودية',
      en: 'Emaar Saudi Development'
    },
    location: {
      ar: 'حي النخيل، الرياض',
      en: 'Al Nakheel District, Riyadh'
    },
    year: '2024',
    area: '620 طولي',
    glassType: {
      ar: 'زجاج مصفح مقسى 8+8mm مع طبقة SGP Structural Interlayer',
      en: '17.52mm (8+8mm) Tempered Laminated Glass with SGP structural interlayer'
    },
    hardwareType: {
      ar: 'مجرى ألومنيوم مدفون بالأرضية مع هاندريل إستانلس ستيل رفيع',
      en: 'Concealed Heavy Aluminum Base Shoe with Micro SS Top Rail'
    },
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: {
      ar: 'تنفيذ دربزينات زجاجية للشرفات والسطح في مشروع مجمع مكاتب وفلل سكنية. يعتمد النظام على زجاج مصفح عالي الأمان مثبت من الأسفل في قطاع مدفون داخل الخرسانة ليظهر الزجاج فقط بشكل ساحر.',
      en: 'Seamless glass balustrades installed along roof decks, stairs, and balconies. Utilizing structural SGP laminated glass anchored into floor channels to produce a floating transparent architectural finish.'
    },
    scopeOfWork: {
      ar: [
        'زرع قطاعات الألومنيوم الهيكلية في الخرسانة قبل التبليد',
        'تركيب الزجاج المصفح وااختبار قوة تحمل الصدمات الجانبية',
        'تزويد الزجاج بهاندريل إستانلس رفيع جداً لحماية الأطراف العلوي'
      ],
      en: [
        'Anchoring structural U-channel bases into concrete slabs',
        'Dropping 17.52mm SGP glass panels and performing impact load testing',
        'Finishing with top edge protective micro stainless-steel cap rail'
      ]
    },
    specs: [
      {
        label: { ar: 'قوة تحمل الضغط الجانبي', en: 'Side Load Strength' },
        value: { ar: '1.8 kN/m', en: '1.8 kN/m' }
      },
      {
        label: { ar: 'سمك الزجاج الإجمالي', en: 'Total Glass Thickness' },
        value: { ar: '17.52 mm SGP', en: '17.52 mm SGP' }
      }
    ],
    featured: true
  },
  {
    id: 'p6',
    slug: 'luxury-hotel-led-custom-mirrors',
    title: {
      ar: 'مرايا ليد ليزر عملاقة لفندق 5 نجوم',
      en: 'Bespoke Laser-Cut LED Mirrors for 5-Star Hotel'
    },
    subtitle: {
      ar: 'مرايا بلجيكية 6 مم مع إضاءة دافئة مضادة للضباب وبصمة لمس',
      en: '6mm Belgian silvered mirrors with integrated warm LED & anti-fog sensors'
    },
    category: 'mirrors',
    client: {
      ar: 'فندق وأجنحة الريتز الفاخرة',
      en: 'The Ritz Luxury Suites & Hotel'
    },
    location: {
      ar: 'الخبر، المنطقة الشرقية',
      en: 'Khobar, Eastern Province'
    },
    year: '2025',
    area: '180 قطعة مرايا',
    glassType: {
      ar: 'مرآة بلجيكية سيلفر 6 مم خالية من النحاس والرصاص بشطف ليزر 3 سم',
      en: '6mm Copper-Free Belgian Silver Mirror with 3cm Beveled Laser Edges'
    },
    hardwareType: {
      ar: 'إطار خلفي ألومنيوم مخفي مع شريط LED IP65 وسمارت تشير',
      en: 'Concealed Aluminum Subframe with IP65 Waterproof Touch Control Strip'
    },
    mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: {
      ar: 'تصنيع وتركيب 180 مرآة ديكورية فاخرة لأجنحة ومغاسل وردهات فندق 5 نجوم بالخبر، تم تزويدها بخاصية تسخين إزالة الضباب وإضاءة LED محيطية ذات درجات ألوان دافئة.',
      en: 'Custom crafting of 180 bespoke backlit LED mirrors for luxury hotel suites and lobby areas. Outfitted with automatic anti-steam demister pads and touch-capacitive dimming controls.'
    },
    scopeOfWork: {
      ar: [
        'قص وسنفرة المرايا بالليزر بفتحات داخلية مخفية للإلكتريسيال',
        'تثبيت شرائح التسخين الحرارية ضد بخار الماء خلف المرآة',
        'تركيب محولات كهربائية مخفية ومفاتيح لمس كريستالية'
      ],
      en: [
        'Laser cutting and beveling of custom mirror shapes',
        'Behind-glass integration of anti-fog heating elements',
        'Electrical subframe assembly with touch sensor switches'
      ]
    },
    specs: [
      {
        label: { ar: 'درجة حرارة اللون LED', en: 'LED Color Temp' },
        value: { ar: '3000K Warm Gold', en: '3000K Warm Gold' }
      },
      {
        label: { ar: 'عمر شريط الإضاءة', en: 'LED Lifespan' },
        value: { ar: '50,000 Hours', en: '50,000 Hours' }
      }
    ],
    featured: false
  }
];
