import { Project } from '@/types';

export const mallsProjects: Project[] = [
  {
    id: 'm1',
    slug: 'commercial-malls-glass-facades',
    title: {
      ar: 'واجهات وزجاج المولات والمجمعات التجارية',
      en: 'Commercial Shopping Mall Glass Facades & Skylights',
    },
    subtitle: {
      ar: 'واجهات زجاجية كرتن وول وسكاي لايت بانورامي بمواصفات عزل حراري قياسية',
      en: 'Structural curtain walls & panoramic skylights with high thermal performance',
    },
    category: 'malls',
    client: {
      ar: 'مجموعة تطوير المراكز التجارية الكبرى',
      en: 'Commercial Centers & Malls Development Group',
    },
    location: {
      ar: 'القاهرة الجديدة، مصر',
      en: 'New Cairo, Egypt',
    },
    year: '2025',
    area: '3,850 m²',
    glassType: {
      ar: 'زجاج سيكوريت مزدوج Low-E معالج حرارياً 28 مم عاكس للطاقة الشمسية',
      en: '28mm Double Glazed Low-E Safety Tempered Solar Control Glass',
    },
    hardwareType: {
      ar: 'قطاعات كرتن وول ألومنيوم حرارية مع أنظمة سبايدر إستانلس ستيل 316',
      en: 'Thermal Break Curtain Wall Extrusions & SS 316 Spider Fittings',
    },
    mainImage: '/images/projects/clothMall/1.jpg',
    galleryImages: Array.from({ length: 30 }, (_, i) => `/images/projects/clothMall/${i + 1}.jpg`),
    description: {
      ar: 'تنفيذ وتوريد واجهات زجاجية معمارية شاملة لمركز تجاري ضخم تشمل الواجهات الخارجية والسكاي لايت المضيء، مما وفر كفاءة طاقة استثنائية وإضاءة نهارية طبيعية غامرة.',
      en: 'Turnkey execution of external structural glass curtain walls and central atrium skylights for a major commercial mall, delivering exceptional thermal efficiency and abundant natural daylighting.',
    },
    scopeOfWork: {
      ar: [
        'هندسة وحسابات أحمال الرياح والتصنيع الرقمي للقطاعات',
        'تركيب زجاج سيكوريت مزدوج Low-E عالي العزل للحرارة والضوضاء',
        'عزل الفواصل بالسيليكون الهيكلي الألماني المقاوم للعوامل الجوية',
        'تنفيذ القبة السماوية الزجاجية (Skylight) بزجاج مصفح آمن',
      ],
      en: [
        'Engineering structural wind-load calculation and custom extrusion',
        'Installation of high-spec Low-E thermal & acoustic double glazing',
        'Weather-tight structural silicone sealing with premium German sealants',
        'Laminated overhead safety glass skylight dome installation',
      ],
    },
    specs: [
      {
        label: { ar: 'معامل العزل الحراري U-Value', en: 'Thermal Insulation U-Value' },
        value: { ar: '1.3 W/m²K مع الأرجون', en: '1.3 W/m²K with Argon fill' },
      },
      {
        label: { ar: 'عزل الصوت والضوضاء', en: 'Acoustic Rating' },
        value: { ar: '42 dB عزل صوتي تام', en: '42 dB sound attenuation' },
      },
    ],
    featured: true,
  },
  {
    id: 'm2',
    slug: 'mokatem-commercial-glass-facades',
    title: {
      ar: 'واجهات وأعمال زجاج مشروع المقطم',
      en: 'Mokattam Commercial Glass Facades & Railings',
    },
    subtitle: {
      ar: 'واجهات زجاجية واستركشر ودربزينات بمواصفات معمارية راقية',
      en: 'Structural glass facades and architectural balustrades',
    },
    category: 'malls',
    client: {
      ar: 'مشروع المقطم التجاري',
      en: 'Mokattam Commercial Project',
    },
    location: {
      ar: 'المقطم، القاهرة، مصر',
      en: 'El Mokattam, Cairo, Egypt',
    },
    year: '2025',
    area: '2,400 m²',
    glassType: {
      ar: 'زجاج سيكوريت مصفح عالي الجودة معالج حرارياً',
      en: 'High-Performance Laminated Tempered Safety Glass',
    },
    hardwareType: {
      ar: 'إكسسوارات إستانلس ستيل 316 وقطاعات ألومنيوم هندسية',
      en: 'SS 316 Architectural Fittings & Structural Extrusions',
    },
    mainImage: '/images/projects/mokatem/1.jpg',
    galleryImages: Array.from({ length: 17 }, (_, i) => `/images/projects/mokatem/${i + 1}.jpg`),
    description: {
      ar: 'تنفيذ وتوريد أعمال الواجهات الزجاجية والدربزينات المعمارية لمشروع المقطم بأعلى معايير الأمان والدقة الهندسية.',
      en: 'Turnkey supply and installation of architectural glass facades and balustrades for the Mokattam commercial project with top safety and engineering precision.',
    },
    scopeOfWork: {
      ar: [
        'تصميم وتثبيت الواجهات الزجاجية المقاومة للرياح والعوامل الجوية',
        'تركيب دربزينات زجاجية مصفحة للأتريوم والممرات',
        'عزل الفواصل بمواد مانعة للتسرب ألمانية معتمدة',
        'فحص واختبارات الجودة والسلامة الإنشائية',
      ],
      en: [
        'Design and installation of weather-resistant structural glass facades',
        'Installation of laminated glass balustrades for walkways and atriums',
        'Weather-tight joint sealing with certified German sealants',
        'Comprehensive quality and safety structural testing',
      ],
    },
    specs: [
      {
        label: { ar: 'معامل الأمان', en: 'Safety Standard' },
        value: { ar: 'مطابق للمواصفات القياسية الدولية', en: 'International Safety Code Compliant' },
      },
      {
        label: { ar: 'نوع الزجاج', en: 'Glass Specification' },
        value: { ar: 'سيكوريت مصفح عالي العزل', en: 'High-Insulation Tempered Laminated' },
      },
    ],
    featured: true,
  },
];
