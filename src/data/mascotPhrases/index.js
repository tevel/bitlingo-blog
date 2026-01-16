// Bit the Robot - Mascot phrases with lazy loading per language
// English is always bundled, other languages loaded on demand

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'ru', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ko', 'ar', 'he', 'hi', 'tr', 'pl', 'uk']

// English phrases (always bundled as fallback)
import enPhrases from './en.js'

// Cache for loaded language phrases
const loadedPhrases = { en: enPhrases }

// Dynamic import map for lazy loading
const phraseImports = {
  ru: () => import('./ru.js'),
  es: () => import('./es.js'),
  fr: () => import('./fr.js'),
  de: () => import('./de.js'),
  it: () => import('./it.js'),
  pt: () => import('./pt.js'),
  zh: () => import('./zh.js'),
  ja: () => import('./ja.js'),
  ko: () => import('./ko.js'),
  ar: () => import('./ar.js'),
  he: () => import('./he.js'),
  hi: () => import('./hi.js'),
  tr: () => import('./tr.js'),
  pl: () => import('./pl.js'),
  uk: () => import('./uk.js'),
}

// Load a language's phrases dynamically
export async function loadMascotPhrases(lang) {
  // Already loaded
  if (loadedPhrases[lang]) {
    return loadedPhrases[lang]
  }
  
  // English is always available
  if (lang === 'en') {
    return enPhrases
  }
  
  // Check if supported
  if (!phraseImports[lang]) {
    console.warn(`Mascot phrases not available for: ${lang}`)
    return enPhrases
  }
  
  try {
    const module = await phraseImports[lang]()
    loadedPhrases[lang] = module.default
    return module.default
  } catch (e) {
    console.error(`Failed to load mascot phrases for ${lang}:`, e)
    return enPhrases
  }
}

// Get phrases for a language (sync - returns cached or English fallback)
export function getMascotPhrases(lang) {
  return loadedPhrases[lang] || enPhrases
}

// Check if language phrases are loaded
export function isPhraseLanguageLoaded(lang) {
  return !!loadedPhrases[lang]
}

// Get all phrase categories
export const PHRASE_CATEGORIES = Object.keys(enPhrases)

// Get random phrase from category (uses specified language, falls back to English)
export function getRandomPhrase(category, subcategory = null, lang = 'en') {
  const phrases = loadedPhrases[lang] || enPhrases
  
  if (!phrases[category]) return null
  
  let categoryPhrases = phrases[category]
  if (subcategory && categoryPhrases[subcategory]) {
    categoryPhrases = categoryPhrases[subcategory]
  }
  
  if (Array.isArray(categoryPhrases)) {
    return categoryPhrases[Math.floor(Math.random() * categoryPhrases.length)]
  }
  
  // If it's an object with subcategories, pick random subcategory
  if (typeof categoryPhrases === 'object' && categoryPhrases !== null) {
    const subcats = Object.keys(categoryPhrases)
    const randomSubcat = subcats[Math.floor(Math.random() * subcats.length)]
    const subPhrases = categoryPhrases[randomSubcat]
    if (Array.isArray(subPhrases)) {
      return subPhrases[Math.floor(Math.random() * subPhrases.length)]
    }
  }
  
  return null
}

// Get phrase in specific language (with fallback to English)
// This function handles the new format where phrases are already in the target language
export function getPhraseInLanguage(phrase, langCode) {
  if (!phrase) return ''
  
  // In the new format, phrase is already a string in the correct language
  if (typeof phrase === 'string') return phrase
  
  // Legacy support: if phrase is an object with language keys
  if (typeof phrase === 'object' && phrase !== null) {
    // Map common language codes
    const langMap = {
      'en': 'en', 'en-US': 'en', 'en-GB': 'en',
      'ru': 'ru', 'ru-RU': 'ru',
      'es': 'es', 'es-ES': 'es', 'es-MX': 'es',
      'fr': 'fr', 'fr-FR': 'fr',
      'de': 'de', 'de-DE': 'de',
      'it': 'it', 'it-IT': 'it',
      'pt': 'pt', 'pt-BR': 'pt', 'pt-PT': 'pt',
      'zh': 'zh', 'zh-CN': 'zh', 'zh-TW': 'zh',
      'ja': 'ja', 'ja-JP': 'ja',
      'ko': 'ko', 'ko-KR': 'ko',
      'ar': 'ar', 'ar-SA': 'ar', 'ar-EG': 'ar',
      'he': 'he', 'he-IL': 'he',
      'hi': 'hi', 'hi-IN': 'hi',
      'tr': 'tr', 'tr-TR': 'tr',
      'pl': 'pl', 'pl-PL': 'pl',
      'uk': 'uk', 'uk-UA': 'uk',
    }
    
    const normalizedLang = langMap[langCode] || 'en'
    return phrase[normalizedLang] || phrase.en || ''
  }
  
  return ''
}

// Get phrases count
export function getPhrasesCount() {
  let count = 0
  const countPhrases = (obj) => {
    if (Array.isArray(obj)) {
      count += obj.length
    } else if (typeof obj === 'object' && obj !== null) {
      Object.values(obj).forEach(countPhrases)
    }
  }
  countPhrases(enPhrases)
  return count
}

// Re-export English phrases for backwards compatibility
export const MASCOT_PHRASES = enPhrases
