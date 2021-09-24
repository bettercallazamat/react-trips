import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TripsList from '../containers/TripsList';
import Nav from '../containers/Nav';
import { requestTripsInfo } from '../helpers/requests';

const Home = () => {
  const trips = useSelector((state) => state.trips.tripsCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    requestTripsInfo(dispatch);
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div>
        <TripsList trips={trips} />
      </div>
    </>
  );
};

export default Home;
