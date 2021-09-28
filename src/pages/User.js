import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestUserInfo } from '../helpers/requests';
import convertDate from '../helpers/convertDate';
import '../assets/styles/User.css';

const User = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id, userData.token);
  }, [dispatch]);

  return (
    <div className="User">
      <p className="username">
        <strong>Username: </strong>
        <span>{userData.username}</span>
      </p>
      <h4>Your reservations:</h4>
      {
        userData.loading
          ? <span className="loading">Loading...</span>
          : (
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
          )
      }
    </div>
  );
};

export default User;
