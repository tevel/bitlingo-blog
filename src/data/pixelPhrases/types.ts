/**
 * Pixel the Robot - Phrase Types
 * Categories and structure for robot phrases
 */

export type PhraseCategory = 
  | 'greeting'      // Time-based greetings
  | 'encourage'     // Encouragement phrases
  | 'feature'       // Feature explanations
  | 'tip'           // Learning tips
  | 'fact'          // Fun facts about languages
  | 'quiz'          // Translation quiz prompts
  | 'celebrate'     // Achievement celebrations
  | 'motivate'      // Motivation phrases
  | 'prompt'        // Interactive prompts
  | 'idle';         // Random thoughts

export type SupportedLang = 
  | 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' 
  | 'ru' | 'zh' | 'ja' | 'ko' | 'ar' | 'hi' 
  | 'tr' | 'pl' | 'uk' | 'he';

export interface PhraseSet {
  greeting: string[];
  encourage: string[];
  feature: string[];
  tip: string[];
  fact: string[];
  quiz: string[];
  celebrate: string[];
  motivate: string[];
  prompt: string[];
  idle: string[];
}

export type PhrasesDatabase = Record<SupportedLang, PhraseSet>;
