import axios from 'axios';
import { loginAction, getUserInfo } from '../actions/user';
import getTripsInfo from '../actions/trips';

const requests = {
  users: 'http://localhost:3001/api/v1/users',
  login: 'http://localhost:3001/api/v1/login',
  trips: 'http://localhost:3001/api/v1/trips',
  reservations: 'http://localhost:3001/api/v1/reservations',
};

export const requestSignup = async (username, password, passwordConf) => {
  try {
    await axios.post(requests.users,
      {
        username,
        password,
        password_confirmation: passwordConf,
      });
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};

export const requestUserInfo = async (dispatch, id) => {
  try {
    const response = await axios.get(`${requests.users}/${id}`);
    dispatch(getUserInfo(response.data.reserved_trip_dates));
  } catch (error) {
    console.log(error);
  }
};

export const requestTripsInfo = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/trips');
    dispatch(getTripsInfo(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const requestReservation = async (userId, tripDateId, token) => {
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
  } catch (error) {
    console.log(error);
  }
};
