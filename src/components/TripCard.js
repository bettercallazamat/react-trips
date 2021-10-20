import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/TripCard.css';

const TripCard = ({ trip }) => (
  <div className="TripCard">
    <Link to={`/trip/${trip.id}`} key={trip.id} className="trip-img">
      <img alt="trip" src={trip.imageUrl} />
    </Link>
    <div className="info">
      <h3 className="title">{trip.title}</h3>
      <p className="desc">{trip.description}</p>
    </div>
    <div className="extra-info">
      <p className="trip-cost">{trip.cost}</p>
      <p className="trip-cost-comment">* per person</p>
      <Link to={`/trip/${trip.id}`} key={trip.id} className="details-link">
        <p>DETAILS</p>
      </Link>
    </div>
  </div>
);

TripCard.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default TripCard;
