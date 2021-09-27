import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestTripsInfo } from './helpers/requests';
import Routes from './routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    requestTripsInfo(dispatch);
  }, [dispatch]);

  return (
    <Routes />
  );
};

export default App;
