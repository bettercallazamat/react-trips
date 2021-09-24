import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TripsList from '../containers/TripsList';
import Nav from '../containers/Nav';
import { requestTripsInfo } from '../helpers/requests';
import Feedback from '../components/Feedback';

const Home = () => {
  const trips = useSelector((state) => state.trips.tripsCollection);
  const feedbackData = useSelector((state) => state.feedback);

  const allState = useSelector((state) => state);
  console.log(allState);

  const dispatch = useDispatch();

  useEffect(() => {
    requestTripsInfo(dispatch);
  }, [dispatch, feedbackData]);

  return (
    <>
      <Nav />
      {feedbackData.active
        ? <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
        : null }
      <div>
        <TripsList trips={trips} />
      </div>
    </>
  );
};

export default Home;
