/**
 * Pixel the Robot - Phrases Database
 * 200+ phrases in 16 languages for interactive robot mascot
 */

import type { PhrasesDatabase, PhraseCategory, SupportedLang } from './types';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { de } from './de';
import { it } from './it';
import { pt } from './pt';
import { ru } from './ru';
import { zh } from './zh';
import { ja } from './ja';
import { ko } from './ko';
import { ar } from './ar';
import { hi } from './hi';
import { tr } from './tr';
import { pl } from './pl';
import { uk } from './uk';
import { he } from './he';

export const phrases: PhrasesDatabase = {
  en, es, fr, de, it, pt, ru, zh, ja, ko, ar, hi, tr, pl, uk, he
};

export type { PhraseCategory, SupportedLang, PhrasesDatabase };

/**
 * Get a random phrase from a specific category
 */
export function getRandomPhrase(lang: SupportedLang, category: PhraseCategory): string {
  const langPhrases = phrases[lang] || phrases.en;
  const categoryPhrases = langPhrases[category];
  return categoryPhrases[Math.floor(Math.random() * categoryPhrases.length)];
}

/**
 * Get a random phrase from any category
 */
export function getRandomAnyPhrase(lang: SupportedLang): { phrase: string; category: PhraseCategory } {
  const langPhrases = phrases[lang] || phrases.en;
  const categories: PhraseCategory[] = ['greeting', 'encourage', 'feature', 'tip', 'fact', 'quiz', 'celebrate', 'motivate', 'prompt', 'idle'];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const phrase = langPhrases[category][Math.floor(Math.random() * langPhrases[category].length)];
  return { phrase, category };
}

/**
 * Get time-based greeting
 */
export function getTimeGreeting(lang: SupportedLang): string {
  const hour = new Date().getHours();
  const langPhrases = phrases[lang] || phrases.en;
  const greetings = langPhrases.greeting;
  
  // Morning greetings (5-11)
  if (hour >= 5 && hour < 12) {
    return greetings.slice(0, 3)[Math.floor(Math.random() * 3)];
  }
  // Afternoon greetings (12-17)
  if (hour >= 12 && hour < 18) {
    return greetings.slice(3, 6)[Math.floor(Math.random() * 3)];
  }
  // Evening greetings (18-22)
  if (hour >= 18 && hour < 23) {
    return greetings.slice(6, 9)[Math.floor(Math.random() * 3)];
  }
  // Night greetings (23-4)
  return greetings.slice(9, 12)[Math.floor(Math.random() * 3)];
}

/**
 * Get phrase count for a language
 */
export function getPhraseCount(lang: SupportedLang): number {
  const langPhrases = phrases[lang] || phrases.en;
  return Object.values(langPhrases).reduce((sum, arr) => sum + arr.length, 0);
}

/**
 * Check if a language is supported
 */
export function isLanguageSupported(lang: string): lang is SupportedLang {
  return lang in phrases;
}
