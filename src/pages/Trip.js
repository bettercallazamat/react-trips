import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import TripDetails from '../containers/TripDetails';

const Trip = () => {
  const trips = useSelector((state) => state.trips);
  const { id } = useParams();

  const tripSelector = (id) => {
    const trip = trips.tripsCollection.filter((trip) => trip.id === parseInt(id, 10));
    return (
      trip[0]
        ? trip.map((trip) => (<TripDetails trip={trip} key={trip.id} />))
        : <Redirect to="/Page404" />
    );
  };

  return (
    <>
      {trips.loading
        ? <span className="loading">Loading...</span>
        : tripSelector(id)}
    </>
  );
};

export default Trip;
