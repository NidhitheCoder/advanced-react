import axios from "../axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const handleSubmit = () => {
    axios.post('/login', {
      "access_token": "sdkfjhskjhksjfksdf",
      "refresh_token": "dfsdfsjdgfsjfs",
      "id": 4,
      "email": "babu"
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => { 
        console.log(response);
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.access_token);
        localStorage.setItem("unser_data", response.email);
        // const decodedUserData = JSON.parse(atob(response.data.access.split(".")[1]));
        // setLoginData(decodedUserData);
        navigate('/');
      })
      .catch((err) => {
        // show error message
        console.log('error is', err);
      });
  };

  useEffect(() => {
    if(loginData) {
      loginData.is_admin && navigate('/somehwre');
      !loginData.is_admin && navigate('/somewh');
    }
  }, [loginData, navigate]);

  return (
    <div>
      Login
      <button onClick={handleSubmit}>
        click
      </button>
    </div>
  )
}