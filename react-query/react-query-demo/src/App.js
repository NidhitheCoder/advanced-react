import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SuperHerosPage } from './components/Superheros.page';
import { RQSuperHerosPage } from './components/RQSuperHeros.page';
import { HomePage } from './components/Home.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="super-heros">Traditional Super Heros</Link>
              </li>
              <li>
                <Link to="rq-super-heros">RQ Super Heros</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heros" element={<SuperHerosPage />} />
            <Route path="/rq-super-heros" element={<RQSuperHerosPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
