import { Navigate } from 'react-router-dom';

interface AuthComponentProps {
  component: React.ReactNode;
}

const AuthComponent = ({ component }: AuthComponentProps) => {
  const hasAuthToken = sessionStorage.getItem('auth_token');

  return <div>{hasAuthToken ? component : <Navigate to="/?redirectURL=login" />}</div>;
};

export default AuthComponent;
