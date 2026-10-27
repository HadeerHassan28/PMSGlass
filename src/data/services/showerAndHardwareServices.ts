import { Service } from '@/types';

export const showerAndHardwareServices: Service[] = [
  {
    id: 'showers',
    title: {
      ar: 'كبائن شاور',
      en: 'Shower Cabins',
    },
    subtitle: {
      ar: 'كبائن شاور فريم لس وسلايدنج بزجاج سيكوريت وإكسسوارات إستانلس 304 و316',
      en: 'Frameless & sliding shower cabins with safety tempered glass & premium hardware',
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ كبائن شاور بمقاسات مخصصة وزجاج سيكوريت 10 مم و12 مم معالج بتقنية النانو ضد التكلسات، وإكسسوارات إستانلس ستيل فاخرة مقاومة للصدأ.',
      en: 'Custom frameless & sliding tempered glass shower enclosures (10-12mm) treated with anti-limescale nano-coatings and marine-grade rustproof hardware.',
    },
    fullDescription: {
      ar: 'نبتكر كبائن شاور تجمع بين الفخامة والعملية والمتانة، باستخدام زجاج سيكوريت مقسى معالج حرارياً ضد الصدمات ومطلي بطبقة حماية تمنع ترسب الأملاح وسهلة التنظيف. تتوفر بخيارات متعددة للأبواب (مفصلي، سحاب، فولدنج) بألوان إكسسوارات عصرية تشمل الأسود المطفي، الذهبي الفرش، والكروم اللامع.',
      en: 'PMS GLASS manufactures custom luxury shower enclosures engineered with 10mm to 12mm thermally tempered safety glass and hydrophobic anti-limescale nano protection. Fitted with solid stainless steel hardware in matte black, brushed brass gold, rose gold, and polished mirror chrome.',
    },
    iconName: 'ShowerHead',
    mainImage: '/images/services/showers.svg',
    gallery: [
      '/images/services/showers.svg',
      '/images/projects/apartments-2.svg',
      '/images/projects/villas-2.svg',
    ],
    features: {
      ar: [
        'زجاج سيكوريت معالج 10 مم أو 12 مم فائق الأمان والمتانة',
        'طلاء نانو مقاوم لتراكم الأملاح والكلس وسهل التنظيف',
        'إكسسوارات ومفصلات إستانلس ستيل 304 و316 مقاومة للصدأ 100%',
        'جوانات وسيليكون ألماني لمنع تسرب المياه تماماً',
      ],
      en: [
        '10mm to 12mm heavy-duty tempered safety glass',
        'Hydrophobic anti-limescale easy-clean nano coating',
        '100% rust-proof solid stainless steel 304/316 fittings',
        'High-grade German magnetic seals preventing water leaks',
      ],
    },
    applications: {
      ar: [
        'حمامات الفلل والقصور الرئيسية والضيوف',
        'الفنادق الفاخرة والمنتجعات السياحية',
        'الشقق السكنية الحديثة والمشاريع الفندقية',
      ],
      en: [
        'Luxury villa and palace master & guest suites',
        '5-star boutique hotels and beachfront resorts',
        'Modern residential apartments & penthouses',
      ],
    },
    technicalSpecs: [
      {
        title: { ar: 'سُمك ونوع الزجاج', en: 'Glass Specification' },
        description: { ar: '10 مم - 12 مم سيكوريت شفاف، مثلج أو ملون', en: '10mm - 12mm Tempered Clear, Frosted or Tinted' },
      },
      {
        title: { ar: 'ألوان الإكسسوارات', en: 'Hardware Finishes' },
        description: { ar: 'أسود مطفي، ذهبي مطفي، كروم، برونز', en: 'Matte Black, Brushed Gold, Polished Chrome, Bronze' },
      },
    ],
  },
  {
    id: 'accessories',
    title: {
      ar: 'إكسسوارات زجاج',
      en: 'Glass Accessories & Hardware',
    },
    subtitle: {
      ar: 'إكسسوارات وأنظمة تثبيت الزجاج المعماري من الإستانلس ستيل والألومنيوم عالي الجودة',
      en: 'Architectural glass hardware, patch fittings, floor springs & connectors',
    },
    shortDescription: {
      ar: 'توريد وتوفير كافة إكسسوارات الزجاج المعماري الأصلية (مفصلات، ماكينات أرضية، مقابض، كلبسات، أنظمة سبايدر) بأعلى معايير المتانة والجودة العالمية.',
      en: 'Supply of genuine high-grade architectural glass fittings: hydraulic floor springs, patch locks, pull handles, shower hinges, and spider brackets.',
    },
    fullDescription: {
      ar: 'توفر PMS GLASS تشكيلة شاملة من إكسسوارات الزجاج المعماري المصنعة من الإستانلس ستيل 304 و316 وسبائك الألومنيوم المقاومة للرطوبة والأحمال الشاقة. تشمل ماكينات الأبواب الأرضية الهيدروليكية، كلبسات التثبيت، مقابض الأبواب الفاخرة، أنظمة السحب والأبواب الزجاجية الأوتوماتيكية، وإكسسوارات السبايدر للواجهات الكبرى مع ضمان شامل.',
      en: 'We provide a comprehensive catalog of premium architectural glass hardware crafted from solid stainless steel grades 304 & 316. Including certified hydraulic floor hinges, top/bottom patch fittings, luxury door pull handles, spider glass brackets, sliding rail kits, and shower clamps engineered for heavy-traffic durability and long-term corrosion resistance.',
    },
    iconName: 'Wrench',
    mainImage: '/images/services/accessories.svg',
    gallery: [
      '/images/services/accessories.svg',
      '/images/projects/retail-1.svg',
      '/images/projects/malls-2.svg',
    ],
    features: {
      ar: [
        'مصنوعة من خامات الإستانلس ستيل 304 و316 المقاومة للصدأ 100%',
        'ماكينات أرضية هيدروليكية معتمدة لأوزان أبواب تصل لـ 150 كجم',
        'مقابض أبواب فاخرة بتصاميم وأطوال متنوعة ولمسات نهائية راقية',
        'إكسسوارات سبايدر وكلبسات تثبيت عالية التحمل للواجهات والدربزينات',
      ],
      en: [
        'Constructed from marine-grade solid stainless steel 304 & 316',
        'Certified heavy-duty hydraulic floor springs for doors up to 150kg',
        'Designer door pull handles in multiple lengths & luxury finishes',
        'High-tensile spider brackets and structural glass clamps',
      ],
    },
    applications: {
      ar: [
        'أبواب المحلات والشركات والمولات',
        'كبائن الشاور وأنظمة الزجاج الداخلية',
        'الواجهات الزجاجية وأنظمة السبايدر',
        'دربزينات الزجاج والقواطع المعمارية',
      ],
      en: [
        'Commercial storefront & mall entrance doors',
        'Shower enclosures & interior glass systems',
        'Curtain walls & spider facade structures',
        'Glass balustrades, handrails & partitions',
      ],
    },
    technicalSpecs: [
      {
        title: { ar: 'درجة المعدن', en: 'Material Grade' },
        description: { ar: 'إستانلس ستيل SS304 وSS316 عالي النقاء', en: 'Solid Stainless Steel SS304 & SS316' },
      },
      {
        title: { ar: 'اختبارات التحمل', en: 'Durability Testing' },
        description: { ar: 'مختبرة لأكثر من 500,000 دورة فتح وإغلاق', en: 'Tested for over 500,000 open/close cycles' },
      },
    ],
  },
];
