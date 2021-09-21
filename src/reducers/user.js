import { CREATE_USER, LOGIN, LOGOUT } from '../constants/actions';

const initialState = {
  username: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, username: action.username };
    case LOGIN:
      return { ...state, token: action.token, username: action.username };
    case LOGOUT:
      return { ...state, id: null, token: null };
    default:
      return state;
  }
};

export default userReducer;
