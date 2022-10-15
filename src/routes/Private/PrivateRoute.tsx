import { Navigate } from 'react-router-dom';

import Root from '../../pages/Root';

const PrivateRoute = () => {
  const isUserAuthenticated = true; // Send request to backend for authentication using cookies
  return isUserAuthenticated ? <Root /> : <Navigate to="/" />;
};

export default PrivateRoute;
