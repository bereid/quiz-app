export type difficulty = 'easy' | 'medium' | 'hard';
export type quizType = 'boolean' | 'multiple';

export interface Question {
  category: string;
  type: quizType;
  difficulty: difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[]
}