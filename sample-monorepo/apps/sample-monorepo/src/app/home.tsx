import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  const onShowMessage = async () => {
    const host = import.meta.env ?? 'localhost';
    const port = import.meta.env.PORT ? Number(import.meta.env.PORT) : 3000;
    const { data } = await axios.get(`http://${host}:${port}`);
    setMessage(data.message);
  };

  return (
    <div>
      <p>Welcome home</p>
      <button onClick={onShowMessage}>Show Message</button>
      <span>{message}</span>
    </div>
  );
};

export default Home;
