import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api";
import { useAuth } from "../auth";
import './style.css';

export const HomePage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [albumData, setAlbumData] = useState([]);

  const handleLogout = () => {
    auth.logout();
    navigate('/login', { replace: true });
  }

  const check = () => {
    getData(setAlbumData);
  }

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={check}>Get values</button>
      <button>
        click
      </button>
      <button onClick={() => navigate('/rq-super-heros')}>
        change
      </button>
      <div>
        {albumData.map(album => {
          console.log(album)
          return (
            <div className="list-item">
              <h3>{album.title}</h3>
              <p>{album.id}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}