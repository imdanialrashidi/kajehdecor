export interface Testimonial {
  name: string;
  location: string;
  projectType: string;
  quote: string;
  avatar?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'خانم دکتر صادقیان',
    location: 'کرج، مهرشهر',
    projectType: 'بازسازی مسکونی',
    quote: 'از زحمات تمام دوستان خوب این تیم حرفه‌ای تشکر می‌کنم... بابت وجدان کاری بالا و مسئولیت‌پذیری واقعاً راضی هستم.',
  },
  {
    name: 'خانم مهندس اشرفی',
    location: 'تهران',
    projectType: 'طراحی و دکوراسیون تجاری و اداری',
    quote: 'طراحی و اجرای دفتر کارمون انجام دادن. بسیار با اخلاق و تیم حرفه‌ای.',
  },
  {
    name: 'جناب آقای قدری',
    location: 'استان البرز',
    projectType: 'دکوراسیون تجاری اداری',
    quote: 'بسیار عالی هستید. ممنون از تیم حرفه‌ای شما.',
    avatar: undefined,
  },
];
