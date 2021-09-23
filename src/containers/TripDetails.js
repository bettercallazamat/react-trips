import PropTypes from 'prop-types';
import '../assets/styles/TripDetails.css';
import ReservationForm from '../components/ReservationForm';

const TripDetails = ({ trip }) => (
  <div className="TripDetails">
    <h3 className="title">{trip.title}</h3>
    <img alt="trip" src={trip.imageUrl} />
    <p className="description">
      <strong>Description: </strong>
      {trip.description}
    </p>
    <p className="description">
      <strong>Tour details text: </strong>
      {trip.tourDetailsText}
    </p>
    <p className="description">
      <strong>Altitude difference: </strong>
      {trip.altitudeDifference}
    </p>
    <p className="description">
      <strong>Season: </strong>
      {trip.season}
    </p>
    <p className="description">
      <strong>Distance by car: </strong>
      {trip.distanceByCar}
    </p>
    <p className="description">
      <strong>Trekking distance: </strong>
      {trip.trekkingDistance}
    </p>
    <p className="description">
      <strong>Cost: </strong>
      {trip.cost}
    </p>
    <ReservationForm tripDates={trip.trip_dates} />
  </div>
);

TripDetails.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    tourDetailsText: PropTypes.string,
    altitudeDifference: PropTypes.string,
    season: PropTypes.string,
    distanceByCar: PropTypes.string,
    trekkingDistance: PropTypes.string,
    cost: PropTypes.string,
    trip_dates: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default TripDetails;
