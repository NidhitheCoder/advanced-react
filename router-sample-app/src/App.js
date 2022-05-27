import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Albums } from './components/Albums';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
