import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import TripsList from '../containers/TripsList';
// import { requestTripsInfo } from '../helpers/requests';

const Home = () => {
  const trips = useSelector((state) => state.trips);

  return (
    <div>
      {trips.loading
        ? <span>Loading...</span>
        : <TripsList trips={trips.tripsCollection} />}
    </div>
  );
};

export default Home;
