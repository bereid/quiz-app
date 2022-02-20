import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getQuizQuestions } from './api/getQuiz.api';
import { Question } from './types';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const quizResponse = await getQuizQuestions({ amount: 10, difficulty: 'hard', type: 'boolean' });

        if (quizResponse) {
          setQuestions(quizResponse.data.results);
        }
      } catch (e) {
        console.log(e);
      }
    })()
  }, []);

  console.log(questions)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
