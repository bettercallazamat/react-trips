import axios from 'axios';
import { CREATE_USER, LOGIN, LOGOUT } from '../constants/actions';

const createUserAction = (username, password, passwordConfirmation) => async (dispatch) => {
  await axios.post(`http://localhost:3001/api/v1/users?username=${username}&password=${password}&password_confirmation=${passwordConfirmation}`);
  dispatch({
    type: CREATE_USER,
  });
};

const loginAction = (userCred) => async (dispatch) => {
  const { username, password } = userCred;
  const response = await axios.post(`http://localhost:3001/api/v1/login?username=${username}&password=${password}`);
  // console.log(response);
  dispatch({
    type: LOGIN,
    username,
    token: response.data.auth_token,
  });
};

const logoutAction = () => ({
  type: LOGOUT,
});

export { createUserAction, loginAction, logoutAction };
