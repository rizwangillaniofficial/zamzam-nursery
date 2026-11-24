import type { Product } from './products';
import { products } from './products';

export interface QuizState {
  space: string;
  light: string;
  experience: string;
  water: string;
  petSafe: boolean;
}

export const quizSteps = [
  {
    key: 'space' as const,
    question: 'Where will you place your plant?',
    options: [
      { value: 'living', label: 'Living Room' },
      { value: 'bedroom', label: 'Bedroom' },
      { value: 'office', label: 'Office / Desk' },
      { value: 'balcony', label: 'Balcony / Terrace' },
      { value: 'garden', label: 'Garden' },
    ],
  },
  {
    key: 'light' as const,
    question: 'How much natural light is available?',
    options: [
      { value: 'low', label: 'Not much — a dim corner' },
      { value: 'medium', label: 'Bright but indirect' },
      { value: 'high', label: 'Plenty of direct sun' },
    ],
  },
  {
    key: 'experience' as const,
    question: 'How experienced are you with plants?',
    options: [
      { value: 'beginner', label: 'Total beginner' },
      { value: 'some', label: 'I have kept a few alive' },
      { value: 'expert', label: 'Green thumb' },
    ],
  },
  {
    key: 'water' as const,
    question: 'How often can you water your plants?',
    options: [
      { value: 'rarely', label: 'Every 2–3 weeks at best' },
      { value: 'sometimes', label: 'Once every week or two' },
      { value: 'often', label: 'Regularly — a few times a week' },
    ],
  },
  {
    key: 'petSafe' as const,
    question: 'Do you require pet-safe plants?',
    options: [
      { value: 'yes', label: 'Yes — I have curious pets' },
      { value: 'no', label: 'No — no pets at home' },
    ],
  },
];

export function getRecommendations(quiz: QuizState, wishlist: string[]): Product[] {
  const lightMap: Record<string, string> = { low: 'Low Light', medium: 'Bright Indirect', high: 'Direct Sun' };
  const careMap: Record<string, string[]> = {
    beginner: ['Easy'],
    some: ['Easy', 'Moderate'],
    expert: ['Easy', 'Moderate', 'Expert'],
  };
  const waterMap: Record<string, string[]> = {
    rarely: ['Every 2–3 weeks', 'Every 1–2 weeks'],
    sometimes: ['Every 2–3 weeks', 'Every 1–2 weeks', 'Weekly'],
    often: ['Weekly', 'Twice a week'],
  };
  const idealLight = lightMap[quiz.light];
  const careOk = careMap[quiz.experience] ?? ['Easy', 'Moderate', 'Expert'];
  const waterOk = waterMap[quiz.water] ?? ['Weekly', 'Every 1–2 weeks', 'Every 2–3 weeks', 'Twice a week'];

  const scored = products
    .map((p) => {
      let score = 0;
      if (quiz.space !== 'any' && p.spaces.includes(quiz.space as never)) score += 3;
      if (p.light === idealLight) score += 2;
      if (careOk.includes(p.care)) score += 2;
      else score -= 2;
      if (waterOk.includes(p.water)) score += 1;
      if (quiz.petSafe) score += p.petSafe ? 3 : -4;
      if (wishlist.includes(p.id)) score += 1;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map((s) => s.p);
}
