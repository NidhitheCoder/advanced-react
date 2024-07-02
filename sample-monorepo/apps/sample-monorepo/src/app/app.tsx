import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Posts from './pages/posts';
import Post from './pages/post';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
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
