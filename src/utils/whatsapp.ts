import { SITE } from '../data/site';

export interface LeadData {
  source?: string;
  service?: string;
  spaceType?: string;
  area?: string;
  city?: string;
  style?: string;
  budget?: string;
  name?: string;
  phone?: string;
  description?: string;
  timeline?: string;
  goal?: string;
}

export function buildWhatsAppUrl(data: LeadData): string {
  const lines: string[] = ['🔔 *درخواست مشاوره کاژه دکور*'];

  if (data.source) lines.push(`📍 منبع: ${data.source}`);
  if (data.service) lines.push(`🛠 خدمت: ${data.service}`);
  if (data.spaceType) lines.push(`🏠 فضا: ${data.spaceType}`);
  if (data.style) lines.push(`🎨 سبک: ${data.style}`);
  if (data.goal) lines.push(`🎯 هدف: ${data.goal}`);
  if (data.area) lines.push(`📐 متراژ: ${data.area}`);
  if (data.city) lines.push(`🏙 شهر: ${data.city}`);
  if (data.budget) lines.push(`💰 بودجه: ${data.budget}`);
  if (data.timeline) lines.push(`⏱ زمان‌بندی: ${data.timeline}`);
  if (data.name) lines.push(`👤 نام: ${data.name}`);
  if (data.phone) lines.push(`📞 تلفن: ${data.phone}`);
  if (data.description) lines.push(`📝 توضیحات: ${data.description}`);

  const text = lines.join('\n');
  const encoded = encodeURIComponent(text);

  return `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encoded}`;
}

export function sanitizeInput(value: string): string {
  return value
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000);
}
