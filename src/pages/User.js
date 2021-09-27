import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserInfo } from '../helpers/requests';
import convertDate from '../helpers/convertDate';

const User = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id, userData.token);
  }, [dispatch]);

  return (
    <div>
      <p>{userData.username}</p>
      {
        userData.loading
          ? <span>Loading...</span>
          : (
            userData.reservations.map((reservation) => (
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
            ))
          )
      }
    </div>
  );
};

export default User;
