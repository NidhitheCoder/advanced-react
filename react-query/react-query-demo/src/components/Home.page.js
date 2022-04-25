import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

export const HomePage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate('/login', { replace: true });
  }
  console.log(auth?.user);

  return (
    <div>
      Homepage
      <button>
        click
      </button>
      <button onClick={() => navigate('/rq-super-heros')}>
        change
      </button>
      <h2>{auth?.user?.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}