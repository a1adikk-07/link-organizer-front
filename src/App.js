import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRoutes from './AppRoutes.js';
import { current } from './redux/auth/auth-operations.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
