import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api";
import { useAuth } from "../auth";

export const HomePage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [albumData, setAlbumData] = useState([]);

  const handleLogout = () => {
    auth.logout();
    navigate('/login', { replace: true });
  }

  const check = () => {
    let data = getData();
    console.log(data);
    setAlbumData(data);
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <button onclick={check}>Get values</button>
      Homepage
      <button>
        click
      </button>
      <button onClick={() => navigate('/rq-super-heros')}>
        change
      </button>
      <button onClick={() => navigate('/rq-super-heros')}>
        change
      </button>
    </div>
  )
}