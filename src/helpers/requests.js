import axios from 'axios';
import {
  loginAction,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
} from '../actions/user';
import {
  getTripsRequest,
  getTripsSuccess,
  getTripsFailure,
} from '../actions/trips';
import handleError from './handleError';
import { sendFeedbackAction } from '../actions/feedback';

const requests = {
  users: 'http://localhost:3001/api/v1/users',
  login: 'http://localhost:3001/api/v1/login',
  trips: 'http://localhost:3001/api/v1/trips',
  reservations: 'http://localhost:3001/api/v1/reservations',
};

export const requestUserInfo = async (dispatch, id, token) => {
  try {
    dispatch(getUserInfoRequest());
    const response = await axios.get(`${requests.users}/${id}`,
      {
        headers: {
          Authorization: token,
        },
      });
    dispatch(getUserInfoSuccess(response.data.reserved_trip_dates));
  } catch (error) {
    dispatch(getUserInfoFailure());
    handleError(dispatch, 'userInfo', error);
  }
};

export const requestLogin = async (dispatch, username, password) => {
  try {
    const response = await axios.post(requests.login,
      {
        username,
        password,
      });
    dispatch(loginAction(response.data));
    requestUserInfo(dispatch, response.data.id, response.data.auth_token);
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully logged in.' }));
  } catch (error) {
    handleError(dispatch, 'login', error);
  }
};

export const requestSignup = async (dispatch, username, password, passwordConf) => {
  try {
    await axios.post(requests.users,
      {
        username,
        password,
        password_confirmation: passwordConf,
      });
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'User successfully created.' }));
    requestLogin(dispatch, username, password);
  } catch (error) {
    handleError(dispatch, 'signup', error);
  }
};

export const requestTripsInfo = async (dispatch) => {
  try {
    dispatch(getTripsRequest());
    const response = await axios.get('http://localhost:3001/api/v1/trips');
    dispatch(getTripsSuccess(response.data));
  } catch (error) {
    dispatch(getTripsFailure);
    // handleError(dispatch, 'trips', error);
  }
};

export const requestReservation = async (dispatch, userId, tripDateId, token) => {
  try {
    await axios.post(requests.reservations,
      {
        reservor_id: userId,
        reserved_trip_date_id: tripDateId,
      },
      {
        headers: {
          Authorization: token,
        },
      });
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully reserved trip.' }));
  } catch (error) {
    handleError(dispatch, 'reservation', error);
  }
};
