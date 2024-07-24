import { Navigate } from 'react-router-dom';

import { ACCESS_TOKEN_KEY } from '../constants';

interface AuthComponentProps {
  component: React.ReactNode;
}

const AuthComponent = ({ component }: AuthComponentProps) => {
  const hasAuthToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);

  return (
    <div>
      {hasAuthToken ? component : <Navigate to="/?redirectURL=login" />}
    </div>
  );
};

export default AuthComponent;
