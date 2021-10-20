import PropTypes from 'prop-types';
import '../assets/styles/TripDetails.css';
import ReservationForm from '../components/ReservationForm';

const TripDetails = ({ trip }) => (
  <div className="TripDetails">
    <h3 className="title">{trip.title}</h3>
    <img alt="trip" src={trip.imageUrl} />
    <div className="columns">
      <div className="description">
        <p className="description-item">
          <strong>Description: </strong>
          {trip.description}
        </p>
        <p className="description-item">
          <strong>Tour details text: </strong>
          {trip.tourDetailsText}
        </p>
        <p className="description-item">
          <strong>Altitude difference: </strong>
          {trip.altitudeDifference}
        </p>
        <p className="description-item">
          <strong>Season: </strong>
          {trip.season}
        </p>
        <p className="description-item">
          <strong>Distance by car: </strong>
          {trip.distanceByCar}
        </p>
        <p className="description-item">
          <strong>Trekking distance: </strong>
          {trip.trekkingDistance}
        </p>
        <p className="description-item">
          <strong>Cost: </strong>
          {trip.cost}
        </p>
      </div>
      <div className="reservation-form-wrapper">
        <ReservationForm tripDates={trip.trip_dates} />
      </div>
    </div>
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
