import { Project } from '@/types';

export const retailProjects: Project[] = [
  {
    id: 'r1',
    slug: 'retail-storefront-facades',
    title: {
      ar: 'واجهات المحلات والمعارض التجارية الكبرى',
      en: 'Retail Stores & Showrooms Frameless Glass Facades',
    },
    subtitle: {
      ar: 'واجهات زجاجية شفافة للمتاجر وصالات العرض بارتفاعات عملاقة وأبواب أوتوماتيكية',
      en: 'High-span frameless storefront glass with automated entrance systems',
    },
    category: 'retail',
    client: {
      ar: 'وكالات ومتاجر الأزياء والتجزئة الفاخرة',
      en: 'Luxury Retail & Fashion Brands Agency',
    },
    location: {
      ar: 'الشيخ زايد، الجيزة',
      en: 'Sheikh Zayed, Giza',
    },
    year: '2025',
    area: '850 m²',
    glassType: {
      ar: 'زجاج سيكوريت 12 مم فائق النقاء Extra Clear نقي وخالٍ من الشوائب',
      en: '12mm Extra-Clear Low-Iron Safety Tempered Glass',
    },
    hardwareType: {
      ar: 'ماكينات ومفصلات أرضية ألمانية هيدروليكية ومقابض إستانلس 316 طويلة',
      en: 'German Heavy-Duty Hydraulic Floor Springs & Full-Length SS 316 Pulls',
    },
    mainImage: '/images/projects/retail-1.svg',
    galleryImages: [
      '/images/projects/retail-1.svg',
      '/images/services/facades.svg',
      '/images/projects/retail-2.svg',
    ],
    description: {
      ar: 'تنفيذ واجهات عرض تجارية شفافة بالكامل للمحلات الفاخرة توفر أعلى درجات وضوح المنتجات دون انعكاسات مزعجة مع أبواب زجاجية هيدروليكية سهلة الحركة.',
      en: 'Engineering ultra-clear frameless glass storefronts for luxury retail boutiques, maximizing visual merchandising appeal with anti-reflective clarity and heavy-duty pivot doors.',
    },
    scopeOfWork: {
      ar: [
        'قص وتشغيل ألواح زجاجية عملاقة بارتفاع يصل إلى 4.5 متر',
        'شطف وسنفرة الأطراف بجودة ليزر فائقة النعومة',
        'تركيب أنظمة أبواب زجاجية سيكوريت بماكينات أرضية معتمدة',
        'تجهيز أقفال أمان ذكية وإكسسوارات إستانلس مقاومة للخدش',
      ],
      en: [
        'Precision processing of oversized jumbo glass panels up to 4.5m',
        'CNC laser edge polishing and flat-edge arrissing',
        'Installation of tempered glass pivot doors with hydraulic control',
        'Integration of security smart locks and scratch-resistant hardware',
      ],
    },
    specs: [
      {
        label: { ar: 'نسبة نقاء الزجاج', en: 'Light Transmission' },
        value: { ar: '91% وضوح بصري تام', en: '91% visible clarity' },
      },
      {
        label: { ar: 'نوع المفصلات', en: 'Hinge Mechanism' },
        value: { ar: 'ماكينات هيدروليكية ألمانية', en: 'German hydraulic floor springs' },
      },
    ],
    featured: true,
  },
  {
    id: 'r2',
    slug: 'automotive-commercial-showroom',
    title: {
      ar: 'واجهات معارض السيارات والأنشطة التجارية',
      en: 'Automotive & Commercial Showroom Glass Walls',
    },
    subtitle: {
      ar: 'واجهات زجاجية واسعة وأبواب سحب قابلة للطي والفتح بالكامل',
      en: 'Large-span glass display walls with full-opening folding sliding systems',
    },
    category: 'retail',
    client: {
      ar: 'شركة معارض ومراكز التوزيع التجاري',
      en: 'Commercial Distribution Centers & Showrooms Co.',
    },
    location: {
      ar: 'طريق السويس، القاهرة',
      en: 'Suez Road Corridor, Cairo',
    },
    year: '2024',
    area: '1,250 m²',
    glassType: {
      ar: 'زجاج سيكوريت مصفح 19 مم معالج لمقاومة الصدمات والأحمال',
      en: '19mm High-Impact Tempered Laminated Security Glass',
    },
    hardwareType: {
      ar: 'أنظمة سبايدر إستانلس 316 وقطاعات ألومنيوم صناعية معالجة',
      en: 'SS 316 Heavy Spider Brackets & Structural Anodized Framing',
    },
    mainImage: '/images/projects/retail-2.svg',
    galleryImages: [
      '/images/projects/retail-2.svg',
      '/images/services/accessories.svg',
      '/images/projects/retail-1.svg',
    ],
    description: {
      ar: 'تنفيذ واجهات عرض مفتوحة للمعارض التجارية الكبرى تسمح بدخول المركبات والمنتجات الضخمة مع نظام زجاجي مقاوم للصدمات والحرارة.',
      en: 'Custom large-span glass facade execution for automotive and heavy commercial showrooms, facilitating vehicle entry and open product viewing with heavy impact resistance.',
    },
    scopeOfWork: {
      ar: [
        'دراسة هندسية لتوزيع أحمال الزجاج والرياح للفتحات العريضة',
        'تركيب أنظمة واجهات السبايدر الإستانلس ذات الشفافية المطلقة',
        'تنفيذ بوابات زجاجية سحاب قابلة للفتح الكلي بسلاسة',
        'عزل كامل ضد الأتربة والحرارة والأمطار',
      ],
      en: [
        'Structural engineering and wide-span wind load calculations',
        'Installation of point-supported stainless steel spider facade systems',
        'Seamless sliding/folding multi-panel full-aperture glass doors',
        'Full perimeter dust, heat, and moisture weatherproofing',
      ],
    },
    specs: [
      {
        label: { ar: 'سمك الزجاج الإنشائي', en: 'Glass Thickness' },
        value: { ar: '19 مم سيكوريت مصفح', en: '19mm Tempered Laminated' },
      },
      {
        label: { ar: 'نظام التثبيت', en: 'Fixing System' },
        value: { ar: 'سبايدر إستانلس 316', en: 'Multi-arm SS 316 Spiders' },
      },
    ],
    featured: false,
  },
];
