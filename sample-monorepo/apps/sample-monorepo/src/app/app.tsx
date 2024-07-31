import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Posts from './pages/posts';
import SinglePost from './pages/SinglePost';
import AuthComponent from './components/AuthComponent';
import Dashboard from './pages/Dashboard';
import { ROUTES } from './constants';

export function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route
        path={ROUTES.dashboard}
        element={<AuthComponent component={<Dashboard />} />}
      />
      <Route
        path={ROUTES.posts}
        element={<AuthComponent component={<Posts />} />}
      />
      <Route
        path={ROUTES.singlePost}
        element={<AuthComponent component={<SinglePost />} />}
      />
      <Route
        path={ROUTES.notFound}
        element={
          <div>
            <p>Not found</p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
