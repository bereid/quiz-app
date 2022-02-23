import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 5rem auto;
  padding: 2rem;
  min-height: 400px;
  max-width: 400px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnswerContainer = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-evenly;
`;
