import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { requestUserInfo } from '../helpers/requests';
import convertDate from '../helpers/convertDate';
import '../assets/styles/User.css';

const User = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id, userData.token);
  }, [dispatch]);

  const redirectTo404 = (userData) => {
    if (!userData.id) {
      return <Redirect to="/" />;
    }
    return null;
  };

  const reservationsReturner = (reservations) => {
    if (reservations[0]) {
      return (
        userData.reservations.map((reservation) => (
          <div className="reserved-trip" key={reservation.id}>
            <p className="date">
              <span>When: </span>
              {convertDate(new Date(reservation.date))}
            </p>
            <p className="title">
              <span>Where: </span>
              <Link to={`/trip/${reservation.trip.id}`} className="trip-link">
                {reservation.trip.title}
              </Link>
            </p>
            <p className="created">
              <span>Reserved at: </span>
              {convertDate(new Date(reservation.created_at))}
            </p>
          </div>
        ))
      );
    }
    return <p className="noReservations">No reservations made.</p>;
  };

  return (
    <>
      {redirectTo404(userData)}
      <div className="User">
        <p className="username">
          <strong>Username: </strong>
          <span>{userData.username}</span>
        </p>
        <h4>Your reservations:</h4>
        { userData.loading
          ? <span className="loading">Loading...</span>
          : reservationsReturner(userData.reservations)}
      </div>
    </>
  );
};

export default User;
