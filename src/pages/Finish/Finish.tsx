import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actionTypes from '../../store/actionTypes';
import { QuestionType } from '../../types';

import Button from 'react-bootstrap/Button';
import { CardContainer, IconContainer } from '../../components/Containers';
import { Title, SmallText, QuestionText } from '../../components/Texts';
import { QuestionRow } from '../../components/QuestionRow';

import { FcCheckmark, FcCancel } from 'react-icons/fc';

import { calculateScore, isAnswerCorrect } from '../../helpers';

const Finish = () => {
  const questions = useSelector((state) => state) as QuestionType[];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startNew = () => {
    dispatch({ type: actionTypes.SET_QUESTIONS, payload: [] });
    navigate('/');
  };

  return (
    <CardContainer>
      <Title>Your Score: {calculateScore(questions)}</Title>
      {questions.map((q) => (
        <QuestionRow>
          {isAnswerCorrect(q) ? (
            <FcCheckmark size={30} />
          ) : (
            <IconContainer>
              <FcCancel size={30} />
              <SmallText>Correct answer: {q.correct_answer}</SmallText>
            </IconContainer>
          )}
          <QuestionText dangerouslySetInnerHTML={{ __html: q.question }} />
        </QuestionRow>
      ))}
      <Button style={{ marginTop: '1rem' }} onClick={startNew}>
        Play again?
      </Button>
    </CardContainer>
  );
};

export default Finish;
