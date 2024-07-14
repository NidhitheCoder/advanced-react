import Button from './Button';

const LoginForm = () => {
  const onSubmitForm = () => {
    console.log('form submitting');
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
        <input className="bg-slate-100 outline-none pl-2 w-full" type="email" />
        <label className="w-full mt-2">Password</label>
        <input
          className="bg-slate-100 outline-none pl-2 w-full mb-2"
          type="password"
        />
        <Button label="Login" className="bg-sky-700 text-white w-1/2" />
      </form>
    </div>
  );
};

export default LoginForm;
