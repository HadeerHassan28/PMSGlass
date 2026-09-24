import { Project } from '@/types';

export const facadeProjects: Project[] = [
  {
    id: 'p1',
    slug: 'luxury-villa-curved-facade',
    title: {
      ar: 'واجهة برج ومجمع فيلا فاخرة زجاجية',
      en: 'Luxury Villa Curved Glass Facade & Structural Curtain Wall'
    },
    subtitle: {
      ar: 'واجهة ستركشر مزدوجة مع عزل حراري شمس متقدم',
      en: 'Double-glazed structural curtain wall with High Low-E thermal control'
    },
    category: 'facades',
    client: {
      ar: 'مجموعة الراجحي العقارية',
      en: 'Al Rajhi Real Estate Group'
    },
    location: {
      ar: 'حي حطين، الرياض',
      en: 'Hittin District, Riyadh'
    },
    year: '2025',
    area: '1,450 m²',
    glassType: {
      ar: 'زجاج سيكوريت مزدوج Low-E سُمك 28mm عاكس برونزي',
      en: '28mm Double Glazed Low-E Tempered Glass (Bronze Reflective)'
    },
    hardwareType: {
      ar: 'قطاعات ألومنيوم إيطالية عازلة حرارياً مع إكسسوارات ذهبية',
      en: 'Italian Thermally Broken Aluminum Frames with Custom Gold Trims'
    },
    mainImage: '/images/projects/facade-1.svg',
    galleryImages: [
      '/images/projects/facade-1.svg',
      '/images/projects/facade-2.svg',
      '/images/projects/facade-3.svg'
    ],
    description: {
      ar: 'مشروع تنفيذ واجهات معمارية ستركشر لفيلا مودرن فاخرة بالرياض، تم استخدام زجاج مزدوج عالي الأداء يوفر رؤية بانورامية ساحرة مع خفض تكاليف التكييف بنسبة 40% بفضل طبقات منع الحرارة الشمسية.',
      en: 'Comprehensive structural glazing project for a luxury modern villa compound in Riyadh. Features high-performance solar control double glazing that minimizes HVAC energy consumption by 40% while preserving panoramic daylight views.'
    },
    scopeOfWork: {
      ar: [
        'تصميم وتصنيع قطاعات الواجهات بالكمبيوتر',
        'تركيب زجاج سيكوريت مزدوج Low-E مقاوم للحرارة والرياح',
        'عزل الفواصل باستخدام السيليكون الهيكلي الألماني (Dow Corning)',
        'تركيب مظلات زجاجية سيكوريت مصفحة للمدخل الرئيسي'
      ],
      en: [
        'Computer-aided structural calculation & profile extrusion',
        'Installation of heavy-duty wind-load tested Low-E double glazing',
        'Structural silicone sealing with German Dow Corning sealant',
        'Laminated structural glass main entrance canopy installation'
      ]
    },
    specs: [
      {
        label: { ar: 'معامل انتقال الحرارة U-Factor', en: 'U-Factor Rating' },
        value: { ar: '1.3 W/m²K', en: '1.3 W/m²K' }
      },
      {
        label: { ar: 'معامل التظليل الشمسي SHGC', en: 'Solar Heat Gain SHGC' },
        value: { ar: '0.24', en: '0.24' }
      },
      {
        label: { ar: 'مقاومة ضغط الرياح', en: 'Wind Load Resistance' },
        value: { ar: '3.0 kPa', en: '3.0 kPa' }
      }
    ],
    featured: true
  },
  {
    id: 'p5',
    slug: 'commercial-tower-double-glazed-facade',
    title: {
      ar: 'واجهات برج تجاري وإداري بالزجاج العاكس',
      en: 'Commercial Tower Reflective Double-Glazed Facade'
    },
    subtitle: {
      ar: 'برج مكون من 18 طابق بطلاء سيراميك حراري وزجاج عاكس',
      en: '18-story office tower clad in solar-control high reflective glass'
    },
    category: 'facades',
    client: {
      ar: 'شركة الأبراج القابضة',
      en: 'Al Abraj Holding Co.'
    },
    location: {
      ar: 'طريق الملك فهد، جدة',
      en: 'King Fahd Road, Jeddah'
    },
    year: '2024',
    area: '6,800 m²',
    glassType: {
      ar: 'زجاج مزدوج 24mm عاكس فضي مغطى بطبقة الفاكيم عازلة للشمس',
      en: '24mm Silver Reflective Double Glazing with Low-E Solar Film'
    },
    hardwareType: {
      ar: 'قطاعات ألومنيوم ستركشر جلايزنج بدون فواصل معدنية خارجية',
      en: 'Structural Silicone Glazing (SSG) Profiles'
    },
    mainImage: '/images/projects/facade-2.svg',
    galleryImages: [
      '/images/projects/facade-2.svg',
      '/images/projects/facade-3.svg',
      '/images/projects/facade-1.svg'
    ],
    description: {
      ar: 'تكسية واجهة برج إداري وتجاري بجدة بـ 6800 متر مربع من الزجاج العاكس، مما أعطى البرج مظهر حداثي فريد وحقق كفاءة طاقة عالية تمثلت في الحصول على شهادة المباني الخضراء.',
      en: 'Cladding of an 18-story corporate tower in Jeddah with over 6,800 sqm of structural double glazing, delivering striking aesthetic presence and LEED energy certification compliance.'
    },
    scopeOfWork: {
      ar: [
        'تصنيع كتل الواجهات الجاهزة (Unitized Curtain Wall Systems)',
        'رفع وتركيب الألواح بالرافعات الهيدروليكية البرجية',
        'اختبارات عزل مياه الأمطار وتسريب الهواء المعتمدة'
      ],
      en: [
        'Fabrication of Unitized Curtain Wall panels in factory',
        'Crane lifting and mechanical setting of glass units',
        'Water hose and air pressure leakage seal certification'
      ]
    },
    specs: [
      {
        label: { ar: 'انعكاس الضوء الشمسي', en: 'Solar Light Reflection' },
        value: { ar: '32%', en: '32%' }
      },
      {
        label: { ar: 'شهادة كفاءة الطاقة', en: 'Energy Rating' },
        value: { ar: 'LEED Gold Compliant', en: 'LEED Gold Compliant' }
      }
    ],
    featured: false
  }
];
