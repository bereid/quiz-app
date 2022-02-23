import { QuestionType } from './types';

export const uid = function () {
  return parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(16)
      .toString()
      .replace('.', '')
  );
};

export const ERROR_ROUTE = '/error';
export const FINISH_ROUTE = '/finish';
export const QUESTION_ROUTE = '/question/';

export const findAndAnswerQuestion = (
  id: string,
  questions: QuestionType[],
  answer: string
) =>
  questions.map((q) =>
    q.id === Number(id) ? { ...q, userAnswer: answer } : { ...q }
  );

export const findNextRoute = (id: string, questions: QuestionType[]) => {
  const currentQuestionIndex = questions.findIndex((q) => q.id === Number(id));
  if (currentQuestionIndex === -1) return ERROR_ROUTE;
  if (currentQuestionIndex === questions.length - 1) return FINISH_ROUTE;
  return QUESTION_ROUTE + questions[currentQuestionIndex + 1].id.toString();
};

export const isAnswerCorrect = (q: QuestionType) =>
  q.userAnswer.toLowerCase() === q.correct_answer.toLowerCase();

export const calculateScore = (questions: QuestionType[]) => {
  let correct = 0;
  const all = questions.length;
  questions.forEach((q) => {
    if (q.userAnswer === q.correct_answer) correct += 1;
  });
  return `${correct}/${all}`;
};

export const questionOrder = (
  question: QuestionType,
  questions: QuestionType[]
) => {
  const index = questions.findIndex(
    (q) => q.id.toString() === question.id.toString()
  );
  return `${index + 1}/${questions.length}`;
};
