import axios from "axios";
import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const auth = useAuth();
  const handleSubmit = () => {
    axios.post('abc/api', {
      "email": "test@gmail.com",
      "password": "12345",
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        const userData = JSON.parse(atob(response.data.access.split(".")[1]));
        auth.login(userData);
        userData.is_admin && navigate('/', {replace: true});
        !userData.is_admin && navigate('/something', {replace: true});
      })
      .catch((err) => {
        // show error message
        console.log('error is', err);
      });
  };

  const APICall = (setData) => {
    axios.post('abc/api', {
      "email": "test@gmail.com",
      "password": "12345",
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        const userData = JSON.parse(atob(response.data.access.split(".")[1]));
        auth.login(userData);
        setData(userData);
        userData.is_admin && navigate('/', {replace: true});
        !userData.is_admin && navigate('/something', {replace: true});
      })
      .catch((err) => {
        // show error message
        console.log('error is', err);
      });
  }

  const check = () => {
    APICall(setData);
  }

  return (
    <div>
      Login
      <button onClick={handleSubmit}>
        click
      </button>
    </div>
  )
}