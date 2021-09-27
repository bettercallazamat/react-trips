import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import TripsList from '../containers/TripsList';
// import { requestTripsInfo } from '../helpers/requests';
import Feedback from '../components/Feedback';

const Home = () => {
  const trips = useSelector((state) => state.trips);
  const feedbackData = useSelector((state) => state.feedback);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   requestTripsInfo(dispatch);
  // }, [dispatch]);

  return (
    <>
      {feedbackData.active
        ? <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
        : null }
      <div>
        {trips.loading
          ? <span>Loading...</span>
          : <TripsList trips={trips.tripsCollection} />}
      </div>
    </>
  );
};

export default Home;
