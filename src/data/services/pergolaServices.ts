import { Service } from '@/types';

export const pergolaServices: Service[] = [
  {
    id: 'pergolas',
    title: {
      ar: 'برجولات زجاجية',
      en: 'Glass Pergolas',
    },
    subtitle: {
      ar: 'برجولات وتغطيات زجاجية معمارية للحدائق والتراسات والأسطح والمداخل',
      en: 'Architectural glass pergolas, canopies & skylights for outdoor spaces',
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ برجولات زجاجية فاخرة بهياكل ألومنيوم أو حديد معالج وزجاج سيكوريت مصفح يوفر حماية تامة من الأمطار مع إضاءة طبيعية.',
      en: 'Design and engineering of luxury glass pergolas and canopies built with structural aluminum or steel and laminated tempered safety glass.',
    },
    fullDescription: {
      ar: 'نوفر حلول البرجولات والمظلات الزجاجية العصرية للمساحات الخارجية والتراسات والحدائق والروف ومداخل الفلل. نعتمد على زجاج السيكوريت المصفح المقاوم للصدمات والحرارة والرياح، مع خيارات الزجاج الملون أو الشفاف العاكس للأشعة فوق البنفسجية لضمان جلسات خارجية مريحة طوال العام.',
      en: 'PMS GLASS engineers modern outdoor glass pergolas, patio canopies, and architectural skylights for villas, restaurants, and rooftop lounges. Using impact-resistant tempered laminated glass that blocks UV radiation and withstands harsh weather while providing natural daylight.',
    },
    iconName: 'Sun',
    mainImage: '/images/services/pergolas.svg',
    gallery: [
      '/images/services/pergolas.svg',
      '/images/projects/villas-2.svg',
      '/images/projects/malls-1.svg',
    ],
    features: {
      ar: [
        'زجاج سيكوريت مصفح ضد الكسر والصدمات والأحمال العالية',
        'عزل تام لمياه الأمطار بنظام تصريف متكامل ومخفي',
        'حماية من الأشعة فوق البنفسجية UV وخفض درجات الحرارة',
        'هياكل متينة من الألومنيوم المقاوم للصدأ أو الحديد المعالج',
      ],
      en: [
        'Heavy-duty laminated tempered glass for overhead impact safety',
        'Complete rainwater sealing with integrated drainage gutters',
        'UV radiation filtration with solar heat reduction coatings',
        'Corrosion-resistant structural aluminum or coated steel frames',
      ],
    },
    applications: {
      ar: [
        'حدائق الفلل والقصور والجلسات الخارجية',
        'تراسات الأسطح (الروف) والبنتهاوس',
        'مداخل الفلل والشركات والمباني',
        'مطاعم وكافيهات ومناطق الضيافة المفتوحة',
      ],
      en: [
        'Villa gardens and outdoor living terraces',
        'Rooftop lounges and luxury penthouses',
        'Main entrances and building drop-off canopies',
        'Open-air restaurants, cafes & hospitality spaces',
      ],
    },
    technicalSpecs: [
      {
        title: { ar: 'مواصفات زجاج البرجولة', en: 'Glass Composition' },
        description: { ar: 'سيكوريت مصفح 10+10 مم أو 8+8 مم مع طبقة PVB', en: 'Laminated Tempered 10+10mm or 8+8mm PVB' },
      },
      {
        title: { ar: 'مقاومة الأحمال والعوامل', en: 'Weather & Wind Resistance' },
        description: { ar: 'مطابق للمعايير الإنشائية لمقاومة العواصف', en: 'Engineered to local structural wind & live loads' },
      },
    ],
  },
];
