import axios from 'axios';
import { GET_TRIPS_SUCCESS, GET_TRIPS_FAIL, GET_TRIPS_IN_PROGRESS } from '../constants/actions';

const getTripsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_TRIPS_IN_PROGRESS,
    });

    const response = await axios.get('http://localhost:3001/api/v1/trips');
    dispatch({
      type: GET_TRIPS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRIPS_FAIL,
      error: error.message,
    });
  }
};

export default getTripsAction;
