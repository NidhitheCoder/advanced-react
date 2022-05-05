import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './auth';
import { SuperHerosPage } from './components/Superheros.page';
import { RQSuperHerosPage } from './components/RQSuperHeros.page';
import { HomePage } from './components/Home.page';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import { Login } from './components/Login.page';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DynamicParallelPage } from './components/DynamicParallelQueries.page';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient} >
        <Router>
          <div className="main-container">
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
              <Route path="/login" element={<Login />} />
              <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
              <Route path="/rq-super-heros/:heroId" element={<ProtectedRoute><RQSuperHeroPage /></ProtectedRoute>} />
              <Route path="/super-heros" element={<SuperHerosPage />} />
              <Route path="/rq-super-heros" element={<RQSuperHerosPage />} />
              <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroIds={[1,3,4]} />} />
            </Routes>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
