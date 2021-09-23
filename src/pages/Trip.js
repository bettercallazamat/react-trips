import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from '../containers/Nav';
import TripDetails from '../containers/TripDetails';
import { requestTripsInfo } from '../helpers/requests';

const Trip = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.tripsCollection);
  const { id } = useParams();

  useEffect(() => {
    requestTripsInfo(dispatch);
  }, [dispatch, id]);

  const allState = useSelector((state) => state);
  console.log(allState);

  const trip = trips.filter((trip) => trip.id === parseInt(id, 10))[0];

  return (
    <>
      <Nav />
      <TripDetails trip={trip} />
    </>
  );
};

export default Trip;
