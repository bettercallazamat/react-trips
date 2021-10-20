import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestReservation } from '../helpers/requests';
import convertDate from '../helpers/convertDate';

const ReservationForm = ({ tripDates }) => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const [tripToReserve, setTripToReserve] = useState(tripDates[0].id);
  let tripId;

  const options = tripDates
    .filter((tripDate) => (new Date(tripDate.date)).getTime() > (new Date()).getTime())
    .map((tripDate) => (
      <option value={tripDate.id} key={tripDate.id}>
        {convertDate(new Date(tripDate.date))}
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
    requestReservation(dispatch, userData.id, tripToReserve, userData.token);
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <h3 className="title">RESERVATION</h3>
      <p>Choose available date of the trip:</p>
      <select name="trip-date-selection" onChange={handleChange}>
        {options}
      </select>
      <button className="action" type="submit">RESERVE</button>
    </form>
  );
};

ReservationForm.propTypes = {
  tripDates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReservationForm;
