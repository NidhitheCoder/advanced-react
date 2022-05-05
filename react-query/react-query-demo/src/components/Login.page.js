import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

export const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = () => {
    axios.get('http://localhost:4000/login/', {
      "email": "test@gmail.com",
      "password": "12345",
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        const userData = JSON.parse(atob(response.data.access_token.split(".")[1]));
        auth.login(userData);
        userData.is_admin && navigate('/', {replace: true});
        !userData.is_admin && navigate('/something', {replace: true});
      })
      .catch((err) => {
        // show error message
        console.log('error is', err);
      });
  };

  return (
    <div className="login-comp">
      Login
      <button onClick={handleSubmit}>
        click
      </button>
    </div>
  )
}