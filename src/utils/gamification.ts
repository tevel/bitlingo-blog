/**
 * Gamification System
 * Tracks user progress: streaks, XP, badges
 * Stores data in localStorage
 */

export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  lastVisit: string; // ISO date string
  articlesRead: string[]; // slugs
  gamesPlayed: number;
  quizzesCompleted: number;
  badges: string[];
  totalVisits: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: (progress: UserProgress) => boolean;
}

// XP rewards
export const XP_REWARDS = {
  DAILY_VISIT: 10,
  ARTICLE_READ: 25,
  QUIZ_COMPLETE: 50,
  GAME_COMPLETE: 30,
  STREAK_BONUS: 5, // per streak day
  FIRST_VISIT: 100,
};

// Level thresholds
export const LEVELS = [
  { level: 1, xp: 0, title: 'Beginner' },
  { level: 2, xp: 100, title: 'Learner' },
  { level: 3, xp: 300, title: 'Explorer' },
  { level: 4, xp: 600, title: 'Enthusiast' },
  { level: 5, xp: 1000, title: 'Scholar' },
  { level: 6, xp: 1500, title: 'Expert' },
  { level: 7, xp: 2200, title: 'Master' },
  { level: 8, xp: 3000, title: 'Champion' },
  { level: 9, xp: 4000, title: 'Legend' },
  { level: 10, xp: 5500, title: 'Polyglot' },
];

// Badge definitions
export const BADGES: Badge[] = [
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Start your language learning journey',
    icon: '🚀',
    requirement: (p) => p.totalVisits >= 1,
  },
  {
    id: 'bookworm',
    name: 'Bookworm',
    description: 'Read 5 articles',
    icon: '📚',
    requirement: (p) => p.articlesRead.length >= 5,
  },
  {
    id: 'quiz_master',
    name: 'Quiz Master',
    description: 'Complete 10 quizzes',
    icon: '🎯',
    requirement: (p) => p.quizzesCompleted >= 10,
  },
  {
    id: 'game_lover',
    name: 'Game Lover',
    description: 'Play 20 games',
    icon: '🎮',
    requirement: (p) => p.gamesPlayed >= 20,
  },
  {
    id: 'streak_starter',
    name: 'Streak Starter',
    description: 'Achieve a 3-day streak',
    icon: '🔥',
    requirement: (p) => p.streak >= 3,
  },
  {
    id: 'week_warrior',
    name: 'Week Warrior',
    description: 'Achieve a 7-day streak',
    icon: '⚡',
    requirement: (p) => p.streak >= 7,
  },
  {
    id: 'dedicated_learner',
    name: 'Dedicated Learner',
    description: 'Achieve a 30-day streak',
    icon: '👑',
    requirement: (p) => p.streak >= 30,
  },
  {
    id: 'level_5',
    name: 'Rising Star',
    description: 'Reach level 5',
    icon: '⭐',
    requirement: (p) => p.level >= 5,
  },
  {
    id: 'level_10',
    name: 'Polyglot',
    description: 'Reach level 10',
    icon: '🏆',
    requirement: (p) => p.level >= 10,
  },
  {
    id: 'xp_1000',
    name: 'XP Hunter',
    description: 'Earn 1000 XP',
    icon: '💎',
    requirement: (p) => p.xp >= 1000,
  },
];

const STORAGE_KEY = 'bitlingo-progress';

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return getDefaultProgress();
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore errors
  }
  return getDefaultProgress();
}

export function getDefaultProgress(): UserProgress {
  return {
    xp: 0,
    level: 1,
    streak: 0,
    lastVisit: '',
    articlesRead: [],
    gamesPlayed: 0,
    quizzesCompleted: 0,
    badges: [],
    totalVisits: 0,
  };
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore errors
  }
}

export function calculateLevel(xp: number): number {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xp) {
      return LEVELS[i].level;
    }
  }
  return 1;
}

export function getLevelInfo(level: number) {
  return LEVELS.find(l => l.level === level) || LEVELS[0];
}

export function getNextLevelInfo(level: number) {
  return LEVELS.find(l => l.level === level + 1);
}

export function checkAndAwardBadges(progress: UserProgress): string[] {
  const newBadges: string[] = [];
  
  BADGES.forEach(badge => {
    if (!progress.badges.includes(badge.id) && badge.requirement(progress)) {
      newBadges.push(badge.id);
    }
  });
  
  return newBadges;
}

export function updateStreak(progress: UserProgress): { progress: UserProgress; xpGained: number } {
  const today = new Date().toISOString().split('T')[0];
  const lastVisit = progress.lastVisit;
  let xpGained = 0;
  
  if (!lastVisit) {
    // First visit ever
    progress.streak = 1;
    progress.lastVisit = today;
    progress.totalVisits = 1;
    xpGained = XP_REWARDS.FIRST_VISIT + XP_REWARDS.DAILY_VISIT;
  } else if (lastVisit === today) {
    // Already visited today
    xpGained = 0;
  } else {
    const lastDate = new Date(lastVisit);
    const todayDate = new Date(today);
    const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Consecutive day
      progress.streak += 1;
      xpGained = XP_REWARDS.DAILY_VISIT + (progress.streak * XP_REWARDS.STREAK_BONUS);
    } else {
      // Streak broken
      progress.streak = 1;
      xpGained = XP_REWARDS.DAILY_VISIT;
    }
    
    progress.lastVisit = today;
    progress.totalVisits += 1;
  }
  
  progress.xp += xpGained;
  progress.level = calculateLevel(progress.xp);
  
  // Check for new badges
  const newBadges = checkAndAwardBadges(progress);
  progress.badges = [...progress.badges, ...newBadges];
  
  return { progress, xpGained };
}

export function recordArticleRead(progress: UserProgress, slug: string): { progress: UserProgress; xpGained: number } {
  if (progress.articlesRead.includes(slug)) {
    return { progress, xpGained: 0 };
  }
  
  progress.articlesRead.push(slug);
  progress.xp += XP_REWARDS.ARTICLE_READ;
  progress.level = calculateLevel(progress.xp);
  
  const newBadges = checkAndAwardBadges(progress);
  progress.badges = [...progress.badges, ...newBadges];
  
  return { progress, xpGained: XP_REWARDS.ARTICLE_READ };
}

export function recordQuizComplete(progress: UserProgress): { progress: UserProgress; xpGained: number } {
  progress.quizzesCompleted += 1;
  progress.xp += XP_REWARDS.QUIZ_COMPLETE;
  progress.level = calculateLevel(progress.xp);
  
  const newBadges = checkAndAwardBadges(progress);
  progress.badges = [...progress.badges, ...newBadges];
  
  return { progress, xpGained: XP_REWARDS.QUIZ_COMPLETE };
}

export function recordGameComplete(progress: UserProgress): { progress: UserProgress; xpGained: number } {
  progress.gamesPlayed += 1;
  progress.xp += XP_REWARDS.GAME_COMPLETE;
  progress.level = calculateLevel(progress.xp);
  
  const newBadges = checkAndAwardBadges(progress);
  progress.badges = [...progress.badges, ...newBadges];
  
  return { progress, xpGained: XP_REWARDS.GAME_COMPLETE };
}

// Expose globally for components
if (typeof window !== 'undefined') {
  (window as any).bitlingoProgress = {
    getProgress,
    saveProgress,
    updateStreak,
    recordArticleRead,
    recordQuizComplete,
    recordGameComplete,
    getLevelInfo,
    getNextLevelInfo,
    BADGES,
    LEVELS,
    XP_REWARDS,
  };
}
