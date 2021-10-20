import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestTripsInfo } from './helpers/requests';
import Routes from './routes';
import Feedback from './components/Feedback';

const App = () => {
  const dispatch = useDispatch();
  const feedbackData = useSelector((state) => state.feedback);

  useEffect(() => {
    requestTripsInfo(dispatch);
  }, [dispatch]);

  return (
    <>
      { feedbackData.active
        ? <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
        : null }
      <Routes />
    </>
  );
};

export default App;
