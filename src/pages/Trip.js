import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TripDetails from '../containers/TripDetails';
import Feedback from '../components/Feedback';

const Trip = () => {
  const trips = useSelector((state) => state.trips);
  const feedbackData = useSelector((state) => state.feedback);
  const { id } = useParams();

  return (
    <>
      { feedbackData.active
        ? <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
        : null }
      { trips.loading
        ? <span>Loading</span>
        : trips.tripsCollection
          .filter((trip) => trip.id === parseInt(id, 10))
          .map((trip) => (<TripDetails trip={trip} key={trip.id} />)) }
    </>
  );
};

export default Trip;
