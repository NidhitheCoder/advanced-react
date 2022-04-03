import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SuperHerosPage } from './components/Superheros.page';
import { RQSuperHerosPage } from './components/RQSuperHeros.page';
import { HomePage } from './components/Home.page'

function App() {
  return (
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
          <Route path="/super-heros">
            <SuperHerosPage />
          </Route>
          <Route path="/rq-super-heros">
            <RQSuperHerosPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
