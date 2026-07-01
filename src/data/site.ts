export const SITE = {
  name: 'کاژه دکور',
  nameEn: 'Kajeh Decor',
  tagline: 'طراحی و اجرای دکوراسیون داخلی',
  description:
    'کاژه دکور، متخصص طراحی و اجرای دکوراسیون داخلی، آشپزخانه، کابینت و بازسازی با طراحی سهبعدی و مشاوره تخصصی در تهران و کرج.',
  url: 'https://kajehdecor.com',
  // WhatsApp number in international format (no +)
  whatsappNumber: '989934202034',
  phone: '09934202034',
  phoneLink: 'tel:+989934202034',
  email: '', // no email found on current site
  address: 'تهران، بزرگراه جناح، خیابان طاهریان، پلاک ۳',
  social: {
    instagram: 'https://www.instagram.com/kajehdecor/',
    telegram: 'https://t.me/Kajehdecor',
    eitaa: 'https://eitaa.com/kajehdecor',
    whatsapp: 'https://api.whatsapp.com/send?phone=989934202034',
  },
  serviceAreas: ['تهران', 'کرج', 'استان البرز'],
  designer: 'خانم محمدی',
} as const;

export const NAV_ITEMS = [
  { label: 'خانه', href: '/' },
  { label: 'خدمات', href: '/services/' },
  { label: 'نمونه‌کارها', href: '/portfolio/' },
  { label: 'روند همکاری', href: '/#process' },
  { label: 'پکیج‌ها', href: '/#packages' },
  { label: 'نظرات مشتریان', href: '/#testimonials' },
  { label: 'مقالات', href: '/blog/' },
  { label: 'تماس', href: '/contact/' },
] as const;
