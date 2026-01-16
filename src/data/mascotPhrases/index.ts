/**
 * Bit the Robot - Mascot Phrases from BitLingo App
 * Loads phrases from the app's mascotPhrases directory
 */

export type SupportedLang = 
  | 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' 
  | 'ru' | 'zh' | 'ja' | 'ko' | 'ar'
  | 'he' | 'hi' | 'tr' | 'pl' | 'uk';

// Import all phrase modules (they use export default)
// Using dynamic imports that Astro can handle
import enPhrasesModule from './en.js';
import esPhrasesModule from './es.js';
import frPhrasesModule from './fr.js';
import dePhrasesModule from './de.js';
import itPhrasesModule from './it.js';
import ptPhrasesModule from './pt.js';
import ruPhrasesModule from './ru.js';
import zhPhrasesModule from './zh.js';
import jaPhrasesModule from './ja.js';
import koPhrasesModule from './ko.js';
import arPhrasesModule from './ar.js';
import hePhrasesModule from './he.js';
import hiPhrasesModule from './hi.js';
import trPhrasesModule from './tr.js';
import plPhrasesModule from './pl.js';
import ukPhrasesModule from './uk.js';

// Extract default export (JS files use export default)
// Handle both ESM default exports and CommonJS
const getPhrases = (module: any) => {
  if (module.default) return module.default;
  if (module.phrases) return module.phrases;
  return module;
};

export const phrases: Record<SupportedLang, any> = {
  en: getPhrases(enPhrasesModule),
  es: getPhrases(esPhrasesModule),
  fr: getPhrases(frPhrasesModule),
  de: getPhrases(dePhrasesModule),
  it: getPhrases(itPhrasesModule),
  pt: getPhrases(ptPhrasesModule),
  ru: getPhrases(ruPhrasesModule),
  zh: getPhrases(zhPhrasesModule),
  ja: getPhrases(jaPhrasesModule),
  ko: getPhrases(koPhrasesModule),
  ar: getPhrases(arPhrasesModule),
  he: getPhrases(hePhrasesModule),
  hi: getPhrases(hiPhrasesModule),
  tr: getPhrases(trPhrasesModule),
  pl: getPhrases(plPhrasesModule),
  uk: getPhrases(ukPhrasesModule),
};

/**
 * Get all phrases for a language, flattened into a single array
 * This combines all categories and subcategories
 */
export function getAllPhrases(lang: SupportedLang): string[] {
  const langPhrases = phrases[lang] || phrases.en || {};
  const allPhrases: string[] = [];

  function extractPhrases(obj: any): void {
    if (Array.isArray(obj)) {
      allPhrases.push(...obj);
    } else if (typeof obj === 'object' && obj !== null) {
      Object.values(obj).forEach(value => extractPhrases(value));
    }
  }

  extractPhrases(langPhrases);
  return allPhrases;
}

/**
 * Get random phrase from a specific category
 */
export function getRandomPhraseFromCategory(
  lang: SupportedLang,
  category: string,
  subcategory?: string
): string | null {
  const langPhrases = phrases[lang] || phrases.en || {};
  
  if (!langPhrases[category]) {
    return null;
  }

  let categoryPhrases = langPhrases[category];
  
  // If subcategory specified and exists
  if (subcategory && categoryPhrases[subcategory]) {
    categoryPhrases = categoryPhrases[subcategory];
  }
  
  if (Array.isArray(categoryPhrases)) {
    return categoryPhrases[Math.floor(Math.random() * categoryPhrases.length)];
  }
  
  // If it's an object with subcategories, pick random subcategory
  if (typeof categoryPhrases === 'object' && categoryPhrases !== null) {
    const subcats = Object.keys(categoryPhrases);
    const randomSubcat = subcats[Math.floor(Math.random() * subcats.length)];
    const subPhrases = categoryPhrases[randomSubcat];
    if (Array.isArray(subPhrases)) {
      return subPhrases[Math.floor(Math.random() * subPhrases.length)];
    }
  }
  
  return null;
}

/**
 * Get a completely random phrase from any category
 */
export function getRandomPhrase(lang: SupportedLang): string {
  const allPhrases = getAllPhrases(lang);
  if (allPhrases.length === 0) {
    return "Hi! I'm Bit! 🤖";
  }
  return allPhrases[Math.floor(Math.random() * allPhrases.length)];
}
