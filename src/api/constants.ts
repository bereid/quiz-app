import { difficulty, quizType } from "../types";

export const GET_QUESTIONS = (amount: number, difficulty: difficulty, type: quizType) => 
  `api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;