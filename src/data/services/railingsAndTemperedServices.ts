import { Service } from '@/types';

export const railingsAndTemperedServices: Service[] = [
  {
    id: 'railings',
    title: {
      ar: 'دربزينات وهاندريل الزجاج (Glass Railings)',
      en: 'Structural Glass Railings & Balustrades'
    },
    subtitle: {
      ar: 'أنظمة الدربزين الزجاجي بدون فريم للشرفات والسلالم',
      en: 'Frameless glass balustrades for balconies, terraces & stairs'
    },
    shortDescription: {
      ar: 'دربزينات زجاجية مصفحة معلقة ومثبتة بقطاعات ألومنيوم مدفونة أو سباغوتات إستانلس، توفر رؤية بانورامية وأمان فائق.',
      en: 'Frameless laminated structural glass railings with concealed U-channel embedded bases or stainless spigots for uninterrupted panoramic views.'
    },
    fullDescription: {
      ar: 'توفر PMS GLASS دربزينات زجاجية فائقة المتانة باستخدام الزجاج المصفح المقسى (Laminated Tempered Glass 8+8mm أو 10+10mm) المصمم ليتحمل أشد أنواع الضغط الجانبي وأعلى درجات السلامة للشرفات والسلالم الخارجية والداخلية.',
      en: 'Our glass balustrade systems use heavy-duty laminated tempered safety glass (8+8mm or 10+10mm SGP film) engineered to sustain heavy load forces while enhancing architectural elegance.'
    },
    iconName: 'ShieldCheck',
    mainImage: '/images/services/railing-hero.svg',
    gallery: [
      '/images/projects/railing-1.svg',
      '/images/projects/railing-2.svg',
      '/images/projects/railing-3.svg'
    ],
    features: {
      ar: [
        'رؤية بانورامية خالية من العوائق',
        'زجاج مصفح بطبقة PVB أو SGP عالية الأمان',
        'تحمل قوي للصدمات والأحمال حتى 1.5 kN/m',
        'أنظمة تثبيت أرضية مدفونة أو خارجية أنيقة'
      ],
      en: [
        'Unobstructed panoramic line of sight',
        'Laminated SGP interlayer for maximum structural safety',
        'Sustains heavy side impact loads up to 1.5 kN/m',
        'Concealed aluminum shoe base or sleek spigot mounts'
      ]
    },
    applications: {
      ar: [
        'شرفات ومطلات الفلل والعمائر',
        'السلالم والدرج الداخلي',
        'أسوار المذابح والحدائق'
      ],
      en: [
        'Villa balconies & roof terraces',
        'Interior & exterior staircases',
        'Pool fencing & garden perimeter barriers'
      ]
    },
    technicalSpecs: [
      {
        title: { ar: 'تركيب الزجاج', en: 'Glass Composition' },
        description: { ar: 'زجاج مصفح 8.8.4 (17.52mm) أو 10.10.4 (21.52mm)', en: 'Laminated 8.8.4 (17.52mm) or 10.10.4 (21.52mm)' }
      },
      {
        title: { ar: 'نظام التثبيت', en: 'Mounting Mechanism' },
        description: { ar: 'يوني تراك ألومنيوم مدفون / سباغوت إستانلس', en: 'Embedded Aluminum U-Channel or SS Spigots' }
      }
    ]
  },
  {
    id: 'tempered',
    title: {
      ar: 'الزجاج المقسى والمصفح (Tempered & Laminated Safety Glass)',
      en: 'High-Performance Tempered & Laminated Glass'
    },
    subtitle: {
      ar: 'معالجة حرارية متطورة لضمان أعلى درجات الأمان والسلامة',
      en: 'Advanced heat-treatment for extreme strength & safety'
    },
    shortDescription: {
      ar: 'مصنعنا مجهز بأحدث أفران معالجة الزجاج الحرارية لإنتاج زجاج السيكوريت والمصفح المقاوم للصدمات والحرارة العالية.',
      en: 'Our modern processing plant converts float glass into certified safety tempered and laminated structural glass components.'
    },
    fullDescription: {
      ar: 'تتميز PMS GLASS بإنتاج الزجاج المعالج حرارياً بسماكات تبدأ من 6 مم وحتى 19 مم، بالإضافة إلى خطوط تصنيع الزجاج المصفح (Laminated) المتصل بطبقات PVB أو SGP لمنع تناثر الزجاج في حالة الكسر.',
      en: 'PMS GLASS produces heat-strengthened tempered glass from 6mm up to 19mm thickness, alongside laminated safety glass fused with high-grade PVB/SGP interlayers preventing shatter dropouts.'
    },
    iconName: 'Flame',
    mainImage: '/images/services/tempered-hero.svg',
    gallery: [
      '/images/projects/facade-1.svg',
      '/images/projects/railing-1.svg'
    ],
    features: {
      ar: [
        'قوة تحمل تفوق الزجاج العادي بـ 5 أضعاف',
        'عند الكسر يتحول لقطع حبيبية صغيرة غير حادة للسلامة',
        'مقاومة ممتازة للفروق الحرارية حتى 250 درجة مئوية',
        'إمكانية الطباعة على الزجاج وحفر الليزر'
      ],
      en: [
        '5x mechanical strength compared to standard float glass',
        'Shatters into harmless blunt safe granules if breached',
        'Thermal gradient endurance up to 250°C',
        'Ceramic digital printing & custom sandblasting support'
      ]
    },
    applications: {
      ar: [
        'واجهات المحلات التجارية',
        'أرضيات وسقوف الزجاج المعمارية',
        'مصاعد الزجاج والمظلات الخارجية'
      ],
      en: [
        'Storefronts & retail entrances',
        'Structural glass floors & skylights',
        'Glass elevators & exterior canopies'
      ]
    },
    technicalSpecs: [
      {
        title: { ar: 'معيار السلامة', en: 'Safety Standard' },
        description: { ar: 'مطابق للمواصفات السعودية والعالمية ISO 12543', en: 'Compliant with ISO 12543 & SASO safety' }
      },
      {
        title: { ar: 'السماكات المتاحة', en: 'Thickness Range' },
        description: { ar: 'من 6 مم إلى 19 مم كقطعة واحدة', en: 'Single sheet from 6mm to 19mm' }
      }
    ]
  }
];
