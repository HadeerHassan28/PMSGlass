import { Service } from '@/types';

export const partitionAndMirrorServices: Service[] = [
  {
    id: 'partitions',
    title: {
      ar: 'الفواصل والقواطع المكتبية (Glass Partitions)',
      en: 'Acoustic Glass Office Partitions'
    },
    subtitle: {
      ar: 'قواطع زجاجية ذكية ومتحركة للمكاتب والشركات',
      en: 'Smart & acoustic glass partitions for corporate workspaces'
    },
    shortDescription: {
      ar: 'قواطع زجاجية سوداء أو شفافة توفر العزل الصوتي والخصوصية العالية، مع خيارات الزجاج الذكي (Smart Switchable Glass).',
      en: 'Sleek black frame or frameless acoustic glass partitions offering high sound isolation and privacy control, including Smart Glass options.'
    },
    fullDescription: {
      ar: 'نصمم ونركب القواطع الزجاجية للمكاتب وغرف الاجتماعات، حيث تضمن مرور الضوء الطبيعي وتوفر بيئة عمل هادئة وأنيقة. تتوفر بأسلوب الزجاج السيكوريت 10 مم و12 مم مع قطاعات ألومنيوم نحيفة جداً (Slim Frame Profile).',
      en: 'We install premium modular office partitions engineered for noise isolation and architectural flexibility. Featuring ultra-slim profile framing and optional switchable smart privacy glass.'
    },
    iconName: 'LayoutGrid',
    mainImage: '/images/services/partition-hero.svg',
    gallery: [
      '/images/projects/partition-1.svg',
      '/images/projects/partition-2.svg',
      '/images/projects/partition-3.svg'
    ],
    features: {
      ar: [
        'عزل صوتي يصل إلى 42 dB لغرف الاجتماعات',
        'قطاعات ألومنيوم مودرن باللون الأسود أو الذهبي المطفي',
        'خيارات الزجاج الذكي للتحكم بالخصوصية بضغطة زر',
        'أبواب مفصلية أو سحابة أنيقة بمقابض هيدروليكية'
      ],
      en: [
        'Acoustic isolation up to 42 dB for meeting rooms',
        'Ultra-slim black or champagne gold aluminum profiles',
        'Smart Switchable privacy glass via remote control',
        'Soft-close hydraulic swing and sliding glass doors'
      ]
    },
    applications: {
      ar: [
        'غرف المكاتب الرئيسية والمقرات الإدارية',
        'قاعات الاجتماعات والتدريب',
        'العيادات والمراكز الصحية'
      ],
      en: [
        'Executive suites & corporate office layouts',
        'Conference rooms & boardrooms',
        'Private clinics & healthcare offices'
      ]
    },
    technicalSpecs: [
      {
        title: { ar: 'معامل العزل الصوتي', en: 'Acoustic Rating' },
        description: { ar: '38 dB إلى 44 dB في القواطع المزدوجة', en: '38 dB to 44 dB in double glass partitions' }
      },
      {
        title: { ar: 'سمك قطاع الإطار', en: 'Frame Profile Width' },
        description: { ar: 'قطاع نحيف 25 مم نحاسي أو أسود مطفي', en: 'Ultra-thin 25mm black or gold frame' }
      }
    ]
  },
  {
    id: 'mirrors',
    title: {
      ar: 'المرايا الديكورية والـ LED (Custom & LED Mirrors)',
      en: 'Bespoke Architectural & Touch LED Mirrors'
    },
    subtitle: {
      ar: 'مرايا بلجيكية فاخرة بشطف ليزر وإضاءة خلفية ذكية',
      en: 'Belgian silvered mirrors with laser beveling & smart touch LED'
    },
    shortDescription: {
      ar: 'تصنيع مرايا جدارية بمقاسات عملاقة، مرايا مغاسل مضاءة، ومرايا قص ليزر هندسية تضيف اتساعاً وفخامة للمكان.',
      en: 'Precision manufacturing of large-format wall mirrors, illuminated touch LED bathroom vanity mirrors, and laser-cut geometric mirrors.'
    },
    fullDescription: {
      ar: 'نصنع ونركب المرايا البلجيكية عالية النقاء الخالية من النحاس والرصاص (Copper-Free Mirrors) المقاومة للرطوبة والبقع السوداء، مع دمج إضاءات LED المخفية بمختلف الدرجات وأزرار باللمس للتحكم بشدة الإضاءة ومضاد التكثف.',
      en: 'We craft copper-free Belgian mirrors that resist humidity, tarnish, and moisture degradation. Custom integrated with front and backlit LEDs, touch controls, and anti-fog heating pads.'
    },
    iconName: 'Sparkles',
    mainImage: '/images/services/mirror-hero.svg',
    gallery: [
      '/images/projects/mirror-1.svg',
      '/images/projects/mirror-2.svg',
      '/images/projects/mirror-3.svg'
    ],
    features: {
      ar: [
        'مرآة بلجيكية خالية تماماً من النحاس والرصاص',
        'مقاومة تامة لبقع الرطوبة والاسوداد على الأطراف',
        'قص ليزر دقيق مع شطف أطراف بأشكال هندسية',
        'إضاءة LED ذكية دافئة أو بيضاء مع خاصية التعتيم ومكافحة الضباب'
      ],
      en: [
        '100% Copper-free & lead-free eco Belgian mirrors',
        'High humidity & black edge corrosion resistance',
        'Laser-cut beveling with customized geometric shapes',
        'Touch sensor LED dimming & integrated anti-fog heating'
      ]
    },
    applications: {
      ar: [
        'مغاسل الفلل والقصور والصالونات الفاخرة',
        'مداخل الفنادق وصالات العرض',
        'أندية اللياقة البدنية والسبا'
      ],
      en: [
        'Luxury villa vanities & powder rooms',
        'Hotel lobbies, foyers & dining halls',
        'Fitness centers, gyms & wellness spas'
      ]
    },
    technicalSpecs: [
      {
        title: { ar: 'نوع المرآة', en: 'Mirror Substrate' },
        description: { ar: 'مرآة بلجيكية سيلفر 6 مم فائقة النقاء', en: '6mm Premium Ultra-Clear Belgian Silvered' }
      },
      {
        title: { ar: 'مواصفات الـ LED', en: 'LED Specification' },
        description: { ar: 'شريط LED مقاوم للماء IP65 بعمر 50,000 ساعة', en: 'Waterproof IP65 Strip, 50,000h lifespan' }
      }
    ]
  }
];
