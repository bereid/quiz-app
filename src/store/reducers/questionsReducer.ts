import { QuestionType } from '../../types';
import * as actionTypes from '../actionTypes';

const defaultState: QuestionType[] = [];
interface QuestionAction {
  type: string;
  payload: QuestionType[];
}

export const questionReducer = function (
  state = defaultState,
  action: QuestionAction
) {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
};
