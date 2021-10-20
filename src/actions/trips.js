import { GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE } from '../constants/actions';

export const getTripsRequest = () => ({
  type: GET_TRIPS_REQUEST,
});

export const getTripsSuccess = (data) => ({
  type: GET_TRIPS_SUCCESS,
  payload: data,
});

export const getTripsFailure = () => ({
  type: GET_TRIPS_FAILURE,
});
