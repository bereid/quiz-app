import { HashRouter, Routes, Route } from 'react-router-dom';

import Finish from './pages/Finish';
import StartPage from './pages/StartPage';
import Question from './pages/Question';

import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path="/finish" element={<Finish />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </HashRouter>
    </Layout>
  );
}

export default App;
