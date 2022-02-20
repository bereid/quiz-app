import { AxiosResponse } from "axios";
import { apiClient } from ".";
import { difficulty, Question, quizType } from "../types";
import { GET_QUESTIONS } from './constants';

interface getQuizQuestionsProps {
  amount: number;
  difficulty: difficulty;
  type: quizType;
};

interface QuizResponse {
  response_code: number;
  results: Question[];
}

export const getQuizQuestions = (props: getQuizQuestionsProps): Promise<AxiosResponse<QuizResponse>> => {
  return apiClient.get(GET_QUESTIONS(props.amount, props.difficulty, props.type));
}