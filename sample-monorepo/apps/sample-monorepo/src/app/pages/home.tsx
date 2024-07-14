import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import CustomModal, { ModalPosition } from '../components/CustomModal';
import TabCollection from '../components/TabCollection';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import axios from '../axios';

const Home = () => {
  const [pingSuccess, setPingSuccess] = useState('');
  const [hasLoginPopupOpen, setHasLoginPopupOpen] = useState(false);

  const imageURL = 'https://picsum.photos/600/400';
  const logoURL = 'https://picsum.photos/50/50';

  const tabItems = [
    {
      title: 'Register',
      component: <RegisterForm />,
    },
    { title: 'Login', component: <LoginForm /> },
  ];

  const onShowMessage = async () => {
    const { data } = await axios.get('/');

    setPingSuccess(data);
  };

  const onLoginButtonClick = () => {
    setHasLoginPopupOpen(true);
  };

  const onLoginModalClose = () => {
    setHasLoginPopupOpen(false);
  };

  const pingText = pingSuccess ? 'API is Active' : 'Check API';

  return (
    <div className="bg-gray-700 h-screen w-screen flex flex-col text-white overflow-y-auto overflow-x-hidden">
      {/* Navbar section */}
      <div className="h-20 bg-gray-600 border-b-[0.5px] border-solid border-gray-400 flex flex-row justify-between items-center px-4">
        <img src={logoURL} alt="Logo" />
        <div className=" flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl p-1">Gallery</h2>
          <p className="mb-4 hidden sm:block">Share your posts with images</p>
        </div>
        <div className="flex flex-row gap-4 justify-between items-center">
          <Link to="/#">Home</Link>
          <Link to="/posts">Posts</Link>
          <Button
            className={
              pingSuccess
                ? 'bg-green-600 border-green-800'
                : 'bg-gray-600 border-gray-500'
            }
            onClick={onShowMessage}
            label={pingText}
          />
          <Button
            className="bg-blue-600 border-white-100"
            label="Not login?"
            onClick={onLoginButtonClick}
          />
          {hasLoginPopupOpen && (
            <CustomModal
              variant={ModalPosition.topRight}
              onOutsideClick={onLoginModalClose}
              className="rounded-md m-4"
            >
              <TabCollection items={tabItems} />
            </CustomModal>
          )}
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
      </div>
    </div>
  );
};

export default Home;
