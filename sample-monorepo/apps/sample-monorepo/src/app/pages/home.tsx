import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../axios';

const Home = () => {
  const [message, setMessage] = useState('');
  const imageURL = 'https://picsum.photos/600/400';
  const logoURL = 'https://picsum.photos/50/50';

  const onShowMessage = async () => {
    const { data } = await axios.get('/');

    setMessage(data.message);
  };

  return (
    <div className="bg-gray-700 h-screen w-screen flex flex-col text-white overflow-y-auto overflow-x-hidden">
      {/* Navbar section */}
      <div className="h-20 bg-gray-600 border-b-[0.5px] border-solid border-gray-400 flex flex-row justify-between items-center px-4">
        <img src={logoURL} alt="Logo" />
        <div className=" flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl mb-1">Gallery</h2>
          <p className="mb-4">Share your posts with images</p>
        </div>
        <div className="flex flex-row gap-4 justify-between items-center">
          <Link to={'/posts'}>Posts</Link>
          <button
            className="bg-gray-600 border-solid border-gray-500 border-[0.5px] opacity-80 rounded-md px-4 py-2 hover:opacity-100 ml-6"
            onClick={onShowMessage}
          >
            Test api
          </button>
        </div>
      </div>
      {/* Content section */}
      <div className="flex flex-col justify-center items-center p-10">
        <img
          className="transition-opacity animate-pulse mt-6"
          src={imageURL}
          alt="Home screen banner"
        />
        <p className="py-8 text-2xl">
          Welcome to the sample app that helps to share your posts with friends.
        </p>
        {message && <span>The secret message: {message}</span>}
      </div>
    </div>
  );
};

export default Home;
