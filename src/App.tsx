import { Routes, Route } from 'react-router-dom';

import { Root, Home } from './pages';
import PrivateRoute from './routes/Private/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
