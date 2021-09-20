import { GET_TRIPS_SUCCESS, GET_TRIPS_FAIL, GET_TRIPS_IN_PROGRESS } from '../constants/actions';

const initialState = {
  trips: [],
  error: null,
  loading: true,
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS_IN_PROGRESS:
      return { ...state, loading: true };
    case GET_TRIPS_SUCCESS:
      return { ...state, trips: action.payload, loading: false };
    case GET_TRIPS_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default tripsReducer;
