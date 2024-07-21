import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User, userRegister } from '../api';
import Button from './Button';

const initialValue: User = {
  name: '',
  password: '',
  email: '',
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(initialValue);

  const onRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = await userRegister(user);
    if (userData) {
      navigate('/?redirectURL=login');
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentEvent = event.target as HTMLInputElement;
    setUser((prev) => ({ ...prev, [currentEvent?.name]: currentEvent?.value }));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3 className="font-bold">Register</h3>
      <form
        className="flex flex-col justify-between items-center w-full"
        onSubmit={onRegister}
      >
        <label htmlFor="name" className="w-full mt-2">
          Name
        </label>
        <input
          name="name"
          className="bg-slate-100 outline-none w-full my-2"
          onChange={onInputChange}
        />
        <label htmlFor="email" className="w-full mt-2">
          Email
        </label>
        <input
          name="email"
          className="bg-slate-100 outline-none w-full mt-2"
          onChange={onInputChange}
        />
        <label htmlFor="password" className="w-full mt-2">
          Password
        </label>
        <input
          name="password"
          className="bg-slate-100 outline-none w-full my-2"
          onChange={onInputChange}
        />
        <Button
          label="Register"
          type="submit"
          className="bg-sky-700 text-white w-1/2"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
