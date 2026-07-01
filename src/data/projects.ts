export interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  category: string; // for filtering
  services: string[];
  area: string;
  style: string;
  challenge: string;
  solution: string;
  materials: string[];
  testimonial?: { name: string; quote: string };
  isDemo: boolean; // true = placeholder content
  metaTitle: string;
  metaDesc: string;
}

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'همه پروژه‌ها' },
  { key: 'kitchen', label: 'آشپزخانه' },
  { key: 'residential', label: 'مسکونی' },
  { key: 'office', label: 'اداری' },
  { key: 'commercial', label: 'تجاری' },
  { key: 'renovation', label: 'بازسازی' },
] as const;

export const PROJECTS: Project[] = [
  {
    slug: 'modern-kitchen-mehranshahr',
    title: 'آشپزخانه مدرن در مهرانشهر',
    location: 'کرج، مهرانشهر',
    type: 'آشپزخانه و کابینت',
    category: 'kitchen',
    services: ['طراحی سهبعدی', 'ساخت کابینت', 'انتخاب متریال', 'اجرا'],
    area: '۱۶ متر',
    style: 'مدرن',
    challenge: 'آشپزخانه قدیمی با فضای محدود و چیدمان نامناسب که استفاده بهینه از فضا را دشوار می‌کرد.',
    solution: 'با طراحی سهبعدی و چیدمان جزیره‌ای، فضای ذخیره‌سازی ۴۰٪ افزایش یافت و رفت‌وآمد در آشپزخانه بهینه شد.',
    materials: ['MDF مات', 'صفحه کوارتز', 'یراق‌آلات آرام‌بند', 'نورپردازی LED'],
    testimonial: { name: 'خانم محمدی', quote: 'آشپزخانه‌ام دقیقاً همونی شد که می‌خواستم.' },
    isDemo: true,
    metaTitle: 'نمونه پروژه آشپزخانه مدرن مهرانشهر | کاژه دکور',
    metaDesc: 'بازسازی و طراحی آشپزخانه مدرن در مهرانشهر کرج با کابینت MDF، طراحی سهبعدی و اجرای حرفه‌ای.',
  },
  {
    slug: 'apartment-redesign-tehran',
    title: 'بازسازی آپارتمان مسکونی در تهران',
    location: 'تهران',
    type: 'طراحی داخلی و بازسازی',
    category: 'residential',
    services: ['طراحی سهبعدی', 'بازسازی کامل', 'انتخاب متریال', 'اجرا'],
    area: '۸۵ متر',
    style: 'نئوکلاسیک',
    challenge: 'آپارتمان قدیمی ۱۵ سال ساخت با تأسیسات فرسوده و چیدمان تاریک و بسته.',
    solution: 'بازسازی کامل با تغییر چیدمان، نورپردازی جدید و استفاده از رنگ‌های روشن برای بزرگ‌تر نشان دادن فضا.',
    materials: ['سرامیک طرح سنگ', 'کاغذ دیواری', 'کابینت های‌گلاس', 'نورپردازی سقفی'],
    isDemo: true,
    metaTitle: 'بازسازی آپارتمان مسکونی تهران | کاژه دکور',
    metaDesc: 'بازسازی کامل آپارتمان مسکونی در تهران با طراحی نئوکلاسیک، طراحی سهبعدی و اجرای حرفه‌ای.',
  },
  {
    slug: 'office-design-karaj',
    title: 'طراحی دفتر کار مدرن در کرج',
    location: 'کرج',
    type: 'طراحی اداری',
    category: 'office',
    services: ['طراحی سهبعدی', 'چیدمان فضا', 'انتخاب مبلمان', 'اجرا'],
    area: '۱۲۰ متر',
    style: 'مدرن مینیمال',
    challenge: 'دفتر کار با فضای باز بدون تقسیم‌بندی مناسب و نورپردازی ضعیف که تمرکز کارکنان را تحت تأثیر قرار داده بود.',
    solution: 'تقسیم‌بندی هوشمندانه فضا با پارتیشن شیشه‌ای، نورپردازی استاندارد و فضاهای مجزای جلسات.',
    materials: ['پارتیشن شیشه‌ای', 'کفپوش اپوکسی', 'سقف کاذب آکوستیک', 'مبلمان ارگونومیک'],
    isDemo: true,
    metaTitle: 'طراحی دفتر کار مدرن در کرج | کاژه دکور',
    metaDesc: 'طراحی حرفه‌ای دفتر کار مدرن در کرج با پارتیشن‌بندی، نورپردازی و مبلمان ارگونومیک.',
  },
  {
    slug: 'restaurant-design-tehran',
    title: 'طراحی رستوران سنتی-مدرن',
    location: 'تهران',
    type: 'طراحی تجاری',
    category: 'commercial',
    services: ['طراحی سهبعدی', 'دکوراسیون داخلی', 'نورپردازی', 'اجرا'],
    area: '۲۰۰ متر',
    style: 'تلفیقی سنتی-مدرن',
    challenge: 'فضای خالی بدون هویت بصری که نیاز به جذب مشتری و ایجاد تجربه متفاوت داشت.',
    solution: 'ترکیب عناصر سنتی ایرانی با طراحی مدرن، نورپردازی گرم و فضاسازی مناسب برای صمیمیت.',
    materials: ['آجر دکوراتیو', 'چوب طبیعی', 'فلز مشکی', 'نورپردازی آویز'],
    isDemo: true,
    metaTitle: 'طراحی رستوران سنتی-مدرن تهران | کاژه دکور',
    metaDesc: 'طراحی داخلی رستوران با سبک تلفیقی سنتی و مدرن در تهران. طراحی سهبعدی و اجرای حرفه‌ای.',
  },
  {
    slug: 'villa-renovation-alborz',
    title: 'بازسازی ویلا در البرز',
    location: 'استان البرز',
    type: 'بازسازی ویلا',
    category: 'renovation',
    services: ['بازسازی کامل', 'طراحی سهبعدی', 'نما', 'محوطه'],
    area: '۲۵۰ متر',
    style: 'مدرن',
    challenge: 'ویلای قدیمی با نمای فرسوده و فضای داخلی تاریک که نیاز به بازسازی کامل داشت.',
    solution: 'بازسازی کامل شامل نما، تأسیسات، فضای داخلی و محوطه با رویکرد مدرن و روشن.',
    materials: ['سنگ تراورتن', 'شیشه دوجداره', 'کفپوش پرسلان', 'سیستم هوشمند'],
    isDemo: true,
    metaTitle: 'بازسازی ویلا در استان البرز | کاژه دکور',
    metaDesc: 'بازسازی کامل ویلا در استان البرز شامل نما، فضای داخلی و محوطه با طراحی مدرن.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return PROJECTS;
  return PROJECTS.filter((p) => p.category === category);
}
