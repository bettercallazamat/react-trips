import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserInfo } from '../helpers/requests';
import Nav from '../containers/Nav';
import convertDate from '../helpers/convertDate';

const User = () => {
  const userData = useSelector((state) => state.currentUser);

  const allState = useSelector((state) => state);
  console.log(allState);

  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id);
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <p>{userData.username}</p>
      { userData.reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>
            Trip date:
            {convertDate(new Date(reservation.date))}
          </p>
          <p>
            Trip title:
            {reservation.trip.title}
          </p>
          <p>
            Reservation made at:
            {convertDate(new Date(reservation.created_at))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default User;
