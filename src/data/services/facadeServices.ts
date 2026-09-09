import { Service } from '@/types';

export const facadeServices: Service[] = [
  {
    id: 'facades',
    title: {
      ar: 'الواجهات الزجاجية المعمارية (Curtain Walls)',
      en: 'Architectural Structural Glass Facades'
    },
    subtitle: {
      ar: 'أنظمة الواجهات المزدوجة والهياكل العنكبوتية (Spider Systems)',
      en: 'Double-glazed curtain walls & spider glass systems'
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ واجهات معمارية زجاجية معزولة حرارياً وصوتياً تعطي المبنى لمسة فخامة عصرية وتسمح بالإضاءة الطبيعية.',
      en: 'Design and construction of thermally and acoustically insulated curtain walls, adding modern luxury and maximum daylight.'
    },
    fullDescription: {
      ar: 'تقدم PMS GLASS أنظمة واجهات زجاجية متكاملة تشمل الكرتن وول (Curtain Wall)، الستركشر (Structural Glazing)، والسبايدر (Spider Systems) بأعلى تقنيات العزل الحراري المزدوج (Double Glazing) والزجاج العاكس الملون والشفاف عالي النقاء (Extra Clear Low-Iron Glass).',
      en: 'PMS GLASS delivers integrated curtain wall, structural glazing, and spider system facades equipped with double glazing, Low-E solar control, and crystal-clear extra-clear low-iron glass.'
    },
    iconName: 'Building2',
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80'
    ],
    features: {
      ar: [
        'عزل حراري وتظليل شمسي ممتاز بتقنيات Low-E',
        'مقاومة عالية للرياح، العواصف، والضغط الميكانيكي',
        'عزل صوتي فائق يوفر هدوء تام داخل المبنى',
        'أنظمة قطاعات ألومنيوم إيطالية وألمانية عالية المتانة'
      ],
      en: [
        'Superior solar control & Low-E thermal insulation',
        'High wind load resistance & structural endurance',
        'Acoustic isolation for quiet indoor environments',
        'Premium European aluminum structural framing profiles'
      ]
    },
    applications: {
      ar: [
        'الأبراج والشركات والمباني الإدارية',
        'المجمعات التجارية والمولات',
        'الفلل والمباني السكنية الفاخرة',
        'الفنادق والمستشفيات'
      ],
      en: [
        'Commercial towers & corporate headquarters',
        'Shopping malls & retail complexes',
        'Luxury residential villas & mansions',
        'Hotels & healthcare facilities'
      ]
    },
    technicalSpecs: [
      {
        title: { ar: 'سمك الزجاج', en: 'Glass Thickness' },
        description: { ar: 'زجاج مزدوج 24mm (6mm + 12mm Air Gap + 6mm)', en: 'Double Glazed 24mm (6mm + 12mm Air + 6mm)' }
      },
      {
        title: { ar: 'معامل العزل الحراري (U-Value)', en: 'U-Value Insulation' },
        description: { ar: 'يصل إلى 1.4 W/m²K مع الغاز العازل Arg', en: 'Up to 1.4 W/m²K with Argon gas infill' }
      },
      {
        title: { ar: 'نوع الألومنيوم', en: 'Aluminum Frame' },
        description: { ar: 'قطاعات حرارية عازلة (Thermal Break)', en: 'Thermally broken heavy-duty aluminum profiles' }
      }
    ]
  }
];
