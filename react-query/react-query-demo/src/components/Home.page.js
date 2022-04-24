import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const handleSubmit = () => {
    axios.post('someAPi', {
      email: 'sample@gmail.com',
      password: 'samplePassword'
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => { 
        const decodedUserData = JSON.parse(atob(response.data.access.split(".")[1]));
        setLoginData(decodedUserData);
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
      Homepage
      <button onClick={handleSubmit}>
        click
      </button>
      <button onClick={() => navigate('/rq-super-heros') }>
        change
      </button>
    </div>
  )
}