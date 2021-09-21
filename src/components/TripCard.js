import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/TripCard.css';

const TripCard = ({ trip }) => (
  <div className="TripCard">
    <img alt="trip" src={trip.imageUrl} />
    <div className="info">
      <h3 className="title">{trip.title}</h3>
      <p className="desc">{trip.description}</p>
    </div>
    <div className="extra-info">
      <p>{trip.cost}</p>
      <p>per person</p>
      <Link to={`/trip/${trip.id}`} key={trip.id}>
        <p>DETAILS</p>
      </Link>
    </div>
  </div>
);

TripCard.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.number,
    description: PropTypes.string,
    cost: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default TripCard;
