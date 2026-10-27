import { Project } from '@/types';

export const villasProjects: Project[] = [
  {
    id: 'v1',
    slug: 'luxury-villas-panoramic-facades',
    title: {
      ar: 'واجهات بانورامية وأسوار مسابح للفيلات الفاخرة',
      en: 'Luxury Villas Panoramic Glass Facades & Pool Enclosures',
    },
    subtitle: {
      ar: 'واجهات ستركشر مودرن وأنظمة سحاب زجاجية عازلة ودربزينات مسابح شفافة',
      en: 'Modern panoramic structural glazing, insulated sliding systems & clear pool barriers',
    },
    category: 'villas',
    client: {
      ar: 'ملاك ومطورو الفيلات والقصور الفاخرة',
      en: 'Luxury Villa Owners & Private Developers',
    },
    location: {
      ar: 'قطامية ديونز، القاهرة',
      en: 'Katameya Dunes, New Cairo',
    },
    year: '2025',
    area: '950 m²',
    glassType: {
      ar: 'زجاج سيكوريت مزدوج Low-E مع زجاج مصفح 17.52 مم للدرابزين',
      en: 'Double Glazed Low-E Solar Control & 17.52mm Laminated Balustrades',
    },
    hardwareType: {
      ar: 'أنظمة سحب Slim Line ألومنيوم وإكسسوارات زجاجية مقاومة للرطوبة',
      en: 'Slim-Line Minimalist Aluminum Profiles & Weather-Resistant Hardware',
    },
    mainImage: '/images/projects/villas-1.svg',
    galleryImages: [
      '/images/projects/villas-1.svg',
      '/images/services/handrails.svg',
      '/images/projects/villas-2.svg',
    ],
    description: {
      ar: 'تنفيذ واجهات زجاجية بانورامية لفيلا راقية تطل على الحدائق والمسبح، مع تقليل نفاذ الحرارة بنسبة 45% وتوفير أسوار زجاجية شفافة حول حمام السباحة لأمان الأطفال دون إعاقة المنظر الخلاب.',
      en: 'Comprehensive architectural glass installation for a private modern villa, featuring garden-facing panoramic sliding facades that slash solar heat gain by 45%, alongside crystal-clear safety glass pool surrounds.',
    },
    scopeOfWork: {
      ar: [
        'تركيب أنظمة واجهات زجاجية سيكوريت عازلة للحرارة والضوء المباشر',
        'تنفيذ أبواب سحاب زجاجية كبيرة بمقابض وإقفال هيدروليكية ناعمة',
        'تركيب درابزينات زجاجية مصفحة للتراس والروف بدون فريم',
        'تنفيذ سور حمام السباحة الزجاجي بسباغوتات إستانلس 316',
      ],
      en: [
        'Installation of thermal-break insulated double glazed sliding facade walls',
        'Heavy-duty oversized glass sliding doors with soft-closing mechanisms',
        'Frameless laminated glass balustrades along balconies and roof deck',
        'Child-safe swimming pool perimeter glass with marine-grade SS 316 spigots',
      ],
    },
    specs: [
      {
        label: { ar: 'نسبة عزل الحرارة Solar Heat', en: 'Solar Heat Reduction' },
        value: { ar: 'تخفيض الحرارة بنسبة 45%', en: '45% solar heat rejection' },
      },
      {
        label: { ar: 'مقاومة الرطوبة والأملاح', en: 'Corrosion Resistance' },
        value: { ar: 'إستانلس 316 مقاوم للكلور والرطوبة', en: 'SS 316 chlorine & marine-proof' },
      },
    ],
    featured: true,
  },
  {
    id: 'v2',
    slug: 'private-villa-pergolas-showers',
    title: {
      ar: 'برجولات زجاجية وكبائن شاور ومرايا الفيلات',
      en: 'Villa Architectural Glass Pergolas, Showers & Vanity Mirrors',
    },
    subtitle: {
      ar: 'تغطيات زجاجية للمجالس الخارجية وكبائن شاور فريم لس ومرايا LED ذكية',
      en: 'Outdoor glass patio pergolas, custom frameless showers & illuminated mirrors',
    },
    category: 'villas',
    client: {
      ar: 'مشروعات الفيلات والقصور الخاصة',
      en: 'Private Palace & Villa Estates',
    },
    location: {
      ar: 'طريق الإسكندرية الصحراوي، الجيزة',
      en: 'Cairo-Alexandria Desert Road',
    },
    year: '2024',
    area: '780 m²',
    glassType: {
      ar: 'زجاج سيكوريت مصفح 10+10 مم للبرجولات وزجاج شاور 10 مم معالج نانو',
      en: '10+10mm Overhead Laminated Glass & 10mm Easy-Clean Shower Glass',
    },
    hardwareType: {
      ar: 'إكسسوارات إستانلس ستيل 304 ذهبي مطفي وهياكل ألومنيوم معالجة',
      en: 'Brushed Gold SS 304 Hardware & Powder-Coated Structural Frames',
    },
    mainImage: '/images/projects/villas-2.svg',
    galleryImages: [
      '/images/projects/villas-2.svg',
      '/images/services/pergolas.svg',
      '/images/services/showers.svg',
    ],
    description: {
      ar: 'تجهيز الفيلا بحلول زجاجية داخلية وخارجية تشمل برجولة زجاجية مظللة للمجلس الخارجي، كبائن شاور ذهبية فخمة، ومرايا جدارية بتصاميم هندسية مضاءة.',
      en: 'Integrated interior and outdoor glass works for a private estate, comprising an outdoor laminated glass pergola, luxury brushed gold frameless shower enclosures, and custom LED bathroom mirrors.',
    },
    scopeOfWork: {
      ar: [
        'هندسة وتركيب هيكل البرجولة الزجاجية وتصريف الأمطار المخفي',
        'تفصيل كبائن شاور فريم لس بزجاج سيكوريت معالج ضد الترسبات',
        'تصنيع مرايا جدارية بلجيكية بإضاءة LED ذكية تعمل باللمس',
        'تنفيذ قواطع زجاجية داخلية لغرف الملابس والحمامات الماستر',
      ],
      en: [
        'Structural pergola assembly with concealed perimeter water drainage',
        'Custom fabrication of frameless showers with anti-limescale protection',
        'Installation of oversized Belgian mirrors with touch-sensor LED lights',
        'Interior glass partition dividers for master walk-in wardrobe suites',
      ],
    },
    specs: [
      {
        label: { ar: 'تحمل البرجولة للأحمال', en: 'Pergola Load Capacity' },
        value: { ar: 'زجاج مصفح 21.52 مم آمن للأعلى', en: '21.52mm overhead safety laminated' },
      },
      {
        label: { ar: 'طلاء إكسسوارات الشاور', en: 'Hardware Finish' },
        value: { ar: 'ذهب مطفي معالج ضد التآكل والصدأ', en: 'Brushed gold anti-tarnish coating' },
      },
    ],
    featured: false,
  },
];
