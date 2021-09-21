import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getTripsAction from '../actions/trips';
import TripsList from '../containers/TripsList';
import Nav from '../containers/Nav';

const Home = () => {
  const data = useSelector((state) => state.trips);
  const dispatch = useDispatch();

  // const allState = useSelector((state) => state);
  // console.log(allState);

  useEffect(() => {
    dispatch(getTripsAction());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div>
        {data.loading
          ? <span className="loading-text">Loading...</span>
          : <TripsList trips={data.trips} />}
      </div>
    </>
  );
};

export default Home;
