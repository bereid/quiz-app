import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { QuestionType } from '../../types';
import * as actionTypes from '../../store/actionTypes';

import Button from 'react-bootstrap/Button';
import { AnswerContainer, CardContainer } from '../../components/Containers';
import { Title, QuestionText } from '../../components/Texts';

import { findNextRoute, findAndAnswerQuestion } from '../../helpers';

const Question = () => {
  const { id } = useParams<Record<string, any>>();
  const questions = useSelector((state) => state) as QuestionType[];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questionToAnswer = useMemo(
    () => questions.find((q) => q.id.toString() === id),
    [id, questions]
  );

  const setQustionAnswer = (answer: string) => {
    dispatch({
      type: actionTypes.SET_QUESTIONS,
      payload: findAndAnswerQuestion(id, questions, answer),
    });
    navigate(findNextRoute(id, questions));
  };

  if (!questionToAnswer) return null;

  return (
    <CardContainer>
      <Title>{questionToAnswer.category}</Title>
      <QuestionText
        dangerouslySetInnerHTML={{ __html: questionToAnswer.question }}
      />
      <AnswerContainer>
        <Button onClick={() => setQustionAnswer('True')} variant="success">
          True
        </Button>
        <Button onClick={() => setQustionAnswer('False')} variant="danger">
          False
        </Button>
      </AnswerContainer>
    </CardContainer>
  );
};

export default Question;
