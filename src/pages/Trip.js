import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from '../containers/Nav';
import TripDetails from '../containers/TripDetails';
import Feedback from '../components/Feedback';
import { requestTripsInfo } from '../helpers/requests';

const Trip = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.tripsCollection);
  const feedbackData = useSelector((state) => state.feedback);
  const { id } = useParams();

  useEffect(() => {
    requestTripsInfo(dispatch);
  }, [dispatch, id]);

  const trip = trips.filter((trip) => trip.id === parseInt(id, 10))[0];

  return (
    <>
      <Nav />
      {feedbackData.active
        ? <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
        : null}
      <TripDetails trip={trip} />
    </>
  );
};

export default Trip;
