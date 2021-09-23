import { LOGIN, LOGOUT, GET_USER_INFO } from '../constants/actions';

const loginAction = (data) => ({
  type: LOGIN,
  payload: data,
});

const logoutAction = () => ({
  type: LOGOUT,
});

const getUserInfo = (data) => ({
  type: GET_USER_INFO,
  payload: data,
});

export {
  loginAction,
  logoutAction,
  getUserInfo,
};
