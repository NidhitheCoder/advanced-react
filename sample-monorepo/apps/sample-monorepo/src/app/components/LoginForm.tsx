import Button from './Button';

const LoginForm = () => {
  const onSubmitForm = () => {
    console.log('form submitting');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3>Login</h3>
      <form
        action="post"
        className="flex flex-col justify-between items-start"
        onSubmit={onSubmitForm}
      >
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <Button label="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
