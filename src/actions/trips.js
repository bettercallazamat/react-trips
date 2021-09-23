import { GET_TRIPS } from '../constants/actions';

const getTripsInfo = (data) => ({
  type: GET_TRIPS,
  payload: data,
});

export default getTripsInfo;
