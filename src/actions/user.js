import {
  LOGIN,
  LOGOUT,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
} from '../constants/actions';

export const loginAction = (data) => ({
  type: LOGIN,
  payload: data,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const getUserInfoRequest = () => ({
  type: GET_USER_INFO_REQUEST,
});

export const getUserInfoSuccess = (data) => ({
  type: GET_USER_INFO_SUCCESS,
  payload: data,
});

export const getUserInfoFailure = () => ({
  type: GET_USER_INFO_FAILURE,
});
