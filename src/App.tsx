import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Finish from './pages/Finish';
import StartPage from './pages/StartPage';
import Question from './pages/Question';

import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/quiz-app/finish" element={<Finish />} />
          <Route path="/quiz-app/question/:id" element={<Question />} />
          <Route path="/quiz-app/" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
