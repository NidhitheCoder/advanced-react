import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AlbumDetails } from './components/AlbumDetails';
import { Login } from './components/Login';
import { AlbumsList } from './components/AlbumsList';
import { Home } from './components/Home';

const ProtectedRoute = ({ user }) => user ? <Outlet /> : <Navigate to="/login" replace />;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<ProtectedRoute user={true} />} >
          <Route index element={<AlbumsList />} />
          <Route path=":id" >
            <Route index element={<AlbumDetails />} />
            <Route path="details" element={<AlbumDetails />} />
            <Route path="edit" element={<AlbumDetails />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
