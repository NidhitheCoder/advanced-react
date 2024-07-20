import { ChangeEvent, FormEvent, useState } from 'react';

import { User, userLogin } from '../api';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
const initialValue: User = {
  password: '',
  email: '',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(initialValue);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentEvent = event.target as HTMLInputElement;
    setUser((prev) => ({ ...prev, [currentEvent?.name]: currentEvent?.value }));
  };

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = await userLogin(user);

    if (userData) {
      sessionStorage.setItem('access_token', userData.token);
      sessionStorage.setItem('user_name', userData.user.name);
      navigate('/dashboard');
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
