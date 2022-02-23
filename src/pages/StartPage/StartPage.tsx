import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuizQuestions } from '../../api/getQuiz.api';
import { useDispatch } from 'react-redux';

import { QuestionType } from '../../types';
import * as actionTypes from '../../store/actionTypes';

import Button from 'react-bootstrap/Button';
import { CardContainer } from '../../components/Containers';
import { Description, Title } from '../../components/Texts';
import Spinner from 'react-bootstrap/Spinner';

import { uid } from '../../helpers';

// The API is ready to give questions back based on different settings set by query params (amount, difficulty, type).
// I set these as constants but the app is easily scalable in the future for eg. with the option of choosing these vars from a dropdown.
const DEFAULT_AMOUNT = 10;
const DEFAULT_DIFFICULTY = 'hard';
const DEFAULT_TYPE = 'boolean';

const StartPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchQuiz = async () => {
    try {
      setLoading(true);
      const quizResponse = await getQuizQuestions({
        amount: DEFAULT_AMOUNT,
        difficulty: DEFAULT_DIFFICULTY,
        type: DEFAULT_TYPE,
      });

      if (quizResponse) {
        const uniqueQuestionTexts: string[] = [];
        let questions: QuestionType[] = [];
        quizResponse.data.results.forEach((q) => {
          if (!uniqueQuestionTexts.includes(q.question)) {
            questions.push({
              ...q,
              id: uid(),
            });
          }
        });
        dispatch({ type: actionTypes.SET_QUESTIONS, payload: questions });
        return questions;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onStartClick = () => {
    fetchQuiz().then((questions) => {
      const firstQuestionId = questions && questions[0].id;
      navigate(`/quiz-app/question/${firstQuestionId}`);
    });
  };

  return (
    <CardContainer>
      <Title>Welcome to Trivia Challange!</Title>
      <Description>
        You will be presented with {DEFAULT_AMOUNT}{' '}
        {DEFAULT_TYPE === 'boolean' ? 'True or false' : ''} questions.
      </Description>
      <Description>Can you score 100%?</Description>
      <Button disabled={loading} onClick={onStartClick}>
        {loading ? <Spinner animation="border" /> : 'Start'}
      </Button>
    </CardContainer>
  );
};

export default StartPage;
