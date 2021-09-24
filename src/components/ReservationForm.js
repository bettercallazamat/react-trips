import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { requestReservation } from '../helpers/requests';

const ReservationForm = ({ tripDates }) => {
  const userData = useSelector((state) => state.currentUser);
  const [tripToReserve, setTripToReserve] = useState(tripDates[0].id);
  let tripId;

  const options = tripDates.map((tripDate) => (
    <option value={tripDate.id} key={tripDate.id}>
      {tripDate.date}
    </option>
  ));

  const handleChange = (e) => {
    if (e.target.name === 'trip-date-selection') {
      tripId = e.target.value;
      setTripToReserve(tripId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestReservation(userData.id, tripToReserve, userData.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="trip-date-selection" onChange={handleChange}>
        {options}
      </select>
      <button type="submit">RESERVE</button>
    </form>
  );
};

ReservationForm.propTypes = {
  tripDates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReservationForm;
