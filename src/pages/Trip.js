import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from '../containers/Nav';
import TripDetails from '../containers/TripDetails';
import getTripsAction from '../actions/trips';

const Trip = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.trips);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTripsAction());
  }, [dispatch, id]);

  const allState = useSelector((state) => state);
  console.log(allState);

  const trip = data.trips.filter((trip) => trip.id === parseInt(id, 10))[0];

  return (
    <>
      <Nav />
      {data.loading
        ? <span className="loading-text">Loading...</span>
        : <TripDetails trip={trip} />}
    </>
  );
};

export default Trip;
