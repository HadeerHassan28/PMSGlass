import { Service } from '@/types';

export const showerServices: Service[] = [
  {
    id: 'showers',
    title: {
      ar: 'كبائن الشاور الفاخرة (Luxury Shower Cabins)',
      en: 'Frameless Luxury Shower Cabins'
    },
    subtitle: {
      ar: 'زجاج سيكوريت معالج مع إكسسوارات ذهبية وسوداء مقاومة للصدأ',
      en: 'Tempered glass enclosures with rustproof gold & black hardware'
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ كبائن شاور فريم لس وسلايدنج بمقاسات خاصة، مصنوعة من زجاج السيكوريت المقسى وإكسسوارات إستانلس 316.',
      en: 'Custom frameless & sliding shower enclosures engineered with 10mm-12mm safety tempered glass and SS 316 hardware.'
    },
    fullDescription: {
      ar: 'نصنع كبائن شاور تجمع بين الفخامة والعملية، باستخدام زجاج سيكوريت معالج ضد التكلسات والبقع (Easy-Clean Glass Coating)، مع تنوع كبير في الألوان والمقابض والمفصلات (ذهب مطفي، أسود مطفي، كروم، وبرونز).',
      en: 'Our custom shower enclosures feature hydrophobic Easy-Clean nano coatings, shatter-proof safety glass, and luxury hardware finishes including brushed gold, matte black, mirror chrome, and champagne bronze.'
    },
    iconName: 'ShowerHead',
    mainImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
    ],
    features: {
      ar: [
        'زجاج سيكوريت 10mm أو 12mm معالج ضد الصدمات',
        'طلاء نانو ناعم مقاوم لترسبات الكلس والأملاح',
        'مفصلات وسكك إستانلس ستيل 316 مقاومة للصدأ 100%',
        'جوانات وسيليكون ألماني مانع لتسرب المياه تماماً'
      ],
      en: [
        '10mm to 12mm safety tempered shatter-resistant glass',
        'Hydrophobic anti-limescale easy-clean nano coating',
        '100% rust-proof Solid Stainless Steel 316 hinges & rails',
        'German magnetic seals ensuring zero water leakage'
      ]
    },
    applications: {
      ar: [
        'حمامات الفلل والقصور الرئاسية',
        'الفنادق الفاخرة والمنتجعات',
        'الشقق والمجمعات السكنية الحديثة'
      ],
      en: [
        'Luxury villa & palace master bathrooms',
        '5-star hotels & boutique resorts',
        'High-end residential apartments'
      ]
    },
    technicalSpecs: [
      {
        title: { ar: 'سُمك الزجاج', en: 'Glass Thickness' },
        description: { ar: '10 مم - 12 مم سيكوريت شفاف أو مثلج', en: '10mm - 12mm Tempered Clear or Frosted' }
      },
      {
        title: { ar: 'مادة الإكسسوارات', en: 'Hardware Grade' },
        description: { ar: 'إستانلس ستيل SS316 معالج حرارياً', en: 'Stainless Steel 316 Heavy Duty' }
      }
    ]
  }
];
