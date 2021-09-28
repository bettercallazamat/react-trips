import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TripDetails from '../containers/TripDetails';

const Trip = () => {
  const trips = useSelector((state) => state.trips);
  const { id } = useParams();

  return (
    <>
      { trips.loading
        ? <span className="loading">Loading...</span>
        : trips.tripsCollection
          .filter((trip) => trip.id === parseInt(id, 10))
          .map((trip) => (<TripDetails trip={trip} key={trip.id} />)) }
    </>
  );
};

export default Trip;
