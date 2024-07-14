import Button from './Button';

const RegisterForm = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3 className="font-bold">Register</h3>
      <form
        action="post"
        className="flex flex-col justify-between items-center w-full"
      >
        <label htmlFor="email" className="w-full mt-2">
          Email
        </label>
        <input name="email" className="bg-slate-100 outline-none w-full mt-2" />
        <label htmlFor="password" className="w-full mt-2">
          Password
        </label>
        <input
          name="password"
          className="bg-slate-100 outline-none w-full mt-2"
        />
        <label htmlFor="confirm-password" className="w-full mt-2">
          Confirm Password
        </label>
        <input
          name="confirm-password"
          className="bg-slate-100 outline-none w-full mt-2"
        />

        <Button label="Register" className="bg-sky-700 text-white w-1/2" />
      </form>
    </div>
  );
};

export default RegisterForm;
