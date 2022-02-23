import { questionReducer } from './reducers/questionsReducer';
import { createStore } from 'redux';

export const store = createStore(questionReducer);
