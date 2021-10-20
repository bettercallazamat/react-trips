import { useSelector } from 'react-redux';
import TripsList from '../containers/TripsList';

const Home = () => {
  const trips = useSelector((state) => state.trips);

  return (
    <div>
      {trips.loading
        ? <span className="loading">Loading...</span>
        : <TripsList trips={trips.tripsCollection} />}
    </div>
  );
};

export default Home;
