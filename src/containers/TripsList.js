import PropTypes from 'prop-types';
import TripCard from '../components/TripCard';
import '../assets/styles/TripsList.css';

const TripsList = ({ trips }) => (
  <div className="TripsList">
    {
      trips.map((trip) => (
        <TripCard trip={trip} key={trip.id} />
      ))
    }
  </div>
);

TripsList.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TripsList;
