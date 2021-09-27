import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TripDetails from '../containers/TripDetails';
import Feedback from '../components/Feedback';
// import { requestTripsInfo } from '../helpers/requests';

const Trip = () => {
  const trips = useSelector((state) => state.trips.tripsCollection);
  // console.log(trips);
  const feedbackData = useSelector((state) => state.feedback);
  const { id } = useParams();
  const [trip, setTrip] = useState({});

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   requestTripsInfo(dispatch);
  // }, [dispatch, id]);

  useEffect(() => {
    const filteredTrip = trips.filter((trip) => trip.id === parseInt(id, 10))[0];
    setTrip(filteredTrip);
    setLoading(false);
    console.log('LOADED');
    console.log(loading);
    console.log(filteredTrip);
  }, [id]);

  return (
    <>
      {feedbackData.active
        ? <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
        : null}
      {loading
        ? <span>Loading</span>
        : <TripDetails trip={trip} />}
    </>
  );
};

export default Trip;
