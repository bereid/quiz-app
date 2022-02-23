export const difficulties = ['easy', 'medium', 'hard'] as const;
export type difficulty = typeof difficulties[number];

export const quizTypes = ['boolean', 'multiple'] as const;
export type quizType = typeof quizTypes[number];

export interface QuestionType {
  category: string;
  type: quizType;
  difficulty: difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  id: number;
  userAnswer: string;
}
