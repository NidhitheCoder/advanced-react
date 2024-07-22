import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userLogin } from '../api';
import {
  ACCESS_TOKEN_KEY,
  INITIAL_USER,
  ROUTES,
  USER_NAME_KEY,
} from '../constants';
import { User } from '../types';
import Button from './Button';

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(INITIAL_USER);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentEvent = event.target as HTMLInputElement;
    setUser((prev) => ({ ...prev, [currentEvent?.name]: currentEvent?.value }));
  };

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = await userLogin(user);

    if (userData) {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, userData.token);
      sessionStorage.setItem(USER_NAME_KEY, userData.user.name);
      navigate(ROUTES.dashboard);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3 className="font-bold">Login</h3>
      <form
        action="post"
        className="flex flex-col justify-between items-center w-full"
        onSubmit={onSubmitForm}
      >
        <label className="w-full mt-2">Email</label>
        <input
          name="email"
          className="bg-slate-100 mt-2 outline-none pl-2 w-full"
          type="email"
          onChange={onInputChange}
        />
        <label className="w-full mt-2">Password</label>
        <input
          name="password"
          className="bg-slate-100 mt-2 outline-none pl-2 w-full mb-2"
          type="password"
          onChange={onInputChange}
        />
        <Button
          type="submit"
          label="Login"
          className="bg-sky-700 text-white w-1/2"
        />
      </form>
    </div>
  );
};

export default LoginForm;
