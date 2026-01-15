/**
 * Calculate estimated reading time for content
 * Average reading speed: 200-250 words per minute
 */

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes); // At least 1 minute
}

export function formatReadingTime(minutes: number, lang: string = 'en'): string {
  const translations: Record<string, { min: string; read: string }> = {
    en: { min: 'min', read: 'read' },
    es: { min: 'min', read: 'lectura' },
    fr: { min: 'min', read: 'lecture' },
    de: { min: 'Min', read: 'Lesezeit' },
    it: { min: 'min', read: 'lettura' },
    pt: { min: 'min', read: 'leitura' },
    ru: { min: 'мин', read: 'чтение' },
    zh: { min: '分钟', read: '阅读' },
    ja: { min: '分', read: '読了' },
    ko: { min: '분', read: '읽기' },
    ar: { min: 'دقيقة', read: 'قراءة' },
    hi: { min: 'मिनट', read: 'पढ़ना' },
    tr: { min: 'dk', read: 'okuma' },
    pl: { min: 'min', read: 'czytania' },
    uk: { min: 'хв', read: 'читання' },
    he: { min: 'דקות', read: 'קריאה' },
  };

  const t = translations[lang] || translations.en;
  return `${minutes} ${t.min} ${t.read}`;
}
