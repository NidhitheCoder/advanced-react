import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Posts from './pages/posts';
import Post from './pages/post';
import AuthComponent from './components/AuthComponent';
import Dashboard from './pages/Dashboard';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={<AuthComponent component={<Dashboard />} />}
      />
      <Route path="/posts" element={<AuthComponent component={<Posts />} />} />
      <Route
        path="/posts/:id"
        element={<AuthComponent component={<Post />} />}
      />
      <Route
        path="*"
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
