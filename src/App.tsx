import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Pokemon from './pages/pokemon';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
