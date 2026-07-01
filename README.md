# کاژه دکور — Kajeh Decor Website

وبسایت رسمی کاژه دکور: طراحی و اجرای دکوراسیون داخلی، آشپزخانه، کابینت و بازسازی.

## تکنولوژی‌ها

- [Astro](https://astro.build/) v7 — Static site generator
- TypeScript (strict)
- Plain CSS with custom properties (design tokens)
- Vazirmatn webfont (Google Fonts)
- Static output for Cloudflare Pages

## نحوه اجرا

```bash
npm install
npm run dev
```

سپس به `http://localhost:4321` بروید.

## نحوه ساخت

```bash
npm run build
```

خروجی در پوشه `dist/` ساخته می‌شود.

## نحوه پیش‌نمایش

```bash
npm run build
npm run preview
```

## استقرار در Cloudflare Pages

1. به Cloudflare Pages بروید
2. مخزن Git را متصل کنید
3. تنظیمات:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. دامنه `kajehdecor.com` را متصل کنید

## ساختار پروژه

```
src/
├── components/     # کامپوننت‌های Astro
├── data/           # داده‌های ساختاریافته (خدمات، پروژه‌ها، مقالات)
├── layouts/        # لایه‌بندی‌های پایه
├── pages/          # صفحات (مسیرها)
├── styles/         # CSS (توکن‌ها و استایل‌های سراسری)
└── utils/          # ابزارهای کمکی
```

## صفحات

| مسیر | صفحه |
|------|------|
| `/` | صفحه اصلی |
| `/services/` | خدمات |
| `/services/[slug]/` | جزئیات خدمت |
| `/portfolio/` | نمونه‌کارها |
| `/portfolio/[slug]/` | جزئیات پروژه |
| `/blog/` | مقالات |
| `/blog/[slug]/` | مقاله |
| `/about/` | درباره ما |
| `/contact/` | تماس |
| `/consultation/` | مشاوره |
| `/quiz/` | .quiz سبک |

## شماره واتساپ

شماره واتساپ در `src/data/site.ts` تعریف شده:
```typescript
whatsappNumber: '989934202034'
```

برای تغییر، مقدار `whatsappNumber` را به‌روزرسانی کنید.

## محدودیت‌های فعلی

- تصاویر واقعی ندارد (placeholder)
- محتوای مقالات دمو است
- محتوای پروژه‌ها دمو است (با برچسب مشخص)
- فایل `ASSETS_NEEDED.md` لیست کامل فایل‌های مورد نیاز را دارد
