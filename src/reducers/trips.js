import { GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE } from '../constants/actions';

const initialState = {
  tripsCollection: [],
  loading: true,
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS_REQUEST:
      return { ...state, loading: true };
    case GET_TRIPS_SUCCESS:
      return { ...state, tripsCollection: action.payload, loading: false };
    case GET_TRIPS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default tripsReducer;
